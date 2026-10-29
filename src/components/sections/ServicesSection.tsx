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
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#FF2A2A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14233D] border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
            <span>Comprehensive Disaster Recovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Certified Water Damage{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-cyan-300 bg-clip-text text-transparent">
              Restoration Services
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Rapid response crews equipped with industrial thermal imaging, extraction pumps, and desiccant dehumidifiers to save your property.
          </p>
        </div>

        {/* Services 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Droplets
            const imgSrc = serviceImages[service.id] || '/images/hero-water-damage.jpg'

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#101E35] border border-[#1E3352] hover:border-[#00E5FF]/60 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Border Beam subtle animation on first 2 cards */}
                {index < 2 && <BorderBeam size={250} duration={12} delay={index * 4} />}

                {/* Service Image Card Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#14233D]">
                  <img
                    src={imgSrc}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101E35] via-[#101E35]/40 to-transparent" />

                  {/* Floating Service Icon Pill */}
                  <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-[#0B1528]/90 border border-[#1E3352] text-[#00E5FF] shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* 24/7 Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#FF2A2A]/90 text-white text-[10px] font-extrabold uppercase tracking-wider">
                    24/7 Dispatch
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-2 border-t border-[#1E3352]/70">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className="w-full py-2.5 px-3 bg-[#14233D] hover:bg-[#1E3352] text-[#00E5FF] border border-[#00E5FF]/30 hover:border-[#00E5FF] rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="w-full py-2.5 px-3 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-md shadow-red-900/30"
                    >
                      <PhoneCall className="w-3 h-3" />
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
