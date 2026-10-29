import React from 'react'
import { Phone, Clock, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { WaterRippleCanvas } from '@/components/effects/WaterRippleCanvas'

interface HeroSectionProps {
  onOpenQuote: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0B1528]">
      {/* WebGL Fluid Water Ripple Background */}
      <WaterRippleCanvas className="z-0" />

      {/* Atmospheric depth overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0B1528]/50 via-[#0B1528]/85 to-[#0B1528] pointer-events-none" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Urgent Headline & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Rapid Response Beacon Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-semibold tracking-wide shadow-lg backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <span>45-Minute On-Site Response Guarantee</span>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-emerald-400 font-bold">Live Crews Active</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Emergency Water Damage{' '}
              <span className="text-slate-100 underline decoration-[#00D2E0]/60 decoration-4 underline-offset-8">
                Restoration & Extraction
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              When disaster strikes, every minute counts. Our certified master technicians extract standing floodwater, deploy industrial dehumidification, and eliminate moisture before mold and structural collapse.
            </p>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-sm text-slate-200 font-semibold">
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>$0 Upfront Insurance Billing</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>IICRC Certified Master Crews</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Industrial LGR Drying Fleet</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="group relative flex items-center justify-center gap-3.5 px-8 py-4 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl font-black text-base tracking-wide shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Phone className="w-5 h-5 text-white fill-current animate-bounce" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm uppercase tracking-wider text-red-100 font-extrabold">24/7 Emergency Dispatch</span>
                  <span className="text-lg font-black leading-tight">{siteConfig.contact.phone}</span>
                </div>
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                className="flex items-center justify-center gap-2.5 px-7 py-4 bg-[#14233D] hover:bg-[#1E3352] text-white border border-white/20 hover:border-[#00D2E0]/60 rounded-xl font-bold text-base tracking-wide transition shadow-xl cursor-pointer"
              >
                <span>Request Rapid Dispatch</span>
                <ArrowRight className="w-5 h-5 text-[#00D2E0]" />
              </button>
            </div>

            {/* Live Dispatch Ticker */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-sm text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span>
                <strong className="text-white">Live Status:</strong> Rapid response units staged across all service districts • ETA:{' '}
                <span className="text-emerald-400 font-bold">28 minutes</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Cinematic Image with Overlay Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#101E35]">
                <img
                  src="/images/hero-water-damage.jpg"
                  alt="Certified emergency water restoration technician extracting standing flood water in flooded home"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Bottom Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/35 to-transparent pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 py-2 px-4 bg-[#0B1528]/95 border border-white/20 rounded-xl shadow-xl backdrop-blur-md">
                  <Clock className="w-4 h-4 text-[#00D2E0]" />
                  <span className="text-sm font-bold text-white">
                    45-Min On-Site Target
                  </span>
                </div>

                {/* Floating Bottom Incident Response Panel */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B1528]/95 backdrop-blur-md border border-white/15 rounded-xl flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">Emergency Flood Extraction</p>
                      <p className="text-sm text-slate-300 font-medium">Truck-mounted 250 CFM high-suction units</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-black text-emerald-400 block">STANDBY</span>
                    <span className="text-sm text-slate-400">24/7/365</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
