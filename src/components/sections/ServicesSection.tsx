import React from 'react'
import {
  Droplets,
  Wind,
  ShieldAlert,
  ShieldCheck,
  CloudRain,
  FileCheck2,
  CheckCircle,
  ArrowRight,
  PhoneCall,
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import { BorderBeam } from '@/components/ui/border-beam'

interface ServicesSectionProps {
  onOpenQuote: () => void
}

const serviceImages: Record<string, string> = {
  'emergency-water-extraction': '/images/service-extraction.jpg',
  'structural-drying-dehumidification': '/images/service-drying.jpg',
  'sewage-cleanup-sanitization': '/images/service-sewage.jpg',
  'mold-remediation-prevention': '/images/service-mold.jpg',
  'flood-storm-restoration': '/images/service-pipe.jpg',
  'insurance-claim-assistance': '/images/service-insurance.jpg',
}

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Wind,
  ShieldAlert,
  ShieldCheck,
  CloudRain,
  FileCheck2,
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="services" className="relative py-24 bg-[#0B1528] overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#00D2E0] animate-pulse" />
            <span>Comprehensive Disaster Recovery Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Certified Emergency Water Damage Services
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Rapid response crews equipped with commercial thermal cameras, truck-mounted extraction pumps, and desiccant dehumidifiers to protect your property.
          </p>
        </div>

        {/* Services 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Droplets
            const imgSrc = serviceImages[service.id] || '/images/hero-water-damage.jpg'

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#101E35] border border-white/15 hover:border-[#00D2E0]/50 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Border Beam with Brand Colors (#00D2E0 aqua & #0284C7 blue) on top of perimeter */}
                <BorderBeam
                  size={260}
                  duration={10}
                  delay={index * 3}
                  colorFrom="#00D2E0"
                  colorTo="#0284C7"
                  borderWidth={2}
                />

                {/* Service Image Card Header */}
                <div className="relative h-56 w-full overflow-hidden bg-[#14233D]">
                  <img
                    src={imgSrc}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101E35] via-[#101E35]/40 to-transparent pointer-events-none" />

                  {/* Floating Service Icon Pill */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#0B1528]/95 border border-white/15 text-[#00D2E0] shadow-xl">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* 24/7 Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#FF2A2A] text-white text-sm font-extrabold uppercase tracking-wider shadow-lg">
                    24/7 Dispatch
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00D2E0] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-3 border-t border-white/10">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                        <CheckCircle className="w-4 h-4 text-[#00D2E0] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className="w-full py-3 px-3.5 bg-[#14233D] hover:bg-[#1E3352] text-white border border-white/20 hover:border-[#00D2E0] rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4 text-[#00D2E0]" />
                    </button>

                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="w-full py-3 px-3.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl text-sm font-extrabold transition flex items-center justify-center gap-2 shadow-lg shadow-red-900/40"
                    >
                      <PhoneCall className="w-4 h-4 fill-current" />
                      <span>Dispatch</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
