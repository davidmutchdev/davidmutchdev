# David Mutch — Portfolio

A one-page portfolio for David Mutch, Senior Software Engineer, built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. All content comes from his résumé.

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Edit the content

All copy lives in [`content/resume.ts`](content/resume.ts): profile and summary, the hero card's quick facts and core stack, focus areas, experience (newest first), education, skills and nav links. The downloadable résumé is [`public/David_Mutch_Resume.pdf`](public/David_Mutch_Resume.pdf). If you change one, update the other to match.

## Structure

```
app/
  layout.tsx          fonts, metadata, backdrop, scroll progress bar, skip link
  page.tsx            sections in order, plus JSON-LD structured data
  globals.css         Tailwind import, color tokens, heading gradients, grid, card spotlight, scroll reveal
  icon.svg            favicon
components/
  sections/           Hero, About, Experience, Skills, Education, Contact, Footer
  Nav.tsx             floating glass nav: active-section highlight, mobile menu (client)
  Backdrop.tsx        static teal and indigo light at the top of the page
  ProfileCard.tsx     "at a glance" card in the hero
  SpotlightTracker.tsx  feeds the pointer position to [data-spotlight] cards (client)
  RevealObserver.tsx  fades sections in on scroll (client)
  CopyButton.tsx      copy email to clipboard (client)
  Icon.tsx            inline SVG icons
lib/ui.ts             shared class recipes (container, card, buttons, chips, icon tiles)
```

## Design notes

- Dark only. Colors are CSS variables on `:root` in `app/globals.css`, mapped to Tailwind tokens such as `bg-bg-2`, `text-muted` and `text-accent`. Teal (`--accent`) is the one accent color; indigo (`--accent-2`) appears only in background light and the monogram.
- One typeface: Geist. Headings use the `text-heading` utility (white fading slightly downward); `text-accent-gradient` highlights a phrase.
- Cards, buttons and chips come from `lib/ui.ts`, so they stay consistent. Add `data-spotlight` to any card for the cursor glow (mouse and trackpad only).
- Scroll reveals are turned off for visitors who prefer reduced motion, and content stays visible without JavaScript.
- `cacheComponents` is on (the create-next-app default), so server-rendered code must not call `new Date()` or `Math.random()` during prerender. The page has no time-based content for this reason.

## Deploy

Import the folder into Vercel, or run `npm run build && npm start` on any Node host.
