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
    // Marked TODO placeholder for live backend submission / CRM webhook
    console.log('[TODO: Submit emergency lead]', data)
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
        <Drawer.Content className="bg-[#101E35] border-t border-[#1E3352] flex flex-col rounded-t-[20px] max-h-[92vh] fixed bottom-0 left-0 right-0 z-50 outline-none text-slate-100">
          {/* Grab Bar */}
          <div className="p-4 bg-[#0B1528] rounded-t-[20px] flex-1 flex flex-col max-w-lg mx-auto w-full">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-slate-600 mb-4" />

            <div className="flex items-start justify-between mb-3">
              <div>
                <Drawer.Title className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                  </span>
                  Emergency Rapid Quote
                </Drawer.Title>
                <Drawer.Description className="text-xs text-slate-400 mt-0.5">
                  Priority dispatch crew dispatched within 45 minutes
                </Drawer.Description>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Direct Urgent Callout */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#FF2A2A] hover:bg-[#D50000] text-white font-bold rounded-xl shadow-lg shadow-red-900/30 transition text-sm mb-4"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              Immediate Emergency? Call {siteConfig.contact.phone}
            </a>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5 overflow-y-auto pr-1">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  placeholder="e.g. John Miller"
                  className="w-full px-3.5 py-2.5 bg-[#14233D] border border-[#1E3352] rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-[#14233D] border border-[#1E3352] rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Zip Code *
                  </label>
                  <input
                    {...register('zipCode')}
                    placeholder="e.g. 90210"
                    className="w-full px-3.5 py-2.5 bg-[#14233D] border border-[#1E3352] rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition"
                  />
                  {errors.zipCode && (
                    <p className="text-xs text-red-400 mt-1">{errors.zipCode.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Water Damage Type *
                </label>
                <select
                  {...register('serviceType')}
                  className="w-full px-3.5 py-2.5 bg-[#14233D] border border-[#1E3352] rounded-lg text-sm text-white focus:outline-none focus:border-[#00E5FF] transition"
                >
                  {siteConfig.services.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#101E35]">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  How Fast Do You Need Help?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 'immediate', label: 'NOW (<45m)', color: 'border-red-500/60 text-red-400' },
                    { val: 'today', label: 'Today', color: 'border-amber-500/60 text-amber-300' },
                    { val: 'scheduled', label: 'Scheduled', color: 'border-slate-600 text-slate-300' },
                  ].map((item) => (
                    <label
                      key={item.val}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg border bg-[#14233D] text-xs font-semibold cursor-pointer text-center hover:border-[#00E5FF] transition ${item.color}`}
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
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] hover:opacity-95 text-[#0B1528] font-bold rounded-xl shadow-lg shadow-cyan-500/20 text-sm transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-spin inline-block h-4 w-4 border-2 border-[#0B1528] border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4" />
                      Request Rapid 45-Min Dispatch Callback
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1 pb-4">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
                  Direct Insurance Billing
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
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
