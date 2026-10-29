import React from 'react'
import { Phone, Clock, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const EmergencyCtaSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-[#0B1528] via-[#101E35] to-[#070E1B] border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting from brand palette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#00D2E0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10 max-w-5xl mx-auto text-center">
        {/* Emergency Beacon */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#101E35] border border-[#00D2E0]/40 text-slate-200 text-sm font-black uppercase tracking-wider shadow-2xl backdrop-blur-md mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
          </span>
          <span>24/7/365 Emergency Dispatch Active</span>
          <span className="h-4 w-px bg-white/20" />
          <span className="text-emerald-400 font-extrabold flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            Live Crews Staged Now
          </span>
        </div>

        {/* Commanding Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
          Standing Floodwater Weakens Foundations in Hours.{' '}
          <span className="text-slate-100 underline decoration-[#00D2E0]/60 decoration-4 underline-offset-8">
            Don&apos;t Wait.
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-slate-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Every minute of delay increases structural damage, subfloor warping, and hazardous mold growth. Our certified master technicians are staged with industrial vacuum trucks ready to roll to your door right now.
        </p>

        {/* 3 High-Trust Assurance Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base font-bold text-slate-200 mb-12">
          <div className="flex items-center gap-2.5 bg-[#14233D] px-4 py-2.5 rounded-xl border border-white/10 shadow-md">
            <Clock className="w-5 h-5 text-[#00D2E0] shrink-0" />
            <span>45-Min Guaranteed Response SLA</span>
          </div>
          <div className="flex items-center gap-2.5 bg-[#14233D] px-4 py-2.5 rounded-xl border border-white/10 shadow-md">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>$0 Upfront Direct Insurance Billing</span>
          </div>
          <div className="flex items-center gap-2.5 bg-[#14233D] px-4 py-2.5 rounded-xl border border-white/10 shadow-md">
            <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
            <span>IICRC Certified Master Crews</span>
          </div>
        </div>

        {/* THE SINGLE MASSIVE PHONE NUMBER CTA BUTTON - BRAND PALETTE */}
        <div className="max-w-2xl mx-auto">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-r from-[#00D2E0] via-[#0284C7] to-[#007299] hover:brightness-110 text-[#0B1528] rounded-3xl shadow-2xl shadow-cyan-950/70 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border-2 border-[#00D2E0]/60"
          >
            {/* Animated Halo Glow */}
            <span className="absolute -inset-1 rounded-3xl bg-[#00D2E0]/20 blur-xl group-hover:bg-[#00D2E0]/40 transition-opacity" />

            <div className="relative z-10 flex items-center justify-center gap-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1528]/20 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300">
                <Phone className="w-8 h-8 text-[#0B1528] fill-current animate-bounce" />
              </div>
              <div className="text-left">
                <span className="block text-sm sm:text-base uppercase tracking-widest text-[#0B1528]/80 font-black">
                  One-Tap Immediate Dispatch Hotline
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#0B1528]">
                  {siteConfig.contact.phone}
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-5 pt-3.5 border-t border-[#0B1528]/20 w-full flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base font-black text-[#0B1528] gap-2">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B1528] animate-pulse" />
                Live human dispatcher answers in &lt; 2 rings
              </span>
              <span>Available 24/7/365 • Zero hold time</span>
            </div>
          </a>

          {/* Quick Support Footnote */}
          <p className="text-sm font-medium text-slate-300 mt-6 leading-relaxed">
            Prefer WhatsApp? You can also{' '}
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline decoration-emerald-400/50 font-bold hover:text-emerald-300 transition"
            >
              chat with our emergency coordinator on WhatsApp ({siteConfig.contact.whatsapp})
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
