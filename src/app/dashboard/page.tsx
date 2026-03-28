import { Bell, AlertTriangle, Shield, Smartphone, Brain, BookOpen, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Beispiel-Updates (später aus der Datenbank)
const updates = [
  {
    id: '1',
    title: 'WhatsApp: Elternverwaltete Konten für 10-12-Jährige',
    excerpt: 'Meta hat am 11.03.2026 elternverwaltete WhatsApp-Konten eingeführt. So richten Sie es ein.',
    category: 'plattform',
    priority: 'dringend',
    date: '11.03.2026',
  },
  {
    id: '2',
    title: 'Deepfake-Gesetzentwurf: Erstellung wird strafbar',
    excerpt: 'Bundesjustizministerin Hubig hat einen erweiterten Gesetzentwurf vorgestellt.',
    category: 'gesetz',
    priority: 'wichtig',
    date: '23.03.2026',
  },
  {
    id: '3',
    title: 'Discord: Teen-by-Default aktiviert',
    excerpt: 'Discord hat automatische Sicherheitseinstellungen für alle Nutzer ab 13 Jahren eingeführt.',
    category: 'plattform',
    priority: 'wichtig',
    date: '15.03.2026',
  },
  {
    id: '4',
    title: 'Warnung: Blackout Challenge weiterhin aktiv',
    excerpt: 'Die Blackout Challenge hat zu weiteren Todesfällen bei Kindern geführt. So erkennen Sie Warnsignale.',
    category: 'trend',
    priority: 'dringend',
    date: '08.03.2026',
  },
  {
    id: '5',
    title: 'Instagram: Eltern-Warnungen bei Suizid-Suchen',
    excerpt: 'Seit Februar 2026 erhalten Eltern Benachrichtigungen, wenn Teenager wiederholt nach Suizid-Themen suchen.',
    category: 'plattform',
    priority: 'wichtig',
    date: '01.03.2026',
  },
  {
    id: '6',
    title: 'Google Family Link: School Time und neues Design',
    excerpt: 'Family Link wurde komplett überarbeitet mit neuer School-Time-Funktion.',
    category: 'einstellung',
    priority: 'normal',
    date: '20.02.2026',
  },
]

const categoryConfig: Record<string, { icon: typeof Bell; color: string; bg: string; label: string }> = {
  plattform: { icon: Smartphone, color: 'text-brand-600', bg: 'bg-brand-50', label: 'Plattform' },
  gesetz: { icon: Shield, color: 'text-purple-600', bg: 'bg-purple-50', label: 'Gesetz' },
  trend: { icon: AlertTriangle, color: 'text-danger-600', bg: 'bg-danger-50', label: 'Trend' },
  einstellung: { icon: BookOpen, color: 'text-safe-600', bg: 'bg-safe-50', label: 'Einstellung' },
  ki: { icon: Brain, color: 'text-accent-600', bg: 'bg-accent-50', label: 'KI' },
}

const priorityConfig: Record<string, { color: string; label: string }> = {
  dringend: { color: 'bg-danger-500', label: 'Dringend' },
  wichtig: { color: 'bg-accent-500', label: 'Wichtig' },
  normal: { color: 'bg-gray-400', label: 'Info' },
}

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto section-padding">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Update-Feed</h1>
        <p className="text-gray-600 mt-2">
          Aktuelle Warnungen und Änderungen, die Sie als Eltern kennen sollten.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="px-4 py-2 rounded-full text-sm font-medium bg-brand-600 text-white">
          Alle
        </button>
        {Object.entries(categoryConfig).map(([key, config]) => (
          <button
            key={key}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            {config.label}
          </button>
        ))}
      </div>

      {/* Updates */}
      <div className="space-y-4">
        {updates.map((update) => {
          const cat = categoryConfig[update.category] || categoryConfig.plattform
          const prio = priorityConfig[update.priority] || priorityConfig.normal
          const Icon = cat.icon

          return (
            <article key={update.id} className="card hover:shadow-md transition-all cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className={`${cat.bg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`h-5 w-5 ${cat.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`${prio.color} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                      {prio.label}
                    </span>
                    <span className="text-xs text-gray-400">{update.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{update.excerpt}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-3" />
              </div>
            </article>
          )
        })}
      </div>

      {/* CTA für nicht eingeloggte Nutzer */}
      <div className="mt-8 card bg-brand-50 border-brand-200 text-center">
        <Bell className="h-8 w-8 text-brand-600 mx-auto mb-3" />
        <h3 className="font-bold text-gray-900 mb-2">Updates direkt per E-Mail erhalten</h3>
        <p className="text-gray-600 mb-4">
          Werden Sie sofort informiert, wenn neue Gefahren für Ihre Kinder auftauchen.
        </p>
        <Link href="/#preise" className="btn-primary">
          Jetzt Update-Abo starten
        </Link>
      </div>
    </div>
  )
}
