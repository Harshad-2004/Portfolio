const mongoose = require("mongoose");

// Vercel reuses warm function instances, so cache the connection on `global`
// instead of opening a new one on every request.
const cache = (global._mongoose ||= { conn: null, promise: null });

async function connectDB() {
  if (cache.conn) return cache.conn;
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not set");
  cache.promise ||= mongoose.connect(process.env.MONGODB_URI, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000,
  });
  try {
    cache.conn = await cache.promise;
  } catch (err) {
    cache.promise = null; // allow retry on next request
    throw err;
  }
  return cache.conn;
}

module.exports = connectDB;
