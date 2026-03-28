import Link from 'next/link'
import { ArrowLeft, Lock, ChevronLeft, ChevronRight } from 'lucide-react'

// Kapitel-Daten (später aus DB)
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

// Beispiel-Inhalte für die kostenlosen Kapitel
const chapterContent: Record<string, string> = {
  grundlagen: `
## Warum digitale Medienkompetenz heute unverzichtbar ist

Kinder wachsen in einer digitalen Welt auf. Laut der KIM-Studie 2024 besitzen bereits 47% der 6- bis 13-Jährigen ein eigenes Smartphone. Bei den 12- bis 13-Jährigen sind es sogar 82%.

Das bedeutet nicht, dass Eltern machtlos sind. Im Gegenteil: Studien zeigen, dass Kinder, deren Eltern sich aktiv mit ihrer Mediennutzung beschäftigen, deutlich seltener negative Erfahrungen im Internet machen.

### Was Sie in diesem Guide lernen

Dieser Guide begleitet Sie durch alle Altersstufen und gibt Ihnen konkrete, umsetzbare Empfehlungen für jede Lebensphase Ihres Kindes. Sie erfahren:

- Welche Geräte-Einstellungen Sie vornehmen sollten
- Wie Sie altersgerechte Regeln aufstellen
- Was bei Konflikten und Krisen zu tun ist
- Welche Plattformen aktuell relevant sind und was Sie darüber wissen müssen
- Wie KI-Tools die digitale Kindheit verändern

### Das richtige Alter für das erste Smartphone

Die Frage "Wann ist mein Kind bereit für ein Smartphone?" lässt sich nicht pauschal beantworten. Entscheidend sind die individuelle Reife des Kindes und die Bereitschaft der Eltern, den Einstieg aktiv zu begleiten.

**Orientierungshilfe nach Alter:**

**6-9 Jahre:** Kein eigenes Smartphone nötig. Ein Familien-Tablet mit Kindersicherung reicht aus. Für den Schulweg gibt es GPS-Uhren oder einfache Handys ohne Internetzugang.

**10-12 Jahre:** Einstieg mit eingeschränktem Smartphone möglich. Wichtig: Kindersicherung einrichten, App-Installationen genehmigungspflichtig machen, Bildschirmzeit begrenzen.

**13-15 Jahre:** Die meisten Kinder haben in diesem Alter ein Smartphone. Schwerpunkt: Social-Media-Regeln, Privatsphäre-Einstellungen, offene Gespräche über Online-Risiken.

**16-17 Jahre:** Schrittweise mehr Eigenverantwortung. Eltern bleiben als Ansprechpartner wichtig, auch wenn die technische Kontrolle nachlässt.
  `,
  'familien-regeln': `
## Der Familien-Mediennutzungsvertrag

Ein Mediennutzungsvertrag ist kein Zeichen von Misstrauen, sondern ein gemeinsames Werkzeug. Wenn Regeln zusammen erarbeitet werden, halten sich Kinder viel eher daran.

### Warum ein Vertrag besser ist als mündliche Regeln

Mündliche Absprachen werden schnell vergessen oder unterschiedlich erinnert. Ein schriftlicher Vertrag schafft Klarheit für beide Seiten und vermeidet Streit. Er macht Regeln verbindlich, ohne autoritär zu wirken.

### Was in den Vertrag gehören sollte

**Bildschirmzeiten:** Legen Sie gemeinsam fest, wie viel Zeit Ihr Kind täglich mit digitalen Medien verbringen darf. Empfehlungen nach Alter:
- 6-9 Jahre: max. 30-45 Minuten täglich
- 10-12 Jahre: max. 60 Minuten täglich
- 13-15 Jahre: max. 90 Minuten täglich
- 16-17 Jahre: Individuelle Vereinbarung

**Gerätefreie Zeiten und Zonen:** Definieren Sie Zeiten und Orte ohne Bildschirm:
- Beim Essen (für alle Familienmitglieder!)
- Im Schlafzimmer ab einer bestimmten Uhrzeit
- Bei Hausaufgaben (wenn nicht für Recherche benötigt)
- Die erste Stunde nach dem Aufstehen

**App-Regeln:** Welche Apps darf Ihr Kind nutzen? Wer genehmigt neue Apps? Welche sind tabu?

**Konsequenzen:** Was passiert bei Regelverstößen? Wichtig: Konsequenzen sollten verhältnismäßig und vorhersehbar sein. "Eine Woche kein Handy" ist in den meisten Fällen übertrieben und kontraproduktiv.

### Vorlage zum Ausfüllen

Im Kapitel "Bausteine & Vorlagen" finden Sie einen druckfertigen Mediennutzungsvertrag, den Sie gemeinsam mit Ihrem Kind ausfüllen können. Er enthält alle wichtigen Punkte und lässt Platz für individuelle Vereinbarungen.

### Tipp: Eltern müssen mitmachen

Der Vertrag gilt idealerweise für die ganze Familie. Kinder akzeptieren Regeln viel leichter, wenn sie sehen, dass auch die Eltern sich daran halten. Das Smartphone hat also auch beim Abendessen nichts auf dem Tisch zu suchen.
  `,
}

