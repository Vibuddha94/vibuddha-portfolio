# Vibuddha Portfolio

Next.js App Router + TypeScript migration that preserves the original UI and JS behavior.

## Scripts

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Routes

- `/` portfolio landing page
- `/projects` redirects to projects section on home
- `/projects/[slug]` project detail routes

## Notes

- Legacy static HTML pages were replaced by TSX routes.
- Legacy CSS is consolidated into `app/globals.css`.
- Legacy JS runs from `public/legacy-scripts/*`.
