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
      className="relative py-24 bg-[#0B1528] border-t border-[#1E3352] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14233D] border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
            <span>Precision Restoration Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our 5-Stage Rapid{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-cyan-300 bg-clip-text text-transparent">
              Restoration Process
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From emergency 45-minute dispatch to final certified dry standard clearance, our scientific drying process ensures zero residual moisture or mold.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line */}
          <div
            className="absolute left-6 md:left-1/2 top-4 bottom-8 w-1 bg-[#1E3352] transform -translate-x-1/2"
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-[#00E5FF] via-cyan-400 to-[#FF2A2A] origin-top"
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
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#101E35] border-2 border-[#00E5FF] text-[#00E5FF] shadow-lg shadow-cyan-500/30 z-20">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right text-left'
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-[#101E35] border border-[#1E3352] hover:border-[#00E5FF]/50 transition-all shadow-xl group">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? 'justify-start' : 'md:justify-end justify-start'
                        }`}
                      >
                        <span className="text-xs font-black uppercase tracking-wider text-[#00E5FF] bg-[#14233D] px-2.5 py-1 rounded-md border border-[#00E5FF]/20">
                          Stage 0{step.step}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 bg-[#0B1528] px-2 py-1 rounded-md">
                          <Clock className="w-3 h-3 text-red-400" />
                          {step.timeframe}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed">
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