export function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }))
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = chapters.find((ch) => ch.slug === params.slug)

  if (!chapter) {
    return (
      <div className="max-w-4xl mx-auto section-padding text-center">
        <h1 className="text-2xl font-bold text-gray-900">Kapitel nicht gefunden</h1>
        <Link href="/guide" className="text-brand-600 hover:text-brand-700 mt-4 inline-block">
          Zurück zur Übersicht
        </Link>
      </div>
    )
  }

  // Gesperrtes Kapitel
  if (!chapter.free) {
    return (
      <div className="max-w-4xl mx-auto section-padding">
        <Link href="/guide" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-600 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Übersicht
        </Link>

        <div className="card text-center py-16">
          <Lock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Kapitel {chapter.num}: {chapter.title}
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Dieses Kapitel ist Teil des vollständigen SafeScreen Guides.
            Schalten Sie alle 12 Kapitel frei, um den kompletten Guide zu lesen.
          </p>
          <Link href="/#preise" className="btn-primary">
            Ab 29,99 &euro; freischalten
          </Link>
        </div>
      </div>
    )
  }

  const content = chapterContent[chapter.slug] || ''
  const currentIndex = chapters.findIndex((ch) => ch.slug === params.slug)
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null

  return (
    <div className="max-w-4xl mx-auto section-padding">
      <Link href="/guide" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-600 mb-8">
        <ArrowLeft className="h-4 w-4" />
        Zurück zur Übersicht
      </Link>

      <article className="card">
        <div className="mb-6">
          <span className="text-sm font-medium text-brand-600">Kapitel {chapter.num}</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">{chapter.title}</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          {content.split('\n').map((line, i) => {
            const trimmed = line.trim()
            if (!trimmed) return <br key={i} />
            if (trimmed.startsWith('### '))
              return <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-4">{trimmed.slice(4)}</h3>
            if (trimmed.startsWith('## '))
              return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{trimmed.slice(3)}</h2>
            if (trimmed.startsWith('**') && trimmed.endsWith('**'))
              return <p key={i} className="font-bold text-gray-900 mt-4">{trimmed.slice(2, -2)}</p>
            if (trimmed.startsWith('- '))
              return <li key={i} className="ml-4 text-gray-700">{trimmed.slice(2)}</li>
            return <p key={i} className="text-gray-700 leading-relaxed">{trimmed}</p>
          })}
        </div>
      </article>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        {prevChapter ? (
          <Link
            href={prevChapter.free ? `/guide/${prevChapter.slug}` : '/guide'}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-600"
          >
            <ChevronLeft className="h-4 w-4" />
            Kapitel {prevChapter.num}
          </Link>
        ) : <div />}

        {nextChapter ? (
          nextChapter.free ? (
            <Link
              href={`/guide/${nextChapter.slug}`}
              className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
            >
              Kapitel {nextChapter.num}
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              href="/#preise"
              className="btn-primary !py-2 !px-4 text-sm"
            >
              Alle Kapitel freischalten
            </Link>
          )
        ) : null}
      </div>
    </div>
  )
}
