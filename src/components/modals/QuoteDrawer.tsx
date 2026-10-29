import React from 'react'
import { Drawer } from 'vaul'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { Phone, Clock, AlertTriangle, ShieldCheck, X } from 'lucide-react'
import { siteConfig } from '@/config/site'

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  serviceType: z.string().min(1, 'Please select a service'),
  zipCode: z.string().min(5, 'Valid 5-digit zip code required'),
  urgency: z.enum(['immediate', 'today', 'scheduled']),
})

type QuoteFormData = z.infer<typeof quoteSchema>

interface QuoteDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({ open, onOpenChange }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      serviceType: 'emergency-water-extraction',
      urgency: 'immediate',
    },
  })

  const onSubmit = async (data: QuoteFormData) => {
    console.log('[Submit emergency lead]', data)
    await new Promise((resolve) => setTimeout(resolve, 600))
    toast.success('Emergency Request Received!', {
      description: `A senior restoration dispatcher is calling you at ${data.phone} within 90 seconds.`,
      duration: 60000,
    })
    reset()
    onOpenChange(false)
  }

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity" />
        <Drawer.Content className="bg-[#101E35] border-t border-white/20 flex flex-col rounded-t-[24px] max-h-[92vh] fixed bottom-0 left-0 right-0 z-50 outline-none text-slate-100">
          {/* Grab Bar */}
          <div className="p-5 bg-[#0B1528] rounded-t-[24px] flex-1 flex flex-col max-w-lg mx-auto w-full">
            <div className="mx-auto w-14 h-1.5 shrink-0 rounded-full bg-slate-600 mb-4" />

            <div className="flex items-start justify-between mb-4">
              <div>
                <Drawer.Title className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                  </span>
                  Emergency Rapid Quote
                </Drawer.Title>
                <Drawer.Description className="text-sm text-slate-300 mt-1">
                  Certified master crew dispatched within 45 minutes
                </Drawer.Description>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Direct Urgent Callout */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-gradient-to-r from-[#00D2E0] to-[#0284C7] hover:brightness-110 text-[#0B1528] font-black rounded-xl shadow-xl shadow-cyan-950/60 transition text-base mb-4"
            >
              <Phone className="w-5 h-5 animate-bounce fill-current" />
              Immediate Emergency? Call {siteConfig.contact.phone}
            </a>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 overflow-y-auto pr-1">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  placeholder="e.g. John Miller"
                  className="w-full px-4 py-3 bg-[#14233D] border border-white/20 rounded-xl text-base text-white placeholder-slate-400 focus:outline-none focus:border-[#00D2E0] transition"
                />
                {errors.name && (
                  <p className="text-sm text-amber-400 mt-1 font-medium">{errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 bg-[#14233D] border border-white/20 rounded-xl text-base text-white placeholder-slate-400 focus:outline-none focus:border-[#00D2E0] transition"
                  />
                  {errors.phone && (
                    <p className="text-sm text-amber-400 mt-1 font-medium">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                    Zip Code *
                  </label>
                  <input
                    {...register('zipCode')}
                    placeholder="e.g. 90210"
                    className="w-full px-4 py-3 bg-[#14233D] border border-white/20 rounded-xl text-base text-white placeholder-slate-400 focus:outline-none focus:border-[#00D2E0] transition"
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-amber-400 mt-1 font-medium">{errors.zipCode.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                  Water Damage Type *
                </label>
                <select
                  {...register('serviceType')}
                  className="w-full px-4 py-3 bg-[#14233D] border border-white/20 rounded-xl text-base text-white focus:outline-none focus:border-[#00D2E0] transition"
                >
                  {siteConfig.services.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#101E35]">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                  How Fast Do You Need Help?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { val: 'immediate', label: 'NOW (<45m)', color: 'border-[#00D2E0] text-[#00D2E0] bg-[#00D2E0]/10' },
                    { val: 'today', label: 'Today', color: 'border-sky-500/80 text-sky-300 bg-sky-950/20' },
                    { val: 'scheduled', label: 'Scheduled', color: 'border-white/20 text-slate-200 bg-[#14233D]' },
                  ].map((item) => (
                    <label
                      key={item.val}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-sm font-bold cursor-pointer text-center hover:border-[#00D2E0] transition ${item.color}`}
                    >
                      <input
                        type="radio"
                        value={item.val}
                        {...register('urgency')}
                        className="sr-only"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-4 bg-gradient-to-r from-[#00D2E0] to-[#0284C7] hover:brightness-110 text-[#0B1528] font-black rounded-xl shadow-xl shadow-cyan-950/60 text-base transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-spin inline-block h-5 w-5 border-2 border-[#0B1528] border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <AlertTriangle className="w-5 h-5 text-[#0B1528]" />
                      Request Rapid 45-Min Dispatch Callback
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 pt-2 pb-4">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <ShieldCheck className="w-4 h-4 text-[#00D2E0]" />
                  Direct Insurance Billing
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                  <Clock className="w-4 h-4 text-[#00D2E0]" />
                  Avg Callback &lt; 90s
                </span>
              </div>
            </form>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
