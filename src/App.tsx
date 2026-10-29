import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Toaster } from 'sonner'
import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProtocolsTabsSection } from '@/components/sections/ProtocolsTabsSection'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { InsuranceSection } from '@/components/sections/InsuranceSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { EmergencyCtaSection } from '@/components/sections/EmergencyCtaSection'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyCall } from '@/components/layout/MobileStickyCall'
import { QuoteDrawer } from '@/components/modals/QuoteDrawer'

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  // Initialize Lenis smooth scroll with respect for prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let frameId: number
    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0B1528] text-slate-100 flex flex-col selection:bg-[#00E5FF] selection:text-[#0B1528] pb-16 sm:pb-0">
      <Toaster position="top-right" richColors theme="dark" closeButton />

      {/* 1. Sticky Navigation */}
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero with WebGL water ripple effect */}
        <HeroSection onOpenQuote={() => setQuoteOpen(true)} />

        {/* 3. Trust Bar with animated counter metrics */}
        <TrustBar />

        {/* 4. Certified Restoration Services */}
        <ServicesSection onOpenQuote={() => setQuoteOpen(true)} />

        {/* 4b. Cult UI DirectionAwareTabs - IICRC Water Damage Protocols */}
        <ProtocolsTabsSection onOpenQuote={() => setQuoteOpen(true)} />

        {/* 5. 5-Stage Drying Process Timeline (GSAP ScrollTrigger) */}
        <ProcessTimeline />

        {/* 6. Interactive Before & After Comparison Slider */}
        <BeforeAfterSection />

        {/* 7. Direct Insurance Billing & Carrier Marquee */}
        <InsuranceSection />

        {/* 8. Homeowner Emergency Reviews & Fleet Spotlight */}
        <TestimonialsSection />

        {/* 9. Metropolitan Service Area Hubs & Zip Code Lookup */}
        <ServiceAreasSection />

        {/* 10. Frequently Asked Questions (Cult UI Expandable) */}
        <FaqSection />

        {/* 11. Final Emergency Hotline CTA (Direct Phone Callout) */}
        <EmergencyCtaSection />
      </main>

      {/* 12. Full Information Footer */}
      <Footer />

      {/* 13. Sticky Mobile Call & Quote Bar (Mobile Only) */}
      <MobileStickyCall onOpenQuote={() => setQuoteOpen(true)} />

      {/* 14. Accessible Mobile "Get a Quote" Vaul Drawer */}
      <QuoteDrawer open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  )
}
