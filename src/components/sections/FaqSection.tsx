import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle, PhoneCall, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="relative py-24 bg-[#0B1528] overflow-hidden border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-bold">
            <HelpCircle className="w-4 h-4 text-[#00D2E0]" />
            <span>Emergency FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Essential information homeowners and property managers need during a sudden water intrusion emergency.
          </p>
        </div>

        {/* Accordion */}
        <div className="p-7 sm:p-10 rounded-2xl bg-[#101E35] border border-white/15 shadow-2xl">
          <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-4">
            {siteConfig.faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-white/10 rounded-xl px-6 py-1.5 bg-[#14233D]/70 hover:border-[#00D2E0]/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-white hover:text-[#00D2E0] text-base sm:text-lg py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B1528] p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Have a specific emergency not listed?</h4>
                <p className="text-sm text-slate-300">Our senior dispatchers are on duty 24 hours a day, 365 days a year.</p>
              </div>
            </div>

            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="px-6 py-3 bg-[#FF2A2A] hover:bg-[#D50000] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-xl shadow-red-900/35 transition shrink-0"
            >
              <PhoneCall className="w-4 h-4 fill-current" />
              <span>Call Dispatcher</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
