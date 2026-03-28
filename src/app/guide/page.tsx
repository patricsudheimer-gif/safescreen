import Link from 'next/link'
import { BookOpen, Lock, ChevronRight, Download } from 'lucide-react'

const chapters = [
  { num: 1, title: 'Grundlagen: Kinder, Jugend und Medien', slug: 'grundlagen', free: true },
  { num: 2, title: 'Familien-Regeln & Mediennutzungsvertrag', slug: 'familien-regeln', free: true },
  { num: 3, title: 'Altersstufe 6-9 Jahre', slug: 'alter-6-9', free: false },
  { num: 4, title: 'Altersstufe 10-12 Jahre', slug: 'alter-10-12', free: false },
  { num: 5, title: 'Altersstufe 13-15 Jahre', slug: 'alter-13-15', free: false },
  { num: 6, title: 'Altersstufe 16-17 Jahre', slug: 'alter-16-17', free: false },
  { num: 7, title: 'Technischer Teil: Geräte sicher einstellen', slug: 'geraete', free: false },
  { num: 8, title: 'Social Media & Gaming-Plattformen', slug: 'plattformen', free: false },
  { num: 9, title: 'Konflikte & Krisen: Was tun, wenn...', slug: 'krisen', free: false },
  { num: 10, title: 'Bausteine & Vorlagen', slug: 'vorlagen', free: false },
  { num: 11, title: 'KI & digitale Helfer', slug: 'ki', free: false },
  { num: 12, title: 'Aktualisierung und Ausblick', slug: 'aktualisierung', free: false },
]

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto section-padding">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Guide lesen</h1>
          <p className="text-gray-600 mt-2">
            Wählen Sie ein Kapitel. Die ersten zwei Kapitel sind kostenlos.
          </p>
        </div>
        <a href="/api/download" className="btn-secondary gap-2 hidden sm:flex">
          <Download className="h-4 w-4" />
          PDF herunterladen
        </a>
      </div>

      <div className="space-y-3">
        {chapters.map((ch) => (
          <Link
            key={ch.slug}
            href={ch.free ? `/guide/${ch.slug}` : '/register'}
            className={`card flex items-center gap-4 hover:shadow-md transition-all group ${
              ch.free ? 'cursor-pointer' : 'opacity-80'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
              ch.free ? 'bg-brand-100 text-brand-700' : 'bg-gray-100 text-gray-400'
            }`}>
              {ch.free ? (
                <BookOpen className="h-5 w-5" />
              ) : (
                <Lock className="h-5 w-5" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-400">Kapitel {ch.num}</span>
                {ch.free && (
                  <span className="text-xs font-bold text-safe-600 bg-safe-50 px-2 py-0.5 rounded-full">
                    KOSTENLOS
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 truncate">{ch.title}</h3>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-brand-500 transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>

      <div className="mt-8 card bg-brand-50 border-brand-200 text-center">
        <h3 className="font-bold text-gray-900 mb-2">Alle Kapitel freischalten</h3>
        <p className="text-gray-600 mb-4">
          Erhalten Sie vollen Zugang zu allen 12 Kapiteln, Checklisten, Vorlagen und dem PDF-Download.
        </p>
        <Link href="/#preise" className="btn-primary">
          Ab 29,99 &euro; freischalten
        </Link>
      </div>
    </div>
  )
}
