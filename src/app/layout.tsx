import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'SafeScreen | Smartphone & Social Media Guide für Eltern',
  description: 'Der umfassende Eltern-Guide für Kinderschutz im digitalen Raum. Mit Gaming- und KI-Ratgeber. Immer aktuell durch regelmäßige Updates.',
  keywords: 'Kinderschutz, Social Media, Smartphone, Eltern, Guide, Jugendschutz, TikTok, Instagram, WhatsApp, KI',
  openGraph: {
    title: 'SafeScreen | Smartphone & Social Media Guide für Eltern',
    description: 'Schützen Sie Ihre Kinder im digitalen Raum. Der Guide mit laufenden Updates zu Plattformen, Gesetzen und Trends.',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
