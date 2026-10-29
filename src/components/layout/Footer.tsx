import React from 'react'
import { Droplets, Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070E1B] border-t border-[#1E3352] text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Emergency Hotline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#007299] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0B1528] rounded-[10px] flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-[#00E5FF]" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                AquaGuard <span className="text-[#00E5FF]">Restoration</span>
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm max-w-sm">
              Rapid 24/7 emergency water extraction, flood damage restoration, structural dehumidification, and certified mold remediation.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white font-extrabold rounded-lg text-sm shadow-lg shadow-red-900/30 transition"
              >
                <Phone className="w-4 h-4 fill-current animate-bounce" />
                <span>Call 24/7: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Restoration Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#00E5FF] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#process" className="hover:text-[#00E5FF] transition-colors">
                  5-Stage Drying Process
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-[#00E5FF] transition-colors">
                  Before &amp; After Proof
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:text-[#00E5FF] transition-colors">
                  Direct Insurance Billing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#00E5FF] transition-colors">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-[#00E5FF] transition-colors">
                  Service Area Hubs
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00E5FF] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch Contacts */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Emergency Dispatch
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#00E5FF]">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#1E3352]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} AquaGuard Restoration. All rights reserved. State Licensed &amp; Fully Insured.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
              IICRC Certified Master Water Restorer
            </span>
            <span>•</span>
            <span className="text-slate-400">45-Minute Emergency SLA Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
