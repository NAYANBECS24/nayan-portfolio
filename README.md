# Nayan — Creative Engineering Portfolio (React + TypeScript)

A custom portfolio inspired by bold editorial/3D-creator layouts and personalized using original material from Nayan's projects, academic competition work, website screenshots, public certificates and research. **No sample projects or names from the inspiration site are represented as Nayan's work.**

## Run locally

Install Node.js 18+ and execute:

```bash
npm install
npm run dev
```

Open the local address shown by Vite (normally http://localhost:5173).

Build for production with `npm run build` (writes `dist/`). Deploy `dist/` to Netlify, Vercel, GitHub Pages or another static host. Set the `base` URL in `vite.config.ts` if publishing under a subdirectory.

## Stack

React 18, TypeScript, Tailwind CSS 3, Framer Motion 12, Lucide React, Vite.

## Site map

- Oversized kinetic hero with original portrait, magnetic mouse motion and custom call-to-action
- Two scroll-responsive marquee rows made of **actual portfolio media**, not other creators' samples
- About section with character-by-character scroll reveal
- Five editorial expertise/services blocks
- Four stacking featured case studies with project evidence
- Searchable, categorized 23-project archive with detailed project dialogs
- Published Indian patent **application** spotlight (publication, not grant)
- Experience and leadership timeline
- Recognition list, filterable 55-item image archive with a lightbox
- Contact links, two offline-accessible resume PDFs

## Sources, caveats & asset policy

The images in `public/assets/` are compressed copies of material previously provided by the owner, including original project screenshots and published/award evidence. Selected academic project benchmark claims are self-reported, not independently audited. Internships or offers that require reconfirmation are flagged in the experience section. Do not publish documents containing private IDs or offer letters; this portfolio intentionally uses public-facing evidence instead. Eduooze role is **Web Developer**, not founder. The displayed ALCF entry is a **published patent application**, not a granted patent.

## Editing

Change project descriptions and achievements in `src/portfolio-data.json`, the featured project imagery and sections in `src/App.tsx`, and styles in `src/styles.css`. Replace the round headshot in `public/assets/portrait.webp` when a higher-resolution portrait becomes available.

## Offline HTML preview

`Nayan_Creative_Portfolio_Preview.html` in the parent download area is a dependency-free interactive version of the same design direction. The React source itself needs dependencies installed on your machine because the packaging environment did not permit npm registry access.

Standalone full preview: `/mnt/data/Nayan_Creative_Portfolio_Preview.html` embeds supporting images and resume PDFs. For production use the React source version after npm install.
