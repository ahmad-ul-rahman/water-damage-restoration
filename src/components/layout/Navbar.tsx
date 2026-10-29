import React, { useState, useEffect } from 'react'
import { Phone, Droplets, Menu, X, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface NavbarProps {
  onOpenQuote: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Insurance Billing', href: '#insurance' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B1528]/95 backdrop-blur-md shadow-xl shadow-black/30 border-b border-[#1E3352]/70 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#007299] p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0B1528] rounded-[10px] flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-[#00E5FF]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                  AquaGuard
                  <span className="text-[#00E5FF]">Restoration</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  24/7 Emergency Dispatch
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-[#00E5FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Call CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-3.5 py-2 text-xs uppercase font-bold tracking-wider text-[#00E5FF] border border-[#00E5FF]/40 hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 rounded-lg transition"
              >
                Get a Quote
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="relative group flex items-center gap-2 px-4 py-2 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-lg font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                </span>
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call 24/7: {siteConfig.contact.phone}</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="p-2 bg-[#FF2A2A] text-white rounded-lg shadow-md"
                aria-label="Call emergency dispatch"
              >
                <Phone className="w-4 h-4 fill-current" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#14233D] text-slate-300 hover:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0B1528]/98 backdrop-blur-xl border-b border-[#1E3352] px-4 pt-4 pb-6 mt-2 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#1E3352]/50 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Crews On Duty
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
                45-Min ETA Guarantee
              </span>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-[#00E5FF] hover:bg-[#14233D] transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenQuote()
                }}
                className="w-full py-2.5 text-center text-xs uppercase font-bold tracking-wider text-[#00E5FF] border border-[#00E5FF]/50 rounded-lg hover:bg-[#00E5FF]/10 transition"
              >
                Request Free Emergency Estimate
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full py-3 bg-[#FF2A2A] hover:bg-[#D50000] text-white font-bold rounded-lg text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-red-900/40"
              >
                <Phone className="w-4 h-4" />
                Call 24/7 Dispatch ({siteConfig.contact.phone})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
