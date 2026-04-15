# 🐾 DewClaw Land Intranet

A modern, dark-themed company intranet portal built with React + Vite + TypeScript + Tailwind CSS.

## Features

- **Home** — Mission, values, company overview
- **Our Team** — Org chart with Corbin (CEO), Jow (AI Implementation Specialist), Emma (Comper)
- **Events** — Upcoming events and bootcamp schedule
- **SOPs** — Standard Operating Procedures with expandable steps
- **Onboarding** — 4-week new hire roadmap
- **Reports** — Business metrics dashboard
- **Holidays** — Interactive 2025 holiday calendar
- **Staff Handbook** — Full policies (hours, invoicing, PTO, confidentiality, wellness)

## Prerequisites

- Node.js 18+ 
- npm or pnpm

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Deploy to Render (Recommended)

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New → Static Site
3. Connect your GitHub repo
4. Set:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click **Deploy**

Your intranet will be live at `https://your-project.onrender.com`

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Project Structure

```
dewclaw_intranet/
├── client/
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── App.tsx        ← All content lives here
│       ├── index.css      ← Design system & styles
│       └── main.tsx       ← Entry point
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Customization

All content is in `client/src/App.tsx`:

| What to edit | Where |
|---|---|
| Team members + org chart | `TEAM` array at top of App.tsx |
| Events | `EVENTS` array |
| SOPs | `SOPS` array |
| Holidays | `HOLIDAYS_2025` array |
| Company values | `VALUES` array |
| Work hours, policies | `HandbookTab` component |
| Colors / fonts | `client/src/index.css` |

## Contact

For intranet questions: hello@dewclawland.com or Corbin (CEO)
