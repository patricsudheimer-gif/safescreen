'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Menu, X } from 'lucide-react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Safe<span className="text-brand-600">Screen</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#inhalt" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
              Inhalte
            </Link>
            <Link href="/#preise" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
              Preise
            </Link>
            <Link href="/guide" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
              Guide lesen
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
              Updates
            </Link>
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
              Anmelden
            </Link>
            <Link href="/register" className="btn-primary !py-2 !px-4 text-sm">
              Kostenlos testen
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <Link href="/#inhalt" className="block text-sm font-medium text-gray-600 py-2" onClick={() => setMobileOpen(false)}>
              Inhalte
            </Link>
            <Link href="/#preise" className="block text-sm font-medium text-gray-600 py-2" onClick={() => setMobileOpen(false)}>
              Preise
            </Link>
            <Link href="/guide" className="block text-sm font-medium text-gray-600 py-2" onClick={() => setMobileOpen(false)}>
              Guide lesen
            </Link>
            <Link href="/dashboard" className="block text-sm font-medium text-gray-600 py-2" onClick={() => setMobileOpen(false)}>
              Updates
            </Link>
            <div className="pt-3 border-t border-gray-100 flex gap-3">
              <Link href="/login" className="btn-secondary !py-2 flex-1 text-sm">Anmelden</Link>
              <Link href="/register" className="btn-primary !py-2 flex-1 text-sm">Registrieren</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
