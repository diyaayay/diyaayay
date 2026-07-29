# diyasolanki

Personal site of Diya Solanki — software engineer building developer tooling,
language servers, and creative-coding infrastructure.

Built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS v4](https://tailwindcss.com),
and TypeScript. Statically generated and content-driven.

## Stack

- **Framework:** Next.js 15 (App Router, static export-friendly)
- **Styling:** Tailwind CSS v4 with CSS-variable theming + dark (default) / light mode
- **Fonts:** IBM Plex Sans (sans) + IBM Plex Mono (mono) via `next/font`
- **Content:** typed data modules in `app/data/*`; notes link out to Medium/gists

## Getting started

Requires Node.js `>= 18.18` (Next.js 15).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  page.tsx              # home (hero, experience timeline, projects, skills, open source, education)
  notes/page.tsx        # notes index (titles link out to Medium/gists)
  components/           # SiteNav, SiteFooter, ThemeToggle
  data/                 # site config + typed content (experience, projects, skills, posts, education)
  icon.svg             # favicon / app icon
  opengraph-image.tsx  # generated 1200×630 OG image
  sitemap.ts           # /sitemap.xml
  robots.ts            # /robots.txt
  feed.xml/route.ts    # RSS feed
  not-found.tsx        # custom 404
```

Static assets (brand mark PNGs, `Diya_Solanki_Resume.pdf`) live in `public/`.

## Editing content

All content lives in `app/data/`:

- `site.ts` — **set `url` to your production domain** (used for canonical URLs, OG tags, sitemap, RSS)
- `experience.ts`, `projects.ts`, `skills.ts` (includes the open-source line), `education.ts`
- `posts.ts` — registers notes (title, date, reading time, excerpt, external URL)

To add a note, append an entry to `allNotes` in `app/data/posts.ts` — the
title links straight to the external article (Medium, gist, etc.).

## Before deploying

Update `url` in `app/data/site.ts` to the real domain so SEO metadata, the
sitemap, RSS feed, and OG image URLs resolve correctly.
