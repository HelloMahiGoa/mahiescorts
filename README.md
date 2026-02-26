# Mahi Escorts — Goa (mahiescorts.in)

A classified-style escorts listing website for **Goa** built with **Next.js 16** (App Router), TypeScript, and Tailwind CSS.

## Features

- **Home**: Hero, profile grid, services (in-call/out-call), how to book, contact banner
- **Goa areas**: Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Margao, Colva, Benaulim, Arambol — each with its own page
- **Profile pages**: Individual escort profile with image, age, location, and CTAs
- **18+ age gate**: Session-based verification before entering the site
- **Responsive**: Mobile-first layout with sticky header and area navigation

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

- `src/app/` — Pages (home, `/areas`, `/areas/[slug]`, `/profile/[id]`)
- `src/components/` — Header, Footer, AgeGate, Hero, ProfileCard, ProfileGrid, Services, HowToBook, ContactBanner
- `src/data/` — `profiles.ts`, `goaAreas.ts` (edit here to add/change profiles and areas)

Replace placeholder phone/WhatsApp numbers and add real profile images when going live.
