import React from 'react'
import { Clock, ShieldCheck, Award, FileCheck2, Building2 } from 'lucide-react'
import { NumberTicker } from '@/components/ui/number-ticker'

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: Clock,
      value: 45,
      suffix: ' Min',
      label: 'Rapid Response Guarantee',
      desc: 'Average on-site dispatch turnaround',
    },
    {
      icon: Building2,
      value: 4850,
      suffix: '+',
      label: 'Properties Restored',
      desc: 'Residential and commercial structures saved',
    },
    {
      icon: FileCheck2,
      value: 100,
      suffix: '%',
      label: 'Direct Insurance Billing',
      desc: 'Zero upfront hassle with major carriers',
    },
    {
      icon: ShieldCheck,
      value: 24,
      suffix: '/7/365',
      label: 'Continuous Live Dispatch',
      desc: 'Master crews ready at all hours',
    },
  ]

  const trustBadges = [
    'IICRC Certified Master Firm',
    'EPA Lead-Safe Certified',
    'Licensed & Insured Restorer',
    'BBB A+ Accredited',
    'Xactimate Certified Estimators',
  ]

  return (
    <section className="relative z-10 py-12 bg-[#0B1528] border-y border-white/10">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Main 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#101E35] border border-white/15 hover:border-[#00D2E0]/50 transition-all group shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#14233D] border border-white/15 flex items-center justify-center text-[#00D2E0] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Verified SLA
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white flex items-baseline">
                  <NumberTicker value={stat.value} className="text-white" />
                  <span className="text-[#00D2E0]">{stat.suffix}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mt-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Accreditations Strip */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-slate-300">
          <span className="text-slate-400 uppercase tracking-widest text-sm font-extrabold">
            Industry Accreditations:
          </span>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-slate-200">
              <Award className="w-5 h-5 text-[#00D2E0]" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
