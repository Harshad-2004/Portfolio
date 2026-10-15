import react from "@vitejs/plugin-react";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));

// Runs the Express API inside the Vite dev server, so `npm run dev` alone makes the contact form work.
const api = {
  name: "local-api",
  configureServer(server) {
    try { process.loadEnvFile(`${root}.env`); } catch {} // .env is optional
    const app = createRequire(import.meta.url)("../api/index.js");
    // Only /api goes to Express; its helmet CSP would otherwise block Vite's dev scripts.
    server.middlewares.use((req, res, next) => (req.url.startsWith("/api/") ? app(req, res, next) : next()));
  },
};

export default defineConfig({ plugins: [react(), api] });
