import React from 'react'
import { Droplets, Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070E1B] border-t border-white/10 text-slate-300 text-sm py-16">
      <div className="w-full px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Emergency Hotline */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D2E0] to-[#0284C7] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0B1528] rounded-[10px] flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-[#00D2E0]" />
                </div>
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                AquaGuard <span className="text-[#00D2E0]">Restoration</span>
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-base max-w-sm">
              Rapid 24/7 emergency water extraction, flood damage restoration, structural dehumidification, and certified mold remediation.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-[#00D2E0] to-[#0284C7] hover:brightness-110 text-[#0B1528] font-black rounded-xl text-base shadow-xl shadow-cyan-950/60 transition"
              >
                <Phone className="w-5 h-5 fill-current animate-bounce" />
                <span>Call 24/7: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Restoration Services */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#protocols" className="hover:text-white transition-colors">
                  IICRC Extraction Protocols
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  5-Stage Drying Process
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">
                  Before &amp; After Proof
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:text-white transition-colors">
                  Direct Insurance Billing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">
                  Service Area Hubs
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch Contacts */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Emergency Dispatch
            </h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#00D2E0] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} AquaGuard Restoration. All rights reserved. State Licensed &amp; Fully Insured.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#00D2E0]" />
              IICRC Certified Master Water Restorer
            </span>
            <span>•</span>
            <span className="text-slate-300 font-semibold">45-Minute Emergency SLA Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
