# Edwin - Operational Clarity Architect Website

A clarity-first, low-friction website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Mantine UI
- **Fonts:** Inter (clean sans-serif with medium weights and wide tracking)
- **Icons:** Lucide React

## Design Philosophy

The website follows four core principles:

1. **Clarity-First** - Minimal copy, strong hierarchy, decisive structure
2. **Low-Ego Authority** - Expertise shown through clarity, not noise
3. **Technical Precision** - Grid, spacing, modular blocks, no clutter
4. **Guided Decision-Making** - Every section leads naturally to the CTA

## Design Aesthetic

- **Tone:** Calm, Precise, Structural, Low-ego, High-competence
- **Aesthetic:** Hybrid Minimal + Technical
- **Palette:** Neutrals, soft industrial greys, muted metallic tones
- **Layout:** Architectural spacing, strict grids, alignment
- **Behavior:** Minimal transitions, no decorative clutter

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Nav, Footer
│   ├── page.tsx            # Home page (7 sections)
│   ├── globals.css         # Global styles and design tokens
│   ├── about/
│   │   └── page.tsx        # About page (7 sections)
│   ├── services/
│   │   └── page.tsx        # Services page (5 sections)
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Nav.tsx             # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── CTAButton.tsx        # CTA button component
│   ├── Section.tsx          # Section wrapper
│   └── ContactForm.tsx      # Contact form
└── lib/
    ├── constants.ts         # App constants (CTAs, nav links)
    └── utils.ts             # Utility functions
```

## Pages

### Home Page
1. Hero
2. Value Proposition (3-block system)
3. Problems I Solve
4. Proof Lite
5. The Forming Framework™
6. Mini About
7. Final CTA

### About Page
1. Identity Statement
2. Short Founder Narrative
3. Brand Thesis
4. Creative Axis: Consulting + Art
5. Operating Principles
6. Why Clients Hire Me
7. CTA

### Services Page
1. Overview
2. Diagnostic Sprint
3. Integration & Execution
4. Special Operations
5. Engagement Workflow

### Contact Page
1. Clarity Statement & Primary CTA
2. Contact Form
3. What to Expect in the Call

## CTA System

- **Primary CTA:** "Schedule a Clarity Call" (Solid button, high contrast)
- **Secondary CTA:** "See What I Do" (Outline or text link)

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on Vercel. Simply connect your repository and deploy.
