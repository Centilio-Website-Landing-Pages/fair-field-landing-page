# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs with turbopack for faster builds)
- **Build for production**: `npm run build`
- **Run linting**: `npm run lint`
- **Start production server**: `npm start`

## Project Architecture

This is a Next.js 15 (App Router) landing page project for Fair Field (real estate/investment company) with multiple landing page variants and integrated analytics tracking.

### Key Structure

- **App Router**: Uses Next.js 15 App Router with TypeScript
- **Multiple Landing Pages**: Five different landing page variants (`landing-page1` through `landing-page5`) plus dedicated pages for about-us, contact-us, testimonials, etc.
- **Component Organization**: 
  - `components/` - Organized by page/feature (e.g., `landing-page3/`, `landing-page4/`, `shared/`)
  - `home/` - Contains alternative HomePage component implementation
  - Shared components like Header and UniversalFooter
- **Path Aliases**: Configured with `@/*` pointing to project root in `tsconfig.json:21`
- **Main Entry Point**: `app/page.tsx:1-7` imports and renders HomePage component from `@/components/home/HomePage`

### Technology Stack

- **Framework**: Next.js 15.4.4 with React 19.1.0
- **TypeScript**: Configured with strict mode and bundler module resolution
- **Dependencies**: 
  - `motion` (v12.23.11) - Framer Motion for animations
  - `class-variance-authority` + `clsx` + `tailwind-merge` - Component styling utilities
  - `lucide-react` - Icon library
- **Build Tool**: Turbopack enabled for development (`npm run dev` uses `--turbopack`)

### Styling & UI

- **Tailwind CSS 4**: Primary styling framework using PostCSS plugin architecture
- **Animation**: Uses `motion` (Framer Motion) for animations and `tw-animate-css` for additional CSS animations  
- **Typography**: Multiple Google Fonts loaded in `app/layout.tsx:5-24`: Geist, Geist Mono, DM Serif Display, Inter
- **Design System**: Uses class-variance-authority and clsx for component variants
- **Shadcn/ui Integration**: Configured via `components.json` with New York style, RSC support, and Lucide icons

### Analytics Integration

The app has comprehensive tracking setup in `app/layout.tsx:39-105`:
- Google Tag Manager (GTM-WRJ9R4VB)
- Meta Pixel (Facebook) tracking (ID: 1739365096653458)
- Custom event tracking for "Book Visit" and "Call Us" actions
- Event tracking expects elements with classes `.book-visit-button` and `.call-us-button`

### Development Notes

- Uses absolute imports with `@/` alias pointing to project root
- Client-side components marked with 'use client' directive
- Image assets stored in `public/images/` and `public/icons/`
- Some components use inline styles mixed with Tailwind classes
- The main page (`app/page.tsx`) redirects to HomePage component from `@/components/home/HomePage`

### Component Patterns

- Landing page components are self-contained and feature-specific
- Shared Header component includes logo (FFS) and call-to-action button
- Footer is universal across pages (UniversalFooter.tsx in root)
- Animation components use motion for entrance effects and interactions