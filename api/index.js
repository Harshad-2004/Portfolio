const fs = require("fs/promises");
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("../lib/db");
const Message = require("../lib/Message");
const sendNotification = require("../lib/mail");

const app = express();
app.set("trust proxy", 1); // behind Vercel's proxy: needed for correct client IPs
app.use(helmet());
app.use(express.json({ limit: "10kb" }));

// Best-effort per-instance limiter. Serverless instances don't share memory,
// so this deters casual spam; it is not a hard guarantee.
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, message: "Too many messages. Please try again later." },
});

const stripTags = (s) => String(s ?? "").replace(/<[^>]*>/g, "").trim();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", contactLimiter, async (req, res) => {
  const body = req.body || {};
  if (body.website) return res.status(201).json({ ok: true }); // honeypot: bots fill this hidden field

  const name = stripTags(body.name);
  const email = stripTags(body.email).toLowerCase();
  const message = stripTags(body.message);

  if (!name || name.length > 80) return res.status(400).json({ ok: false, message: "Enter your name (up to 80 characters)." });
  if (!EMAIL_RE.test(email) || email.length > 120) return res.status(400).json({ ok: false, message: "Enter a valid email address." });
  if (message.length < 10 || message.length > 2000) return res.status(400).json({ ok: false, message: "Write a message between 10 and 2000 characters." });

  try {
    const msg = { name, email, message, createdAt: new Date() };
    let stored = false;
    if (process.env.MONGODB_URI) {
      await connectDB();
      await Message.create(msg);
      stored = true;
    } else if (!process.env.VERCEL) {
      // ponytail: dev-only store so the form works without a database; set MONGODB_URI for production.
      await fs.appendFile(path.join(__dirname, "..", "messages.local.jsonl"), JSON.stringify(msg) + "\n");
      stored = true;
    }

    // Once stored, a failed email must not fail the request. Unstored, the email is the only copy.
    let mailed = false;
    try { mailed = await sendNotification(msg); }
    catch (err) { if (!stored) throw err; console.error("Notification failed:", err.message); }
    if (!stored && !mailed) throw new Error("Neither MONGODB_URI nor RESEND_API_KEY is configured");

    return res.status(201).json({ ok: true, message: "Thanks, your message was sent. I'll reply by email." });
  } catch (err) {
    console.error("Contact error:", err.message);
    return res.status(500).json({ ok: false, message: "Could not send your message. Email me directly instead." });
  }
});

// Malformed JSON and anything unexpected
app.use((err, _req, res, _next) =>
  res.status(err.status === 400 ? 400 : 500).json({ ok: false, message: "Invalid request." })
);

if (require.main === module) {
  app.listen(process.env.PORT || 5000, () => console.log(`API on http://localhost:${process.env.PORT || 5000}`));
}

module.exports = app;
