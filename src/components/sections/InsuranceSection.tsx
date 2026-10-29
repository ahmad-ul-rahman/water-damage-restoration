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
    <section id="insurance" className="relative py-24 bg-[#0B1528] border-t border-white/10 overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-bold">
            <ShieldCheck className="w-4 h-4 text-[#00D2E0]" />
            <span>Direct Insurance Billing Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            We Bill Your Insurance Directly With Zero Upfront Stress
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Water damage is stressful enough. We take over the paperwork, negotiate directly with your adjuster, and ensure your home is restored to 100% pre-loss condition.
          </p>
        </div>

        {/* Carrier Logos Infinite Marquee */}
        <div className="mb-16 py-5 bg-[#101E35] border-y border-white/10 rounded-2xl overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {insuranceCarriers.map((carrier, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-6 py-2.5 text-slate-200 font-bold text-sm tracking-wide bg-[#14233D] rounded-xl border border-white/15 mx-2.5"
              >
                <ShieldCheck className="w-4 h-4 text-[#00D2E0]" />
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
                  className="p-7 rounded-2xl bg-[#101E35] border border-white/15 hover:border-[#00D2E0]/50 transition-all flex items-start gap-5 shadow-xl"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#14233D] border border-white/15 flex items-center justify-center text-[#00D2E0] shrink-0 mt-0.5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Thermal Imaging & Estimation Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#101E35] group">
              <img
                src="/images/service-insurance.jpg"
                alt="FLIR thermal imaging moisture detection camera alongside insurance claim documentation and Xactimate approval"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/25 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-5 bg-[#0B1528]/95 backdrop-blur-md rounded-xl border border-white/15 space-y-2.5 shadow-2xl">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-white flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Insurance Claim Approved
                  </span>
                  <span className="text-emerald-400 font-extrabold">Xactimate® Line-Item</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Comprehensive thermal FLIR documentation leaves zero room for claim denials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
