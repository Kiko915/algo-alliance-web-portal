# Algorithmic Alliance Club Portal (Web)

A modern, web-based portal for the Algorithmic Alliance Club. It provides a clean landing experience with brand-aligned styling, entry points for authentication, and a foundation for member-facing features.

## Features

- Responsive two-column landing page
  - Left: full-height banner using `public/aa-portal-banner.png`
  - Right: flat, minimalist content with a concise intro and CTAs
- Authentication entry points: `Login` and `Register` (Sign up)
  - Routes: `/login`, `/signup`, `/forgot-password`
- Brand styling
  - Primary color wired via CSS variables: `#2532AE`
  - Login button uses the brand primary with accessible foreground contrast
- Utility pages: `/terms`, `/privacy`

## Tech Stack

- Next.js (App Router) 15
- React 19
- Tailwind CSS v4
- shadcn/ui + Radix UI primitives
- React Hook Form + Zod (for future forms)

## Getting Started

Prerequisites:
- Node.js 18+ (recommended)
- npm, pnpm, or yarn

Install dependencies and run the dev server:

```bash path=null start=null
npm install
npm run dev
# visit http://localhost:3000
```

Production build:

```bash path=null start=null
npm run build
npm start
```

## Project Structure (high level)

- `src/app/page.js` — Landing page (2-column layout, banner on the left)
- `src/app/login/page.js` — Login route
- `src/app/signup/page.js` — Registration route
- `src/app/forgot-password/page.js` — Password reset route
- `src/app/globals.css` — Design tokens (CSS variables) and Tailwind setup
- `src/components/ui/*` — Reusable UI primitives (buttons, inputs, etc.)

## Theming / Branding

Brand color is configured via CSS variables in `src/app/globals.css`:
- `--primary: #2532AE`
- `--primary-foreground: #ffffff`

Buttons and components reference these variables, so updating the primary color will automatically propagate across the UI.

## Deployment

The project works well on Vercel or any Node-capable host:
- Build with `npm run build`
- Start with `npm start`

For Vercel, you can import this repo and keep the default Next.js settings.

## License

Copyright © Algorithmic Alliance. All rights reserved.
