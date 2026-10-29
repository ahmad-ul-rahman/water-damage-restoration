import React from 'react'
import { Phone, Clock, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { WaterRippleCanvas } from '@/components/effects/WaterRippleCanvas'

interface HeroSectionProps {
  onOpenQuote: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* WebGL Fluid Water Ripple Background */}
      <WaterRippleCanvas className="z-0" />

      {/* Background radial gradient glow for premium depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0B1528]/40 via-[#0B1528]/80 to-[#0B1528] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Urgent Headline & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Rapid Response Beacon Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#14233D]/90 border border-[#00E5FF]/40 text-[#00E5FF] text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-cyan-950/40 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00E5FF]" />
              </span>
              <span>45-Minute Rapid On-Site Response Guarantee</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Emergency Water Damage{' '}
              <span className="bg-gradient-to-r from-[#00E5FF] via-cyan-300 to-white bg-clip-text text-transparent">
                Restoration & Extraction
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              When disaster strikes, every minute counts. Our certified technicians extract standing floodwater, dry subfloors with commercial equipment, and stop mold before structural collapse.
            </p>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm text-slate-200 font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>$0 Upfront Insurance Billing</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>IICRC Certified Master Crews</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>Industrial LGR Drying Equipment</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="group relative flex items-center justify-center gap-3 px-7 py-4 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl font-extrabold text-base tracking-wide shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Phone className="w-4 h-4 text-white fill-current animate-bounce" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] uppercase tracking-wider text-red-100 font-bold">Immediate 24/7 Hotline</span>
                  <span className="text-base font-black leading-tight">{siteConfig.contact.phone}</span>
                </div>
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-[#14233D] hover:bg-[#1E3352] text-[#00E5FF] border border-[#00E5FF]/40 hover:border-[#00E5FF] rounded-xl font-bold text-sm tracking-wide transition shadow-lg shadow-cyan-950/30 cursor-pointer"
              >
                <span>Request Rapid Dispatch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Live Dispatch Ticker */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>
                <strong>Live Fleet:</strong> Staged in Metro District • Average dispatch ETA:{' '}
                <span className="text-[#00E5FF] font-semibold">28 minutes</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Cinematic Image with Overlay Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00E5FF]/40 to-[#FF2A2A]/40 rounded-3xl blur-xl opacity-60" />

              <div className="relative rounded-2xl overflow-hidden border border-[#1E3352] shadow-2xl bg-[#101E35]">
                <img
                  src="/images/hero-water-damage.jpg"
                  alt="Certified emergency water restoration technician extracting standing flood water in flooded home"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Bottom Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/30 to-transparent" />

                {/* Floating On-Image Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0B1528]/90 backdrop-blur-md border border-[#1E3352] rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Emergency Flood Control</p>
                      <p className="text-[11px] text-slate-400">Truck-mounted high-suction extraction</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-[#00E5FF]">READY NOW</span>
                    <p className="text-[10px] text-slate-400">24/7/365</p>
                  </div>
                </div>
              </div>

              {/* Floating Top Pill */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 py-2 px-3.5 bg-[#14233D]/95 border border-[#00E5FF]/50 rounded-xl shadow-xl backdrop-blur-md">
                <Clock className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-xs font-bold text-white">
                  &lt; 45 Min On-Site
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
