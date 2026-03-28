import Link from 'next/link'
import { Shield } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Safe<span className="text-brand-400">Screen</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Der Eltern-Guide für Kinderschutz im digitalen Raum.
              Immer aktuell. Immer verständlich.
            </p>
          </div>

          {/* Guide */}
          <div>
            <h3 className="text-white font-semibold mb-4">Guide</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#inhalt" className="hover:text-white transition-colors">Inhalte</Link></li>
              <li><Link href="/#preise" className="hover:text-white transition-colors">Preise</Link></li>
              <li><Link href="/guide" className="hover:text-white transition-colors">Online lesen</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Updates</Link></li>
            </ul>
          </div>

          {/* Hilfe */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hilfe</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:116111" className="hover:text-white transition-colors">Nummer gegen Kummer: 116 111</a></li>
              <li><a href="https://www.jugend.support" target="_blank" className="hover:text-white transition-colors">jugend.support</a></li>
              <li><a href="https://www.klicksafe.de" target="_blank" className="hover:text-white transition-colors">klicksafe.de</a></li>
              <li><a href="https://www.schau-hin.info" target="_blank" className="hover:text-white transition-colors">schau-hin.info</a></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/impressum#datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/impressum#agb" className="hover:text-white transition-colors">AGB</Link></li>
              <li><Link href="/impressum#widerruf" className="hover:text-white transition-colors">Widerrufsbelehrung</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SafeScreen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
