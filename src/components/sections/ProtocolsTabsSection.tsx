import React from 'react'
import {
  ShieldAlert,
  Droplets,
  Biohazard,
  Building2,
  FileCheck2,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { DirectionAwareTabs } from '@/components/ui/direction-aware-tabs'
import { siteConfig } from '@/config/site'

interface ProtocolsTabsSectionProps {
  onOpenQuote: () => void
}

export const ProtocolsTabsSection: React.FC<ProtocolsTabsSectionProps> = ({ onOpenQuote }) => {
  const tabs = [
    {
      id: 0,
      label: 'Category 1: Clean Water',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101E35] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl mt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#14233D] border border-white/20 text-slate-200 text-sm font-bold">
              <Droplets className="w-4 h-4 text-[#00D2E0]" />
              <span>Burst Supply Lines • Appliance Leaks • Rain Infiltration</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Rapid Clean Water Extraction & Structural Drying
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Clean water does not pose immediate biological threats, but without swift psychrometric extraction within 24 to 48 hours, it degrades into toxic grey and black water that ruins drywall, carpets, and hardwoods.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-200 font-semibold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Immediate deep vacuum extraction</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>FLIR infrared subfloor moisture mapping</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Industrial LGR low-grain dehumidifiers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Save hardwood floors without replacement</span>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="px-6 py-3.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl text-base font-extrabold flex items-center gap-2.5 shadow-xl shadow-red-900/40 transition"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Dispatch Cat-1 Techs</span>
              </a>
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-[#14233D] hover:bg-[#1E3352] text-white border border-white/20 rounded-xl text-base font-bold transition flex items-center gap-2 cursor-pointer"
              >
                <span>Free On-Site Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#00D2E0]" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#14233D] shadow-xl">
              <img
                src="/images/service-extraction.jpg"
                alt="Emergency Category 1 clean water extraction equipment"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6 space-y-3 bg-[#0B1528]">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-300">Target ETA:</span>
                  <span className="text-emerald-400 font-extrabold">Within 45 Minutes</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold border-t border-white/10 pt-2.5">
                  <span className="text-slate-300">Average Drying Time:</span>
                  <span className="text-white font-extrabold">24 – 36 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      label: 'Category 2: Grey Water',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101E35] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl mt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#14233D] border border-white/20 text-slate-200 text-sm font-bold">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Sump Failures • Dishwasher Floods • Washing Machines</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Antimicrobial Sanitization & Subfloor Decontamination
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Grey water carries chemical contaminants, suspended solids, and early micro-bacterial colonies. We sanitize subsurfaces with EPA-registered botanical antimicrobials to eliminate illness risk.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-200 font-semibold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>EPA-approved botanical disinfectants</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Wall cavity injectidry systems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>HEPA 500 air scrubbers deployed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Zero chemical residue guarantee</span>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="px-6 py-3.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl text-base font-extrabold flex items-center gap-2.5 shadow-xl shadow-red-900/40 transition"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Dispatch Decon Unit</span>
              </a>
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-[#14233D] hover:bg-[#1E3352] text-white border border-white/20 rounded-xl text-base font-bold transition flex items-center gap-2 cursor-pointer"
              >
                <span>Request Decon Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#00D2E0]" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#14233D] shadow-xl">
              <img
                src="/images/service-drying.jpg"
                alt="Category 2 grey water sanitization and structural drying"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6 space-y-3 bg-[#0B1528]">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-300">Sanitization Level:</span>
                  <span className="text-amber-400 font-extrabold">Hospital-Grade Decontamination</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold border-t border-white/10 pt-2.5">
                  <span className="text-slate-300">Biological Clearance:</span>
                  <span className="text-emerald-400 font-extrabold">Verified ATP Swab Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      label: 'Category 3: Black Water',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101E35] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl mt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-950/80 border border-red-500/40 text-red-200 text-sm font-bold">
              <Biohazard className="w-4 h-4 text-red-400" />
              <span>Biohazard Sewage Backup • River Flooding • Ground Water</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Class 3 Biohazard Containment & Sterile Remediation
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Black water contains raw pathogenic waste, heavy metals, and dangerous parasites. Our hazmat-certified technicians seal the contaminated perimeter with negative air pressure and remove affected building materials immediately.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-200 font-semibold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                <span>Negative air containment barriers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                <span>Safe disposal of bio-porous materials</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                <span>Broad-spectrum thermal fogging disinfection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                <span>Formal third-party hygiene clearance</span>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="px-6 py-3.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl text-base font-extrabold flex items-center gap-2.5 shadow-xl shadow-red-900/40 transition"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Dispatch Biohazard Team</span>
              </a>
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-[#14233D] hover:bg-[#1E3352] text-white border border-white/20 rounded-xl text-base font-bold transition flex items-center gap-2 cursor-pointer"
              >
                <span>Request Hazardous Inspection</span>
                <ArrowRight className="w-4 h-4 text-[#00D2E0]" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#14233D] shadow-xl">
              <img
                src="/images/service-sewage.jpg"
                alt="Category 3 black water sewage containment and biohazard remediation"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6 space-y-3 bg-[#0B1528]">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-300">Hazard Rating:</span>
                  <span className="text-red-400 font-extrabold">Class 3 Extreme Biohazard</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold border-t border-white/10 pt-2.5">
                  <span className="text-slate-300">Crew Certification:</span>
                  <span className="text-white font-extrabold">IICRC Master Hazmat Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      label: 'Commercial Large-Loss',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101E35] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl mt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#14233D] border border-white/20 text-slate-200 text-sm font-bold">
              <Building2 className="w-4 h-4 text-[#00D2E0]" />
              <span>Multi-Story High-Rises • Medical Centers • Warehouses</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Industrial Loss Response & Rapid Business Continuity
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              When commercial facilities suffer water damage, lost hours equal lost revenue. We deploy mobile trailer desiccant plants and commercial generator power to restore tenant operations on prioritized schedules.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-200 font-semibold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>5,000+ CFM trailer desiccant dehumidifiers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Emergency power generators & fuel trailers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Floor-by-floor phased structural drying</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Complete business interruption records</span>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="px-6 py-3.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl text-base font-extrabold flex items-center gap-2.5 shadow-xl shadow-red-900/40 transition"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Commercial Dispatch</span>
              </a>
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-[#14233D] hover:bg-[#1E3352] text-white border border-white/20 rounded-xl text-base font-bold transition flex items-center gap-2 cursor-pointer"
              >
                <span>Commercial Account RFP</span>
                <ArrowRight className="w-4 h-4 text-[#00D2E0]" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#14233D] shadow-xl">
              <img
                src="/images/trust-fleet.jpg"
                alt="Commercial large loss restoration fleet and trailer desiccant equipment"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6 space-y-3 bg-[#0B1528]">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-300">Industrial Capacity:</span>
                  <span className="text-white font-extrabold">Up to 250,000 Sq. Ft.</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold border-t border-white/10 pt-2.5">
                  <span className="text-slate-300">Deployment Notice:</span>
                  <span className="text-emerald-400 font-extrabold">Instant Priority Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      label: '$0 Upfront Insurance Claims',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101E35] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl mt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#14233D] border border-white/20 text-slate-200 text-sm font-bold">
              <FileCheck2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Carrier Billing • Xactimate Line-Item Invoicing</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Direct Insurance Billing With Zero Out-of-Pocket Stress
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We bill your homeowner or commercial insurance carrier directly using official Xactimate software. You never pay upfront costs for emergency water extraction and moisture stabilization.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-200 font-semibold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Direct billing to State Farm, Allstate & more</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>FLIR thermal moisture damage dossiers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Dedicated adjuster liaison on every claim</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Maximizing approved coverage payouts</span>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl text-base font-extrabold flex items-center gap-2.5 shadow-xl shadow-red-900/40 transition cursor-pointer"
              >
                <span>File Direct Insurance Claim</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="px-6 py-3.5 bg-[#14233D] hover:bg-[#1E3352] text-white border border-white/20 rounded-xl text-base font-bold transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#00D2E0]" />
                <span>Speak with Claims Specialist</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#14233D] shadow-xl">
              <img
                src="/images/service-insurance.jpg"
                alt="Direct insurance claim documentation and billing"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6 space-y-3 bg-[#0B1528]">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-300">Upfront Out-of-Pocket:</span>
                  <span className="text-emerald-400 font-extrabold">$0.00 Required</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold border-t border-white/10 pt-2.5">
                  <span className="text-slate-300">Carrier Coordination:</span>
                  <span className="text-white font-extrabold">Direct Adjuster Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="protocols" className="relative py-24 bg-[#0B1528] overflow-hidden border-t border-white/10">
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-bold">
            <Sparkles className="w-4 h-4 text-[#00D2E0]" />
            <span>Cult UI Interactive Protocol Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            IICRC Standard Water Extraction Protocols
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Select your water category or loss type below to review our certified emergency procedures, equipment, and turnaround times.
          </p>
        </div>

        {/* Cult UI DirectionAwareTabs */}
        <div className="max-w-6xl mx-auto">
          <DirectionAwareTabs tabs={tabs} />
        </div>
      </div>
    </section>
  )
}
