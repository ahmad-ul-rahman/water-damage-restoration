import React from 'react'
import { Phone, FileText } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface MobileStickyCallProps {
  onOpenQuote: () => void
}

export const MobileStickyCall: React.FC<MobileStickyCallProps> = ({ onOpenQuote }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1528]/95 backdrop-blur-xl border-t border-white/15 px-4 py-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onOpenQuote}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#14233D] hover:bg-[#1E3352] text-white border border-white/20 font-bold text-sm tracking-wide rounded-xl transition active:scale-95 cursor-pointer"
        >
          <FileText className="w-4 h-4 text-[#00D2E0]" />
          <span>Get Quote</span>
        </button>

        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#FF2A2A] hover:bg-[#D50000] text-white font-extrabold text-sm tracking-wide rounded-xl shadow-lg shadow-red-600/40 transition active:scale-95"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <Phone className="w-4 h-4 fill-current" />
          <span>Call 24/7</span>
        </a>
      </div>
    </div>
  )
}
