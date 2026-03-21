# Mario Žitković — Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.

**Live site:** [mariozitko.github.io](https://mariozitko.github.io)

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- shadcn/ui
- EmailJS (contact form)

## Local Development

```bash
git clone https://github.com/MarioZitko/MarioZitko.github.io.git
cd MarioZitko.github.io
npm install
npm run dev
```

Open `http://localhost:5173`.

To test on a phone on the same network:

```bash
npm run dev -- --host
```

## Deploy

The site is deployed to GitHub Pages via the `gh-pages` package.

```bash
npm run build   # compiles TypeScript and bundles with Vite → dist/
npm run deploy  # pushes dist/ to the gh-pages branch
```

GitHub Pages serves the `gh-pages` branch automatically. Changes are live within a minute or two of running `npm run deploy`.

## Contact Form

The contact form uses [EmailJS](https://emailjs.com) — no backend required. The service ID, template ID and public key are hardcoded in `src/components/Contact.tsx` since they are browser-facing credentials (not secrets).

If you fork this repo, replace those three values with your own from the EmailJS dashboard.
