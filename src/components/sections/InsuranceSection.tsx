import React from 'react'
import { FileCheck, ShieldCheck, DollarSign, Camera, CheckCircle } from 'lucide-react'
import { Marquee } from '@/components/ui/marquee'

export const InsuranceSection: React.FC = () => {
  const insuranceCarriers = [
    'State Farm',
    'Allstate',
    'Liberty Mutual',
    'Travelers',
    'Nationwide',
    'Farmers Insurance',
    'Chubb',
    'USAA',
    'American Family',
    'Progressive',
    'Hartford',
    'Erie Insurance',
  ]

  const claimSteps = [
    {
      icon: Camera,
      title: '1. Forensic 3D & Thermal Damage Documentation',
      desc: 'Our technicians log full infrared FLIR camera scans and moisture readings into an indisputable digital loss report.',
    },
    {
      icon: FileCheck,
      title: '2. Industry-Standard Xactimate® Estimates',
      desc: 'We write claims using Xactimate—the exact pricing software insurance adjusters mandate—ensuring rapid pre-approval.',
    },
    {
      icon: DollarSign,
      title: '3. Direct Carrier Billing ($0 Out-of-Pocket)',
      desc: 'We bill your insurer directly for the restoration work and assist you with deductible coordination for maximum coverage.',
    },
  ]

  return (
    <section id="insurance" className="relative py-24 bg-[#0B1528] border-t border-[#1E3352] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14233D] border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
            <span>Direct Insurance Billing Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            We Bill Your Insurance Directly{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-cyan-300 bg-clip-text text-transparent">
              Zero Upfront Stress
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Water damage is stressful enough. We take over the paperwork, negotiate directly with your adjuster, and ensure your home is restored to 100% pre-loss condition.
          </p>
        </div>

        {/* Carrier Logos Infinite Marquee */}
        <div className="mb-16 py-4 bg-[#101E35] border-y border-[#1E3352]/70 rounded-2xl overflow-hidden">
          <Marquee pauseOnHover className="[--duration:28s]">
            {insuranceCarriers.map((carrier, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-6 py-2 text-slate-300 font-bold text-sm tracking-wide bg-[#14233D] rounded-xl border border-[#1E3352] mx-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                <span>{carrier}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* 2-Column: Steps on Left, Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: 3 Steps */}
          <div className="lg:col-span-7 space-y-6">
            {claimSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#101E35] border border-[#1E3352] hover:border-[#00E5FF]/50 transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#14233D] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] flex-shrink-0 mt-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Thermal Imaging & Estimation Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#1E3352] shadow-2xl bg-[#101E35] group">
              <img
                src="/images/service-insurance.jpg"
                alt="FLIR thermal imaging moisture detection camera alongside insurance claim documentation and Xactimate approval"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B1528]/95 backdrop-blur-md rounded-xl border border-[#1E3352] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-white flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Insurance Claim Approved
                  </span>
                  <span className="text-[#00E5FF]">Xactimate® Verified</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Comprehensive line-item documentation leaves zero room for claim denials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
