# AGENTS.md - Development Rules & Guidelines

## Core Principles

- **Stack**: Vite + React + TypeScript + Tailwind CSS (v4) + shadcn/ui + motion + Lenis + GSAP/ScrollTrigger + OGL + Lottie + tsparticles.
- **Allowed Component Sources**:
  - `shadcn/ui` (official base)
  - `Magic UI` (`@magicui`)
  - `Aceternity UI` (`@aceternity`)
  - `React Bits` (`@react-bits`)
  - `Motion Primitives` (`@motion-primitives`)
  - `Animate UI` (`@animate-ui`)
  - `Cult UI` (`@cult-ui`)
  - `Kokonut UI` (`@kokonutui`)
  - `Eldora UI` (`@eldoraui`)
  - `Skiper UI` (`@skiper-ui`)
  - `Launch UI` (`@launchui`)
  - `Origin UI` (`@originui` / origin-space)
  - `21st.dev` (full section blocks)
  - `Tailark` (`@tailark`)
- **NEVER build a section or component from scratch if one exists in these sources.**
- **Install via CLI/Registry**: Never hand-rewrite library components. Always add components through the shadcn CLI or configured registry commands:
  ```bash
  npx shadcn add <component>
  npx shadcn add @magicui/<component>
  npx shadcn add @aceternity/<component>
  npx shadcn add @react-bits/<component>
  npx shadcn add @motion-primitives/<component>
  npx shadcn add @animate-ui/<component>
  npx shadcn add @tailark/<component>
  npx shadcn add @cult-ui/<component>
  npx shadcn add @kokonutui/<component>
  npx shadcn add @eldoraui/<component>
  npx shadcn add @skiper-ui/<component>
  npx shadcn add @launchui/<component>
  npx shadcn add @originui/<component>
  ```
- **Explicit Statement**: Before building each section, explicitly state which library and component you will use.

## Animation & Visual Guidelines

- **Constraint**: Maximum 1–2 animation effects per section. Mobile performance is a top priority.
- **GSAP / ScrollTrigger**: Reserved for scroll-driven sequences (e.g. process timeline).
- **WebGL (OGL)**: Used ONLY for the hero background, with a static fallback on mobile and when `prefers-reduced-motion` is on.
- **Lottie**: Used only for small animated icons.
- **tsparticles**: Used only for subtle water bubbles and droplets.
- **Accessibility**: Respect `prefers-reduced-motion` everywhere across all transitions and animations.

## Forms & Interactive Drawers

- **Contact & Quote Forms**: `react-hook-form` + `zod` validation + `sonner` toast notifications.
- **Mobile Quote Drawer**: `vaul` for a smooth, accessible mobile "Get a Quote" bottom sheet drawer.

## Design & Theme

- **Color Palette**:
  - Dark navy base (`#0B1528`)
  - Aqua accent (`#00E5FF`)
  - Red emergency CTA (`#FF2A2A`)
- **Typography**: One font pair (Geist sans / mono).
- **Mobile First**: Optimize layout for mobile first. Provide a sticky emergency call button on mobile screens.

## Single Source of Truth

- All business copy, phone numbers, WhatsApp links, services, process steps, testimonials, FAQs, and service areas live in `src/config/site.ts`. Never hardcode business information into components.

## Security & Credentials

- **NEVER write tokens, API keys, credentials, or secrets into any file** (code, scripts, configs, or documentation).
- All sensitive tokens must reside in `.env.local` or external environment variables and remain excluded from version control.

## Deployment Target

- **Cloudflare Workers (Static Assets)**: No Node.js server runtime code. Deploy target is Cloudflare Workers static assets via `wrangler.jsonc` serving `./dist` with SPA fallback routing.
