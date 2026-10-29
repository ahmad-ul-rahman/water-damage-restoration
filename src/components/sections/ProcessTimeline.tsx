import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Radio, Droplets, Wind, ShieldCheck, CheckCircle2, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'

gsap.registerPlugin(ScrollTrigger)

const stepIcons = [Radio, Droplets, Wind, ShieldCheck, CheckCircle2]

export const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Animate progress line growth on scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 0.5,
            },
          }
        )
      }

      // Stagger animate timeline steps
      stepRefs.current.forEach((el) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 bg-[#0B1528] border-t border-white/10 overflow-hidden"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00D2E0] animate-pulse" />
            <span>Precision Restoration Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our 5-Stage Rapid Restoration Process
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From emergency 45-minute dispatch to final certified dry standard clearance, our scientific drying process ensures zero residual moisture or mold.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line */}
          <div
            className="absolute left-6 md:left-1/2 top-4 bottom-8 w-1 bg-white/10 transform -translate-x-1/2"
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-[#00D2E0] via-[#0284C7] to-[#1E3A8A] origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 sm:space-y-16">
            {siteConfig.processSteps.map((step, idx) => {
              const Icon = stepIcons[idx] || Droplets
              const isEven = idx % 2 === 1

              return (
                <div
                  key={step.step}
                  ref={(el) => {
                    stepRefs.current[idx] = el
                  }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Center Bubble */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#101E35] border-2 border-[#00D2E0] text-[#00D2E0] shadow-xl shadow-cyan-950/50 z-20">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right text-left'
                    }`}
                  >
                    <div className="p-7 rounded-2xl bg-[#101E35] border border-white/15 hover:border-[#00D2E0]/50 transition-all shadow-xl group">
                      <div
                        className={`flex items-center gap-2.5 mb-3 ${
                          isEven ? 'justify-start' : 'md:justify-end justify-start'
                        }`}
                      >
                        <span className="text-sm font-black uppercase tracking-wider text-[#00D2E0] bg-[#14233D] px-3 py-1 rounded-md border border-white/15">
                          Stage 0{step.step}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 bg-[#0B1528] px-3 py-1 rounded-md">
                          <Clock className="w-4 h-4 text-[#00D2E0]" />
                          {step.timeframe}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-[#00D2E0] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-base text-slate-300 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for 2-column alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
