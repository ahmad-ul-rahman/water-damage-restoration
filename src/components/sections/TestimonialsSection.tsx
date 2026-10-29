import React from 'react'
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0B1528] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14233D] border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
            <span>Verified Emergency Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted by Homeowners When{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-cyan-300 bg-clip-text text-transparent">
              Seconds Matter
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how our rapid-response restoration specialists saved homes from catastrophic structural damage.
          </p>
        </div>

        {/* Fleet Highlight Banner */}
        <div className="mb-14 relative rounded-2xl overflow-hidden border border-[#1E3352] bg-[#101E35] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00E5FF]">
                <ShieldCheck className="w-4 h-4" />
                <span>Rapid Response Fleet</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Always Prepared, Staged & Ready in Your Area
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our fleet of truck-mounted extraction units and commercial drying trailers are strategically positioned across all service hubs for continuous 24/7/365 deployment.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Live GPS Tracking
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Commercial Grade
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 h-64 sm:h-80 relative overflow-hidden bg-[#14233D]">
              <img
                src="/images/trust-fleet.jpg"
                alt="AquaGuard emergency water restoration fleet of service vans ready for dispatch"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#101E35] via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-[#101E35] border border-[#1E3352] hover:border-[#00E5FF]/50 transition-all flex flex-col justify-between shadow-xl relative group"
            >
              <div className="space-y-4">
                {/* Top row: stars + quote mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-600 group-hover:text-[#00E5FF] transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Author & Tag */}
              <div className="pt-6 mt-6 border-t border-[#1E3352]/70 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {t.name}
                    <span className="text-[10px] text-emerald-400 font-semibold px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                      Verified
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-[#00E5FF] block">
                    {t.service}
                  </span>
                  <span className="text-[10px] text-slate-500">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
