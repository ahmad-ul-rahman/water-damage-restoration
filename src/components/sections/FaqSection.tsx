import React, { useState } from 'react'
import { ChevronDown, Phone, ShieldCheck, Sparkles } from 'lucide-react'
import { siteConfig } from '@/config/site'
import {
  Expandable,
  ExpandableCard,
  ExpandableTrigger,
  ExpandableContent,
} from '@/components/ui/expandable'

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="relative py-24 bg-[#0B1528] overflow-hidden border-t border-white/10">
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-bold">
            <Sparkles className="w-4 h-4 text-[#00D2E0]" />
            <span>Cult UI Animated Emergency Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Clear, authoritative answers to the most critical water damage, insurance, and drying questions.
          </p>
        </div>

        {/* Cult UI Expandable FAQ List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isExpanded = openId === faq.id

            return (
              <Expandable
                key={faq.id}
                expanded={isExpanded}
                onToggle={() => toggleFaq(faq.id)}
                transitionDuration={0.35}
                easeType="easeInOut"
              >
                <ExpandableCard className="rounded-2xl bg-[#101E35] border border-white/15 hover:border-[#00D2E0]/50 transition-colors shadow-xl overflow-hidden">
                  <ExpandableTrigger>
                    <div className="flex items-center justify-between p-6 sm:p-7 cursor-pointer gap-4 text-left">
                      <div className="flex items-center gap-4">
                        <span className="w-9 h-9 rounded-xl bg-[#14233D] border border-white/15 text-sm font-black text-[#00D2E0] flex items-center justify-center shrink-0">
                          0{index + 1}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`w-9 h-9 rounded-xl bg-[#14233D] border border-white/15 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-[#00D2E0]' : ''
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </ExpandableTrigger>

                  <ExpandableContent preset="fade">
                    <div className="px-6 pb-7 sm:px-7 pt-1 border-t border-white/10 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                      <p className="mt-3">{faq.answer}</p>
                    </div>
                  </ExpandableContent>
                </ExpandableCard>
              </Expandable>
            )
          })}
        </div>

        {/* Direct Help Callout Banner */}
        <div className="mt-12 p-7 rounded-2xl bg-[#14233D] border border-white/15 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white">Have an emergency situation not covered above?</h4>
              <p className="text-sm text-slate-300 mt-0.5">
                Senior emergency dispatchers are on duty 24/7 to answer questions and dispatch crews immediately.
              </p>
            </div>
          </div>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="px-6 py-3.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white font-extrabold text-base rounded-xl shadow-xl shadow-red-900/40 transition shrink-0 flex items-center gap-2.5"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Call Live Dispatcher</span>
          </a>
        </div>
      </div>
    </section>
  )
}
