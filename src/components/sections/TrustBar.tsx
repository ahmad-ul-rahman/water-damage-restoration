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
      desc: 'Average on-site dispatch time',
    },
    {
      icon: Building2,
      value: 4850,
      suffix: '+',
      label: 'Disasters Restored',
      desc: 'Homes & businesses saved',
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
      label: 'Continuous Emergency Coverage',
      desc: 'Never reach an answering machine',
    },
  ]

  const trustBadges = [
    'IICRC Certified Firm',
    'EPA Lead-Safe Certified',
    'Licensed & Insured Master Restorer',
    'BBB A+ Accredited',
    'Xactimate Certified Estimators',
  ]

  return (
    <section className="relative z-10 py-10 bg-[#0B1528] border-y border-[#1E3352]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="relative p-5 rounded-2xl bg-[#101E35] border border-[#1E3352] hover:border-[#00E5FF]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#14233D] border border-[#1E3352] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Verified
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline">
                  <NumberTicker value={stat.value} className="text-white" />
                  <span className="text-[#00E5FF]">{stat.suffix}</span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  {stat.label}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {stat.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Accreditations Strip */}
        <div className="mt-8 pt-6 border-t border-[#1E3352]/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-400">
          <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">
            Industry Accreditations:
          </span>
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-4 h-4 text-[#00E5FF]" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
