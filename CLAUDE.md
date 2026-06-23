# Assuva Mobilya - Furniture App

## Project Overview
Next.js 14 furniture showcase/e-commerce site for Assuva Mobilya (Balıkesir, Turkey).
Deployed to GitHub Pages at assuva.com.tr.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** react-slick (carousel), react-icons
- **Analytics:** @next/third-parties (Google Analytics)

## Package Manager
**npm** — use `npm install`, not yarn/bun/pnpm.

## Commands
```bash
npm run dev      # Start development server
npm run build    # Build + export + deploy to GitHub Pages (gh-pages branch)
npm run lint     # Run ESLint
npm start        # Start production server
```

> **Warning:** `npm run build` automatically deploys to GitHub Pages via `git subtree push`. Run with care.

## Project Structure
```
app/             # Next.js App Router pages and layouts
components/      # Reusable React components
public/          # Static assets (90+ product images)
```

## Key Components
- `components/Card.tsx` — Product card
- `components/NewProducts.tsx` — Product grid with modal gallery
- `components/Hero.tsx` — Hero section
- `components/Slide.tsx` — Carousel slider
- `components/Header.tsx` / `Headertop.tsx` — Navigation
- `components/Footer.tsx` — Footer

## Deployment
GitHub Actions (`.github/workflows/nextjs.yml`) builds and deploys to `gh-pages` branch.
Custom domain: `assuva.com.tr`

## Path Aliases
`@/*` maps to the project root (configured in `tsconfig.json`).

## Notes
- Site content is in Turkish
- Uses Next.js Image component for optimization
- SEO: `app/robots.ts` and `app/sitemap.ts` configured

## Code Style and Conventions

### General
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- Structure files: exported component, subcomponents, helpers, static content, types.

### Naming Conventions
- Use lowercase with dashes for directories (e.g., `components/auth-wizard`).
- Favor named exports for components.

### TypeScript
- Use TypeScript for all code; prefer interfaces over types.
- Avoid enums; use maps instead.
- Use functional components with TypeScript interfaces.

### Syntax and Formatting
- Use the `function` keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX.

### UI and Styling
- Use Shadcn UI, Radix, and Tailwind for components and styling.
- Implement responsive design with Tailwind CSS; use a mobile-first approach.

### Performance
- Minimize `use client`, `useEffect`, and `setState`; favor React Server Components (RSC).
- Wrap client components in Suspense with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP format, include size data, implement lazy loading.

### Key Conventions
- Use `nuqs` for URL search parameter state management.
- Optimize Web Vitals (LCP, CLS, FID).
- Limit `use client`: favor server components and Next.js SSR; use only for Web API access in small components; avoid for data fetching or state management.
- Follow Next.js docs for Data Fetching, Rendering, and Routing.