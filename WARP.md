# WARP Guide for web-portal

This document gives you PowerShell-friendly commands and workflows for developing, building, and running this project in Warp on Windows.

Project snapshot
- Framework: Next.js 15 (App Router, src directory)
- Language: React 19, JavaScript (no TypeScript config found)
- Styling: Tailwind CSS v4 with @tailwindcss/postcss
- UI: shadcn/ui + Radix UI
- Package manager: npm (package-lock.json present)
- Notable files
  - package.json (scripts: dev, build, start)
  - next.config.mjs
  - postcss.config.mjs (Tailwind via PostCSS)
  - jsconfig.json (path alias @/* -> ./src/*)
  - src/app/layout.js, src/app/page.js
  - public/* (assets, icons)
  - src/components/ui/* (shadcn/ui components)
  - src/lib/utils.js (cn helper)

System requirements
- Node.js: >= 18 (Next.js 15 recommends Node 18+; Node 20 LTS recommended)
- npm: ships with Node
- Shell: PowerShell 7+ (you’re on 7.5.3)

Quick start
- Install dependencies
  ```powershell path=null start=null
  npm install
  ```
- Run the dev server (Turbopack)
  ```powershell path=null start=null
  npm run dev
  ```
  Visit http://localhost:3000
- Build for production (Turbopack)
  ```powershell path=null start=null
  npm run build
  ```
- Start the production server
  ```powershell path=null start=null
  npm start
  ```

Common tasks
- Clean caches and reinstall
  ```powershell path=null start=null
  # Stop port 3000 if stuck
  $pid = (Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty OwningProcess); if ($pid) { Stop-Process -Id $pid -Force }
  # Remove build artifacts and modules
  Remove-Item -Recurse -Force .next, node_modules -ErrorAction SilentlyContinue
  # Reinstall
  npm install
  ```
- Verify environment and versions
  ```powershell path=null start=null
  node -v
  npm -v
  npx next --version
  ```
- Open the app in your default browser
  ```powershell path=null start=null
  Start-Process http://localhost:3000
  ```

Environment variables
- Place local env vars in .env.local at the project root. Next.js loads it automatically in dev and build.
- Client-exposed vars must start with NEXT_PUBLIC_. Example:
  ```powershell path=null start=null
  # Create a local env file (example)
  @"
  NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
  # SERVER_ONLY_SECRET=replace_me
  "@ | Set-Content -NoNewline .env.local
  ```
Notes
- Do not commit secrets. .gitignore already excludes .env*.
- NEXT_PUBLIC_* is available in the browser. Non-prefixed vars are server-only.

Path alias (@)
- jsconfig.json maps @/* to ./src/* so imports like "@/components/ui/button" resolve to src/components/ui/button.*
- If you move folders under src, update jsconfig.json accordingly.

Project structure (key parts)
- src/app/*: App Router entry points
  - src/app/layout.js: root layout
  - src/app/page.js: home page
- src/components/ui/*: shadcn/ui components (badge, button, card, etc.)
- src/lib/utils.js: cn utility (clsx + tailwind-merge)
- public/*: static assets (icons, logos, manifest)
- postcss.config.mjs: Tailwind via PostCSS plugin
- next.config.mjs: Next.js config (currently minimal)

Tailwind CSS v4
- Tailwind is enabled via @tailwindcss/postcss in postcss.config.mjs. No tailwind.config.* is necessary for defaults.
- Global CSS is imported in src/app/layout.js via "./globals.css". Ensure Tailwind directives exist there if you add custom styles.

Scripts in package.json
- dev: next dev --turbopack
- build: next build --turbopack
- start: next start

PowerShell troubleshooting (Windows)
- Port 3000 already in use
  ```powershell path=null start=null
  Get-NetTCPConnection -LocalPort 3000 -State Listen | Select-Object -First 1 OwningProcess
  $pid = (Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty OwningProcess); if ($pid) { Stop-Process -Id $pid -Force }
  ```
- Clear Next.js build cache
  ```powershell path=null start=null
  Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
  ```
- Fresh install if node_modules is corrupted
  ```powershell path=null start=null
  Remove-Item -Recurse -Force node_modules package-lock.json -ErrorAction SilentlyContinue
  npm install
  ```
- npm cache maintenance (use sparingly)
  ```powershell path=null start=null
  npm cache verify
  # OR (last resort)
  npm cache clean --force
  ```

shadcn/ui tips
- You already have shadcn in devDependencies and components under src/components/ui.
- To add a new component in this style (example):
  ```powershell path=null start=null
  npx shadcn@latest add accordion
  ```
  Adjust to your preferred component set. Review generated files under src/components/ui.
- Use the shadcn mcp server to make sure you are aligning with their documentation.

CI recommendations
- Use npm ci for deterministic installs:
  ```powershell path=null start=null
  npm ci
  npm run build
  ```

Optional: Vercel deploy
- This template is Vercel-ready. If you use the Vercel CLI:
  ```powershell path=null start=null
  npm install -g vercel
  vercel
  ```
  Follow prompts; subsequent deploys can use vercel --prod. Ensure env vars in the Vercel dashboard match your .env.local as needed.

Appendix: reference files (paths)
- package.json
- next.config.mjs
- postcss.config.mjs
- jsconfig.json
- src/app/layout.js
- src/app/page.js
- src/components/ui/*
- src/lib/utils.js
- public/*

If you want, I can add sections for linting, formatting, or testing once those tools are configured in this repo.
