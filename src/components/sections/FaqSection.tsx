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
    <section id="faq" className="relative py-24 bg-[#0B1528] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14233D] border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Emergency FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-cyan-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Essential information homeowners and property managers need during a sudden water intrusion emergency.
          </p>
        </div>

        {/* Accordion */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#101E35] border border-[#1E3352] shadow-2xl">
          <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-4">
            {siteConfig.faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-[#1E3352] rounded-xl px-5 py-1 bg-[#14233D]/60 hover:border-[#00E5FF]/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-white hover:text-[#00E5FF] text-sm sm:text-base py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-sm leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions banner */}
          <div className="mt-8 pt-6 border-t border-[#1E3352]/70 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0B1528] p-5 rounded-xl border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Have a specific emergency not listed?</h4>
                <p className="text-xs text-slate-400">Our dispatchers are on duty 24 hours a day, 365 days a year.</p>
              </div>
            </div>

            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="px-5 py-2.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 shadow-lg shadow-red-900/30 transition flex-shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Dispatcher</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
