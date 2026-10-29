import React from 'react'
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0B1528] overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-bold">
            <ShieldCheck className="w-4 h-4 text-[#00D2E0]" />
            <span>Verified Emergency Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted by Homeowners When Seconds Matter
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            See how our rapid-response restoration specialists saved homes from catastrophic structural damage.
          </p>
        </div>

        {/* Fleet Highlight Banner */}
        <div className="mb-14 relative rounded-2xl overflow-hidden border border-white/15 bg-[#101E35] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-7 sm:p-10 space-y-5">
              <div className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#00D2E0]">
                <ShieldCheck className="w-5 h-5" />
                <span>Rapid Response Fleet</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Always Prepared, Staged & Ready in Your Area
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Our fleet of truck-mounted extraction units and commercial drying trailers are strategically positioned across all service hubs for continuous 24/7/365 deployment.
              </p>
              <div className="flex items-center gap-5 text-sm font-bold text-slate-200 pt-2">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Live GPS Fleet Tracking
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Commercial Grade Units
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 h-72 sm:h-96 relative overflow-hidden bg-[#14233D]">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#101E35] border border-white/15 hover:border-[#00D2E0]/50 transition-all flex flex-col justify-between shadow-2xl relative group"
            >
              <div className="space-y-4">
                {/* Top row: stars + quote mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-slate-500 group-hover:text-[#00D2E0] transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-base text-slate-200 italic leading-relaxed">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Author & Tag */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    {t.name}
                    <span className="text-sm text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40">
                      Verified
                    </span>
                  </h4>
                  <p className="text-sm text-slate-400 mt-0.5">{t.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-[#00D2E0] block">
                    {t.service}
                  </span>
                  <span className="text-sm text-slate-400">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
