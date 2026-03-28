import { PrismaClient } from '@prisma/client'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const prisma = new PrismaClient()

const CHAPTERS_DIR = join(__dirname, '..', 'content', 'chapters')

// Kapitel-Definitionen passend zur bestehenden App-Struktur
const chapters = [
  { number: 1, title: 'Grundlagen: Kinder, Jugend und Medien', slug: 'grundlagen', sortOrder: 1 },
  { number: 2, title: 'Familien-Regeln & Mediennutzungsvertrag', slug: 'familien-regeln', sortOrder: 2 },
  { number: 3, title: 'Altersstufe 6–9 Jahre', slug: 'alter-6-9', sortOrder: 3 },
  { number: 4, title: 'Altersstufe 10–12 Jahre', slug: 'alter-10-12', sortOrder: 4 },
  { number: 5, title: 'Altersstufe 13–15 Jahre', slug: 'alter-13-15', sortOrder: 5 },
  { number: 6, title: 'Altersstufe 16–17 Jahre', slug: 'alter-16-17', sortOrder: 6 },
  { number: 7, title: 'Technischer Teil: Geräte sicher einstellen', slug: 'geraete', sortOrder: 7 },
  { number: 8, title: 'Social Media & Gaming-Plattformen', slug: 'plattformen', sortOrder: 8 },
  { number: 9, title: 'Konflikte & Krisen: Was tun, wenn...', slug: 'krisen', sortOrder: 9 },
  { number: 10, title: 'Bausteine & Vorlagen', slug: 'vorlagen', sortOrder: 10 },
  { number: 11, title: 'KI & digitale Helfer', slug: 'ki', sortOrder: 11 },
  { number: 12, title: 'Aktualisierung und Ausblick', slug: 'aktualisierung', sortOrder: 12 },
  // Zusätzliche Abschnitte
  { number: 0, title: 'Vorwort', slug: 'vorwort', sortOrder: 0 },
  { number: 13, title: 'Schlusswort', slug: 'schlusswort', sortOrder: 13 },
  { number: 14, title: 'Anhang: Wichtige Kontakte und Links', slug: 'anhang', sortOrder: 14 },
  { number: 15, title: 'Rechtlicher Kompass 2026', slug: 'rechtlicher-kompass', sortOrder: 15 },
  { number: 16, title: 'Impressum und Haftungsausschluss', slug: 'impressum', sortOrder: 16 },
]

function loadMarkdown(slug: string): string {
  const path = join(CHAPTERS_DIR, `${slug}.md`)
  if (!existsSync(path)) {
    console.warn(`  ⚠ Datei nicht gefunden: ${path}`)
    return ''
  }
  return readFileSync(path, 'utf-8')
}

async function main() {
  console.log('Seed: Guide-Kapitel importieren...\n')

  for (const ch of chapters) {
    const content = loadMarkdown(ch.slug)
    if (!content) continue

    await prisma.guideChapter.upsert({
      where: { slug: ch.slug },
      update: {
        title: ch.title,
        number: ch.number,
        content,
        sortOrder: ch.sortOrder,
      },
      create: {
        title: ch.title,
        number: ch.number,
        slug: ch.slug,
        content,
        sortOrder: ch.sortOrder,
      },
    })

    console.log(`  ✓ Kapitel ${ch.number}: ${ch.title} (${content.length} Zeichen)`)
  }

  const count = await prisma.guideChapter.count()
  console.log(`\n${count} Kapitel in der Datenbank.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
