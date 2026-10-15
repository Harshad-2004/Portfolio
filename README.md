# Harshad Sawant — Portfolio

Personal portfolio: React + Vite front end, Express API for the contact form, deployed on Vercel.

**Live:** https://portfolio-ashy-zeta-60.vercel.app

## Structure
- `client/` — Vite + React site (content lives in `client/src/data.js`)
- `api/index.js` — Express app, runs as a Vercel serverless function at `/api/*`
- `lib/` — MongoDB connection, message model, Resend email notification

## Run locally
```bash
npm install
npm --prefix client install
npm run dev:client
```
The Vite dev server also serves the API, so the contact form works on `localhost:5173`.
Copy `.env.example` to `.env` and fill in `RESEND_API_KEY` and/or `MONGODB_URI`.

## Deploy (Vercel)
Import the repo on Vercel; `vercel.json` sets the build. Add the same variables from `.env.example`
under Project → Settings → Environment Variables. At least one of `MONGODB_URI` or `RESEND_API_KEY` is required.
