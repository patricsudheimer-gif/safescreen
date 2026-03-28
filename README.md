# SafeScreen – Eltern-Guide für Kinderschutz im digitalen Raum

## Über das Projekt

SafeScreen ist eine Abo-Plattform für Eltern, die einen umfassenden Guide zum Schutz ihrer Kinder im Internet bietet. Die Plattform umfasst:

- **Online-Guide** mit 12 Kapiteln (2 kostenlos, Rest kostenpflichtig)
- **PDF-Download** des kompletten Guides
- **Update-Feed** mit aktuellen Warnungen zu Plattformen, Gesetzen, Trends
- **E-Mail-Benachrichtigungen** bei neuen Updates

## Tech-Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Datenbank:** SQLite via Prisma ORM
- **Auth:** NextAuth.js (Credentials Provider)
- **Zahlung:** Stripe + PayPal
- **Icons:** Lucide React

## Voraussetzungen

- Node.js 18+ installiert
- npm oder yarn

## Installation & Start

```bash
# 1. In den Projektordner wechseln
cd safescreen

# 2. Abhängigkeiten installieren
npm install

# 3. Umgebungsvariablen einrichten
cp .env.example .env
# Dann .env bearbeiten und Werte eintragen (siehe unten)

# 4. Datenbank erstellen
npx prisma generate
npx prisma db push

# 5. Entwicklungsserver starten
npm run dev
```

Die App läuft dann unter **http://localhost:3000**

## Umgebungsvariablen (.env)

```env
# Datenbank
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_SECRET="ein-zufaelliger-geheimer-string-hier"
NEXTAUTH_URL="http://localhost:3000"

# Stripe (https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# PayPal (https://developer.paypal.com)
PAYPAL_CLIENT_ID="..."
PAYPAL_CLIENT_SECRET="..."
```

### Stripe einrichten

1. Konto bei [stripe.com](https://stripe.com) erstellen
2. Im Dashboard unter "Developers > API keys" die Test-Keys kopieren
3. Für lokale Webhooks: `stripe listen --forward-to localhost:3000/api/webhook`
4. Den Webhook-Secret in `.env` eintragen

### PayPal einrichten (optional)

1. Bei [developer.paypal.com](https://developer.paypal.com) einloggen
2. Sandbox-App erstellen
3. Client ID und Secret in `.env` eintragen

## Projektstruktur

```
safescreen/
├── prisma/
│   └── schema.prisma          # Datenbank-Schema
├── src/
│   ├── app/
│   │   ├── page.tsx            # Landing Page
│   │   ├── layout.tsx          # Root Layout + SEO
│   │   ├── globals.css         # Tailwind + Custom Styles
│   │   ├── login/page.tsx      # Login-Seite
│   │   ├── register/page.tsx   # Registrierung
│   │   ├── guide/
│   │   │   ├── page.tsx        # Kapitel-Übersicht
│   │   │   └── [slug]/page.tsx # Kapitel-Detailseite
│   │   ├── dashboard/page.tsx  # Update-Feed
│   │   ├── impressum/page.tsx  # Impressum, Datenschutz, AGB
│   │   └── api/
│   │       ├── auth/[...nextauth]/route.ts  # NextAuth
│   │       ├── register/route.ts            # Registrierung
│   │       ├── checkout/route.ts            # Stripe Checkout
│   │       └── webhook/route.ts             # Stripe Webhooks
│   ├── components/
│   │   ├── Header.tsx          # Navigation
│   │   └── Footer.tsx          # Footer mit Links
│   └── lib/
│       ├── prisma.ts           # Prisma Client
│       ├── stripe.ts           # Stripe Config + Produkte
│       └── auth.ts             # NextAuth Config
├── .env.example
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Preismodell

| Produkt | Preis | Enthält |
|---------|-------|---------|
| Guide | 29,99 € (einmalig) | Alle 12 Kapitel + PDF-Download |
| Kombi | 39,99 € (einmalig) | Guide + 1 Jahr Update-Abo |
| Update-Abo | 19,99 €/Jahr | E-Mail-Benachrichtigungen bei neuen Updates |

## Nächste Schritte

Nach dem lokalen Setup können Sie mit Claude Code weiterentwickeln:

1. **Guide-Inhalte einfügen:** Die Kapitel-Texte aus dem DOCX-Guide in die Datenbank übernehmen
2. **PDF-Download:** PDF-Generierung implementieren (z.B. mit Puppeteer oder react-pdf)
3. **PayPal-Integration:** PayPal-Buttons auf der Checkout-Seite ergänzen
4. **E-Mail-System:** Newsletter-Versand (z.B. mit Resend oder Nodemailer)
5. **Admin-Bereich:** Backend zum Verwalten von Updates und Kapiteln
6. **Deployment:** Auf Vercel deployen und Domain verbinden

## Deployment auf Vercel

```bash
# Vercel CLI installieren
npm i -g vercel

# Deployen
vercel

# Umgebungsvariablen in Vercel setzen
# Dashboard > Settings > Environment Variables
```

Bei Vercel-Deployment die Datenbank auf PostgreSQL (z.B. Vercel Postgres oder Supabase) umstellen.

## Lizenz

Alle Rechte vorbehalten. © 2026 SafeScreen.
