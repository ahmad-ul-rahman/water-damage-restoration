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
    { name: 'Capabilities', href: '#protocols' },
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
            ? 'bg-[#0B1528]/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/10 py-3.5'
            : 'bg-[#0B1528]/80 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00D2E0] via-[#0284C7] to-[#1E3A8A] p-0.5 shadow-lg shadow-cyan-950/50 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0B1528] rounded-[10px] flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-[#00D2E0]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl sm:text-2xl tracking-tight text-white flex items-center gap-1.5">
                  AquaGuard
                  <span className="text-[#00D2E0]">Restoration</span>
                </span>
                <span className="text-sm font-semibold tracking-wide text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  24/7 Rapid Emergency Dispatch
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-2 lg:gap-3" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide text-slate-200 hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Call CTAs */}
            <div className="hidden md:flex items-center gap-3.5 shrink-0">
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-4 py-2.5 text-sm font-bold tracking-wide text-slate-100 bg-[#14233D] hover:bg-[#1E3352] border border-white/15 hover:border-[#00D2E0]/50 rounded-xl transition shadow-md cursor-pointer"
              >
                Get a Quote
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="relative group flex items-center gap-2.5 px-5 py-2.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white rounded-xl font-extrabold text-sm tracking-wide shadow-xl shadow-red-600/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                </span>
                <Phone className="w-4 h-4 fill-current" />
                <span>Call 24/7: {siteConfig.contact.phone}</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2.5">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-1.5 px-3 py-2 bg-[#FF2A2A] text-white rounded-xl text-sm font-bold shadow-md"
                aria-label="Call emergency dispatch"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span className="hidden sm:inline">Call 24/7</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#14233D] border border-white/10 text-slate-200 hover:text-white cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B1528]/98 backdrop-blur-2xl border-b border-white/15 px-6 pt-5 pb-7 mt-3 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-sm text-slate-300">
              <span className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Crews On Duty Right Now
              </span>
              <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                <Clock className="w-4 h-4 text-[#00D2E0]" />
                45-Min ETA
              </span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-slate-100 hover:text-white hover:bg-white/10 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenQuote()
                }}
                className="w-full py-3 text-center text-sm font-bold tracking-wide text-white bg-[#14233D] border border-white/20 rounded-xl hover:bg-[#1E3352] transition cursor-pointer"
              >
                Request Free Emergency Estimate
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full py-3.5 bg-[#FF2A2A] hover:bg-[#D50000] text-white font-extrabold rounded-xl text-base text-center flex items-center justify-center gap-2.5 shadow-xl shadow-red-900/40"
              >
                <Phone className="w-5 h-5 fill-current" />
                Call 24/7 Dispatch ({siteConfig.contact.phone})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
