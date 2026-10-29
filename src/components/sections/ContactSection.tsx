import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { Phone, MessageSquare, ShieldCheck, Clock, MapPin, Send } from 'lucide-react'
import { siteConfig } from '@/config/site'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  propertyAddress: z.string().min(5, 'Street address or zip code is required'),
  damageCategory: z.string().min(1, 'Please select water damage category'),
  details: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

export const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      damageCategory: 'emergency-water-extraction',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    // Marked TODO placeholder for live API / CRM / Webhook integration
    console.log('[TODO: Live Dispatch Request Submission]', data)
    await new Promise((resolve) => setTimeout(resolve, 800))
    toast.success('Emergency Dispatch Ticket Created!', {
      description: `Lead technician has been notified for ${data.propertyAddress}. Calling ${data.phone} now.`,
      duration: 60000,
    })
    reset()
  }

  return (
    <section id="contact" className="relative py-24 bg-[#0B1528] border-t border-[#1E3352] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Phone & Rapid Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14233D] border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span>Immediate Disaster Response</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Request Priority{' '}
                <span className="bg-gradient-to-r from-[#FF2A2A] to-red-400 bg-clip-text text-transparent">
                  Emergency Dispatch
                </span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Water damage worsens by the hour. Submit your details below for an instant callback under 90 seconds, or call our direct emergency dispatch line immediately.
              </p>
            </div>

            {/* Direct Calling Hotline Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#14233D] to-[#101E35] border-2 border-red-500/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold text-red-400 tracking-wider">
                  24/7/365 Direct Dispatch
                </span>
                <span className="text-[10px] text-slate-400 bg-[#0B1528] px-2 py-0.5 rounded">
                  Zero Hold Time
                </span>
              </div>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="group flex items-center justify-between py-3.5 px-5 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl font-black text-lg sm:text-xl transition shadow-lg shadow-red-900/40"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 animate-bounce" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
                <span className="text-xs uppercase font-bold tracking-wider text-red-100 group-hover:translate-x-1 transition-transform">
                  Call &rarr;
                </span>
              </a>

              {/* WhatsApp direct chat option */}
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#14233D] hover:bg-[#1E3352] text-emerald-400 border border-emerald-500/40 rounded-xl font-bold text-xs uppercase tracking-wider transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp: {siteConfig.contact.whatsapp}</span>
              </a>
            </div>

            {/* Response Guarantees */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>45-Minute Maximum On-Site Arrival Window</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>Direct Insurance Claim Filing & $0 Upfront Options</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>Local Certified Restoration Crews Across All Service Hubs</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#101E35] border border-[#1E3352] shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Emergency Callback & Estimate
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your location and phone number. Our dispatch team contacts you immediately to confirm crew arrival.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 bg-[#14233D] border border-[#1E3352] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number * (For Instant Callback)
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 bg-[#14233D] border border-[#1E3352] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Street Address or Zip Code *
                    </label>
                    <input
                      {...register('propertyAddress')}
                      placeholder="e.g. 142 Riverdale Ave"
                      className="w-full px-4 py-3 bg-[#14233D] border border-[#1E3352] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition"
                    />
                    {errors.propertyAddress && (
                      <p className="text-xs text-red-400 mt-1">{errors.propertyAddress.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Water Damage Type *
                    </label>
                    <select
                      {...register('damageCategory')}
                      className="w-full px-4 py-3 bg-[#14233D] border border-[#1E3352] rounded-xl text-sm text-white focus:outline-none focus:border-[#00E5FF] transition"
                    >
                      {siteConfig.services.map((s) => (
                        <option key={s.id} value={s.id} className="bg-[#101E35]">
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-3 bg-[#14233D] border border-[#1E3352] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Situation Details (Optional)
                  </label>
                  <textarea
                    {...register('details')}
                    rows={3}
                    placeholder="e.g. Basement flooded with 3 inches of water from burst hot water heater..."
                    className="w-full px-4 py-3 bg-[#14233D] border border-[#1E3352] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] hover:opacity-95 text-[#0B1528] font-extrabold rounded-xl shadow-xl shadow-cyan-500/20 text-base transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin inline-block h-5 w-5 border-2 border-[#0B1528] border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Emergency Dispatch Request</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Your privacy is 100% protected. Information is used strictly for emergency dispatch and insurance filing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
