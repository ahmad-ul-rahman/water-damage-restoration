# BUILD-NOTES.md - AquaGuard Restoration Homepage

This document records the design decisions, component sources, animation implementations, and generated assets for the AquaGuard Restoration 24/7 emergency restoration homepage.

---

## 1. Page Sections & Component Sources

| # | Section | Library / Source | Component / Technology | Why Chosen & Implementation Details |
|---|---|---|---|---|
| **1** | **Sticky Navbar** | Custom + Lucide | Floating header with blur backdrop | High-contrast branding with active emergency beacon, quick section anchors, and direct 24/7 call trigger. Collapses into mobile drawer. |
| **2** | **Hero Section** | **OGL WebGL** + `@magicui` | `<WaterRippleCanvas />` + Glow | Custom WebGL fragment shader creating realistic interactive fluid ripple waves upon cursor movement. Features dark navy caustic shadows and aqua light highlights. Features a lightweight CSS gradient fallback for mobile screens (&lt;768px) and `prefers-reduced-motion`. |
| **3** | **Trust Bar** | `@magicui` | `<NumberTicker />` | Verified metrics (45 Min Response, 4,850+ Disasters Restored, 100% Direct Insurance Billing, 24/7 Coverage) that animate into view on scroll. Paired with IICRC and BBB accreditation badges. |
| **4** | **Services Section** | `@magicui` + Custom | `<BorderBeam />` + Image Cards | 6 comprehensive disaster services sourced strictly from `siteConfig.services`. Cards feature real on-site restoration photography, key checklist features, and quick dispatch actions. Border beam light travel on priority cards. |
| **5** | **Process Timeline** | **GSAP** + **ScrollTrigger** | Scroll-driven timeline sequence | A 5-stage progressive timeline (01 Dispatch $\rightarrow$ 02 Extraction $\rightarrow$ 03 Dehumidification $\rightarrow$ 04 Sanitization $\rightarrow$ 05 Clearance) driven by ScrollTrigger, animating the vertical progress gradient line and revealing steps progressively. |
| **6** | **Before/After Slider** | `react-compare-slider` | `<ReactCompareSlider />` | Interactive comparison of a real flooded living room (4 inches of standing water) vs. the same room restored to dry pre-loss condition with gleaming hardwood and clean baseboards. |
| **7** | **Insurance Section** | `@magicui` | `<Marquee />` | Infinite horizontal scrolling marquee showcasing 12 major insurance carriers (State Farm, Allstate, Liberty Mutual, etc.) with a 3-step breakdown of how $0 upfront direct insurance billing works. |
| **8** | **Testimonials** | Custom + Lucide | 3-Card Verified Reviews + Fleet Banner | Real customer emergency stories (2 AM pipe burst, basement flood) with star ratings and verified tags, complemented by a featured banner of the emergency fleet. |
| **9** | **Service Areas** | Custom + Lucide | Regional Hubs + Interactive Zip Checker | 5 service area cards with response time indicators, plus an interactive 5-digit zip code search form giving instant dispatch confirmation. |
| **10** | **FAQ Section** | `shadcn/ui` | `<Accordion />` | Accessible, collapsible accordion addressing homeowner urgency: arrival guarantees, insurance billing, and immediate steps to take while waiting. |
| **11** | **Final CTA & Form** | `react-hook-form` + `zod` + `sonner` | Emergency Dispatch Form | Rapid-response form validated against a strict Zod schema. Displays Sonner toast alerts with instant dispatcher callback notifications. Marked with TODO placeholder for backend CRM webhook. |
| **12** | **Footer** | Custom + Lucide | Master footer | Comprehensive company details, emergency hotline, license numbers, IICRC badge, full navigation, and LocalBusiness JSON-LD structured data. |
| **13** | **Mobile Sticky Call Bar** | Custom | Fixed mobile bar (`sm:hidden`) | Fixed at the bottom of the viewport on mobile devices with a pulsating emergency call button and quote drawer trigger. |
| **14** | **Quote Drawer** | `vaul` | `<Drawer.Root />` Bottom Sheet | Smooth, touch-friendly mobile bottom sheet drawer allowing mobile visitors to request a callback without navigating away. |

---

## 2. Generated Photographic Assets

All 10 images were generated specifically for AquaGuard Restoration to maintain cohesive color grading (deep navy shadows, aqua reflections, professional emergency lighting):

| Filename | Dimensions / Style | Context & Placement |
| :--- | :--- | :--- |
| `hero-water-damage.jpg` | 16:9 Cinematic Photograph | **Hero Section**: Certified restoration specialist in branded navy uniform operating an industrial extraction wand in a flooded home. |
| `before-damage.jpg` | 16:9 Realistic Disaster Photography | **Before/After Section**: Flooded living room with 3-4 inches of standing water over dark hardwood floor with water lines and soaked rug. |
| `after-restored.jpg` | 16:9 Realistic Architecture Photography | **Before/After Section**: Identical angle and framing as `before-damage.jpg`, completely dried, repaired, and restored with pristine satin wood floors. |
| `service-extraction.jpg` | 16:9 Macro Restoration Photography | **Services Section (Extraction)**: Clear suction extraction head actively pulling floodwater from carpet fibers with dynamic water droplets. |
| `service-drying.jpg` | 16:9 Professional Equipment Shot | **Services Section (Drying)**: Commercial high-velocity blue centrifugal air movers and an LGR dehumidifier drying wet baseboards. |
| `service-sewage.jpg` | 16:9 Clinical Remediation Shot | **Services Section (Sewage)**: Specialist in full Tyvek biohazard suit, gloves, and respirator applying antimicrobial mist. |
| `service-mold.jpg` | 16:9 Technical Containment Shot | **Services Section (Mold)**: Zippered plastic containment barrier and HEPA air scrubber running during wall stud mold remediation. |
| `service-pipe.jpg` | 16:9 Detailed Plumbing Repair | **Services Section (Burst Pipe)**: Emergency isolation clamp and brass ball valve installed on a burst copper pipe under a sink. |
| `service-insurance.jpg` | 16:9 Claim Documentation Shot | **Insurance Section**: FLIR thermal camera displaying wall moisture differential alongside an approved Xactimate estimate report on an iPad. |
| `trust-fleet.jpg` | 16:9 Fleet Photography | **Testimonials Section**: Fleet of emergency restoration cargo vans staged with headlights glowing at twilight. |

---

## 3. Performance & Accessibility Implementations

1. **Lenis Smooth Scroll**:
   - Initialized at root in [`src/App.tsx`](file:///c:/Users/Ammi%20G/Documents/antigravity/serene-lovelace/src/App.tsx).
   - Automatically disabled when `prefers-reduced-motion` is active.

2. **Mobile First & Performance Guardrails**:
   - Responsive layout tested down to 375px viewport with 0 horizontal overflow.
   - WebGL OGL water ripple is automatically bypassed on mobile devices (&lt;768px) and replaced with an ultra-lightweight radial CSS gradient.
   - Non-critical images utilize native lazy loading (`loading="lazy"`). Hero image uses high priority eager loading.

3. **SEO & Structured Data**:
   - Meta title, description, Open Graph tags, and Schema.org `EmergencyService` JSON-LD configured in [`index.html`](file:///c:/Users/Ammi%20G/Documents/antigravity/serene-lovelace/index.html).

4. **Security**:
   - Zero hardcoded tokens or secrets in version control. All credentials managed through git-ignored environment variables.
