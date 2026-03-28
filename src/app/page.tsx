import { Shield, BookOpen, Bell, Smartphone, Gamepad2, Brain, AlertTriangle, CheckCircle2, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { PricingButton } from '@/components/PricingButtons'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm">
              <span className="bg-accent-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">NEU</span>
              <span>Aktualisiert März 2026 mit KI- und Gaming-Ratgeber</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Schützen Sie Ihre Kinder
              <span className="text-accent-400"> im digitalen Raum</span>
            </h1>

            <p className="text-xl text-brand-100 mb-8 leading-relaxed">
              Der umfassende Eltern-Guide für Smartphone, Social Media, Gaming und KI.
              Mit praktischen Anleitungen, Checklisten und laufenden Updates zu neuen Gefahren.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#preise" className="btn-accent text-lg px-8 py-4">
                Jetzt sichern ab 29,99 &euro;
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#inhalt" className="btn-secondary !bg-white/10 !text-white !border-white/20 hover:!bg-white/20">
                Inhalte ansehen
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-brand-200">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-safe-400" />
                101+ Seiten Praxis-Wissen
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-safe-400" />
                Schritt-für-Schritt-Anleitungen
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-safe-400" />
                Regelmäßige Updates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-brand-600" />
              DSGVO-konform
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent-500" />
              Von Experten geprüft
            </span>
            <span className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-brand-600" />
              Aktuell: März 2026
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand-600" />
              Online lesen + PDF-Download
            </span>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Die digitale Welt Ihrer Kinder verändert sich ständig
            </h2>
            <p className="text-lg text-gray-600">
              Neue Apps, neue Gefahren, neue Gesetze. Als Eltern ist es fast unmöglich, auf dem Laufenden zu bleiben.
              SafeScreen hilft Ihnen dabei.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                color: 'text-danger-500',
                bg: 'bg-danger-50',
                title: 'Aktuelle Gefahren',
                items: [
                  'Sextortion: 1 von 5 Teenagern betroffen',
                  'KI-Deepfakes: 26.362% Anstieg bei CSAM',
                  'Blackout Challenge: Todesfälle bei Kindern',
                  'KI-Chatbots erzeugen Abhängigkeit',
                ],
              },
              {
                icon: Smartphone,
                color: 'text-brand-600',
                bg: 'bg-brand-50',
                title: 'Plattform-Änderungen',
                items: [
                  'WhatsApp: Elternkonten für 10-12-Jährige',
                  'Instagram: Automatische Teen Accounts',
                  'Discord: Teen-by-Default seit März 2026',
                  'Roblox: USK-Hochstufung auf 16+',
                ],
              },
              {
                icon: BookOpen,
                color: 'text-safe-600',
                bg: 'bg-safe-50',
                title: 'Neue Gesetze',
                items: [
                  'DDG ersetzt NetzDG seit 2024',
                  'JMStV-Änderung: OS-Jugendschutz',
                  'EU AI Act: Stufenweise ab 2025',
                  'Deepfake-Gesetz: Erstellung strafbar',
                ],
              },
            ].map((card, i) => (
              <div key={i} className="card hover:shadow-md transition-shadow">
                <div className={`${card.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <card.icon className={`h-6 w-6 ${card.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="h-4 w-4 mt-1 text-safe-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Content Overview */}
      <section id="inhalt" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Was im Guide steht
            </h2>
            <p className="text-lg text-gray-600">
              12 Kapitel voller praktischer Tipps, Schritt-für-Schritt-Anleitungen und Checklisten.
              Geschrieben für Eltern, nicht für Techniker.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: '1. Grundlagen', desc: 'Warum Smartphones wichtig sind, Chancen und Risiken, rechtliche Grundlagen' },
              { icon: Shield, title: '2. Familien-Regeln', desc: 'Mediennutzungsvertrag, Regeln nach Alter, Checklisten' },
              { icon: Smartphone, title: '3-6. Altersstufen', desc: 'Konkrete Empfehlungen für 6-9, 10-12, 13-15 und 16-17 Jahre' },
              { icon: Shield, title: '7. Geräte einrichten', desc: 'Apple, Android, Konsolen: Schritt-für-Schritt sicher konfigurieren' },
              { icon: Gamepad2, title: '8. Plattformen', desc: 'WhatsApp, Instagram, TikTok, Snapchat, YouTube, Discord, Roblox, Fortnite, Minecraft, Twitch' },
              { icon: AlertTriangle, title: '9. Krisen', desc: 'Fremde schreiben an, Cybermobbing, Nacktbilder, Sextortion, Sucht' },
              { icon: BookOpen, title: '10. Vorlagen', desc: 'Mediennutzungsvertrag, Notfallplan, Checklisten zum Ausdrucken' },
              { icon: Brain, title: '11. KI-Ratgeber', desc: 'Deepfakes, Chatbots, Voice Cloning, KI-Tools für Kinder, KI in Schulen' },
              { icon: Bell, title: '12. Updates', desc: 'Wie Sie auf dem Laufenden bleiben und neue Trends erkennen' },
            ].map((ch, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-brand-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ch.icon className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{ch.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preise" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wählen Sie Ihren Plan
            </h2>
            <p className="text-lg text-gray-600">
              Einmalkauf oder Abo mit laufenden Updates. Sie haben die Wahl.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Guide Einmalkauf */}
            <div className="card border-2 border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Guide</h3>
                <p className="text-sm text-gray-500 mt-1">Einmalkauf</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">29,99&nbsp;&euro;</span>
                <span className="text-gray-500 ml-1">einmalig</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Kompletter Guide (100+ Seiten)',
                  'Online lesen + PDF-Download',
                  '1 Jahr Updates inklusive',
                  'Alle Checklisten und Vorlagen',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-safe-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <PricingButton productKey="guide" className="btn-secondary w-full">Guide kaufen</PricingButton>
            </div>

            {/* Kombi (empfohlen) */}
            <div className="card border-2 border-brand-500 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                EMPFOHLEN
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Kombi-Paket</h3>
                <p className="text-sm text-gray-500 mt-1">Guide + 1 Jahr Updates</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-brand-700">39,99&nbsp;&euro;</span>
                <span className="text-gray-500 ml-1">einmalig</span>
                <p className="text-sm text-safe-600 font-medium mt-1">Sie sparen 10 &euro;</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Alles aus dem Guide-Paket',
                  'Sofortige Warn-Updates bei neuen Gefahren',
                  'Neue Plattform-Anleitungen',
                  'Gesetzesänderungen einfach erklärt',
                  'KI-Trend-Alerts',
                  'Prioritäts-Support per E-Mail',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <PricingButton productKey="kombi" className="btn-primary w-full">Kombi-Paket sichern</PricingButton>
            </div>

            {/* Jahres-Abo */}
            <div className="card border-2 border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Update-Abo</h3>
                <p className="text-sm text-gray-500 mt-1">Für bestehende Guide-Besitzer</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">19,99&nbsp;&euro;</span>
                <span className="text-gray-500 ml-1">/Jahr</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Laufende Plattform-Updates',
                  'Warn-Alerts bei neuen Gefahren',
                  'Neue Kapitel und Anleitungen',
                  'Gesetzesänderungen',
                  'Jederzeit kündbar',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-safe-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <PricingButton productKey="abo" className="btn-secondary w-full">Update-Abo starten</PricingButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Häufige Fragen
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Für wen ist der Guide gedacht?',
                a: 'Für alle Eltern in Deutschland und Österreich mit Kindern zwischen 6 und 17 Jahren. Der Guide ist bewusst verständlich geschrieben, ohne Fachbegriffe.',
              },
              {
                q: 'Wie bekomme ich die Updates?',
                a: 'Updates erscheinen direkt in Ihrem Online-Zugang. Bei wichtigen Warnungen (z.B. gefährliche Trends) erhalten Sie zusätzlich eine E-Mail-Benachrichtigung.',
              },
              {
                q: 'Kann ich den Guide auch ausdrucken?',
                a: 'Ja! Im PDF-Download ist eine druckoptimierte Version enthalten. Perfekt zum Nachlesen oder zum Teilen mit Großeltern.',
              },
              {
                q: 'Was passiert nach dem ersten Jahr?',
                a: 'Beim Einmalkauf (29,99 Euro) behalten Sie den Guide dauerhaft. Updates enden nach einem Jahr. Sie können das Update-Abo für 19,99 Euro pro Jahr verlängern.',
              },
              {
                q: 'Gibt es eine Geld-zurück-Garantie?',
                a: 'Ja, 14 Tage Widerrufsrecht gemäß EU-Verbraucherrecht. Wenn der Guide nicht Ihren Erwartungen entspricht, erstatten wir den vollen Kaufpreis.',
              },
            ].map((faq, i) => (
              <details key={i} className="group card cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  {faq.q}
                  <ArrowRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ihr Kind ist heute online. Sind Sie vorbereitet?
          </h2>
          <p className="text-xl text-brand-200 mb-8">
            Schützen Sie Ihre Familie mit dem aktuellsten Eltern-Guide für die digitale Welt.
          </p>
          <Link href="#preise" className="btn-accent text-lg px-10 py-4">
            Jetzt starten
          </Link>
        </div>
      </section>
    </>
  )
}
