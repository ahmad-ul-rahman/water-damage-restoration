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
    <section id="service-areas" className="relative py-24 bg-[#0B1528] border-t border-[#1E3352] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14233D] border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
            <span>Metropolitan Coverage Hubs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Rapid Dispatch Across All{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-cyan-300 bg-clip-text text-transparent">
              Service Regions
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our certified restoration vehicles are strategically dispatched from 5 regional hubs ensuring arrival under 45 minutes guaranteed.
          </p>
        </div>

        {/* Instant Zip Code Checker */}
        <div className="max-w-xl mx-auto mb-16">
          <form
            onSubmit={handleZipCheck}
            className="p-3 bg-[#101E35] border border-[#1E3352] rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                maxLength={5}
                placeholder="Enter your 5-digit zip code..."
                className="w-full pl-11 pr-4 py-3 bg-[#14233D] border border-transparent focus:border-[#00E5FF] rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#0B1528] font-bold text-sm rounded-xl hover:opacity-95 transition shadow-lg shadow-cyan-500/20 cursor-pointer flex-shrink-0"
            >
              Check Availability
            </button>
          </form>

          {checkResult && (
            <div className="mt-3 p-3.5 rounded-xl bg-[#14233D] border border-[#00E5FF]/40 text-xs text-slate-200 flex items-start gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
              <span>{checkResult}</span>
            </div>
          )}
        </div>

        {/* Service Area Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.serviceAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#101E35] border border-[#1E3352] hover:border-[#00E5FF]/50 transition-all shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#14233D] border border-[#1E3352] flex items-center justify-center text-[#00E5FF] group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Crews Staged
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-slate-400">{area.state}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1E3352]/70 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
                  Avg Arrival: ~{area.averageResponseTimeMinutes} mins
                </span>

                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-[#FF2A2A] hover:text-red-400 font-bold flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 fill-current" />
                  <span>Call Hub</span>
                </a>
              </div>
            </div>
          ))}

          {/* Special Extended Coverage Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#14233D] to-[#101E35] border border-[#00E5FF]/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#00E5FF] font-bold text-xs uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Extended Service Range</span>
              </div>
              <h3 className="text-lg font-bold text-white">Outside Our Core Zones?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We also dispatch mutual aid emergency crews to surrounding counties and rural regions for major catastrophic flooding and pipe freezes.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#1E3352]/70">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full py-2.5 px-4 bg-[#FF2A2A] hover:bg-[#D50000] text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call Extended Dispatch ({siteConfig.contact.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
