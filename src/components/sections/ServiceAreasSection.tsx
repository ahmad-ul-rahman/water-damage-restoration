import React, { useState } from 'react'
import { MapPin, Clock, Search, CheckCircle2, Phone, Shield } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const ServiceAreasSection: React.FC = () => {
  const [zipCode, setZipCode] = useState('')
  const [checkResult, setCheckResult] = useState<string | null>(null)

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (!zipCode.trim() || zipCode.length < 5) {
      setCheckResult('Please enter a valid 5-digit zip code.')
      return
    }
    setCheckResult(`Active Emergency Response Zone: Crew dispatched to ${zipCode} with an estimated arrival time of 25–38 minutes. Call now to secure priority queue.`)
  }

  return (
    <section id="service-areas" className="relative py-24 bg-[#0B1528] border-t border-white/10 overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-bold">
            <MapPin className="w-4 h-4 text-[#00D2E0]" />
            <span>Metropolitan Coverage Hubs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Rapid Dispatch Across All Service Regions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Our certified restoration vehicles are strategically dispatched from 5 regional hubs ensuring arrival under 45 minutes guaranteed.
          </p>
        </div>

        {/* Instant Zip Code Checker */}
        <div className="max-w-xl mx-auto mb-16">
          <form
            onSubmit={handleZipCheck}
            className="p-3 bg-[#101E35] border border-white/15 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-2.5"
          >
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                maxLength={5}
                placeholder="Enter your 5-digit zip code..."
                className="w-full pl-12 pr-4 py-3 bg-[#14233D] border border-transparent focus:border-[#00D2E0] rounded-xl text-base text-white placeholder-slate-400 focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#00D2E0] to-[#0284C7] hover:brightness-110 text-[#0B1528] font-black text-base rounded-xl transition shadow-xl shadow-cyan-950/60 cursor-pointer shrink-0"
            >
              Check Availability
            </button>
          </form>

          {checkResult && (
            <div className="mt-3.5 p-4 rounded-xl bg-[#14233D] border border-white/20 text-sm text-slate-200 flex items-start gap-3 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{checkResult}</span>
            </div>
          )}
        </div>

        {/* Service Area Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.serviceAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#101E35] border border-white/15 hover:border-[#00D2E0]/50 transition-all shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#14233D] border border-white/15 flex items-center justify-center text-[#00D2E0] group-hover:scale-105 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-sm font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Crews Staged
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D2E0] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-sm text-slate-300 mt-0.5 font-medium">{area.state}</p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-200 font-semibold">
                  <Clock className="w-4 h-4 text-[#00D2E0]" />
                  Avg Arrival: ~{area.averageResponseTimeMinutes} mins
                </span>

                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-[#00D2E0] hover:text-cyan-300 font-black flex items-center gap-1.5 text-sm"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Hub</span>
                </a>
              </div>
            </div>
          ))}

          {/* Special Extended Coverage Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#14233D] to-[#101E35] border border-white/20 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-200 font-bold text-sm uppercase tracking-wider">
                <Shield className="w-5 h-5 text-[#00D2E0]" />
                <span>Extended Service Range</span>
              </div>
              <h3 className="text-xl font-bold text-white">Outside Our Core Zones?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We also dispatch mutual aid emergency crews to surrounding counties and rural regions for major catastrophic flooding and pipe freezes.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-[#00D2E0] to-[#0284C7] hover:brightness-110 text-[#0B1528] font-black rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-xl shadow-cyan-950/60"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Extended Dispatch ({siteConfig.contact.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
