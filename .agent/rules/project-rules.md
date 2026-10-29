# AGENTS.md - Development Rules & Guidelines

## Core Principles

- **Stack**: Vite + React + TypeScript + Tailwind CSS (v4) + shadcn/ui + motion + Lenis.
- **Allowed component sources**:
  - `shadcn/ui` (official base)
  - `Magic UI` (`@magicui`)
  - `Aceternity UI` (`@aceternity`)
  - `React Bits` (`@react-bits`)
  - `Motion Primitives` (`@motion-primitives`)
  - `Animate UI` (`@animate-ui`)
  - `21st.dev` (full section blocks)
  - `Tailark` (`@tailark`)
- **NEVER build a section or component from scratch if one exists in these sources.**
- **Install via CLI/registry**: Never hand-rewrite library components. Always add components through the shadcn CLI or configured registry commands:
  ```bash
  npx shadcn add <component>
  npx shadcn add @magicui/<component>
  npx shadcn add @aceternity/<component>
  npx shadcn add @react-bits/<component>
  npx shadcn add @motion-primitives/<component>
  npx shadcn add @animate-ui/<component>
  npx shadcn add @tailark/<component>
  ```
- **Before building each section, explicitly state which library and component you will use.**
- **Animation Constraint**: Maximum 1–2 animation effects per section. Mobile performance is a top priority.
- **Design & Theme**:
  - Dark navy base (`#0B1528`)
  - Aqua accent (`#00E5FF`)
  - Red emergency CTA (`#FF2A2A`)
  - One font pair (Geist sans / mono).
- **Single Source of Truth**: All business copy, phone numbers, WhatsApp links, services, process steps, testimonials, FAQs, and service areas live in `src/config/site.ts`. Never hardcode business information into components.
- **Mobile First**: Optimize layout for mobile first. Provide a sticky emergency call button on mobile screens.
- **Architecture**: No Node.js server code. Deploy target is Cloudflare Workers static assets (`wrangler.jsonc` serving `./dist` with SPA fallback routing).
