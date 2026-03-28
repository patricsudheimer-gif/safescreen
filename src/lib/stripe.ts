import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY ist nicht gesetzt')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
})

// Produkt-Konfiguration
export const PRODUCTS = {
  guide: {
    name: 'SafeScreen Guide',
    description: 'Einmaliger Zugang zum kompletten Guide (12 Kapitel + PDF)',
    priceAmount: 2999, // in Cent
    currency: 'eur',
    mode: 'payment' as const,
  },
  kombi: {
    name: 'SafeScreen Kombi',
    description: 'Guide + 1 Jahr Update-Abo',
    priceAmount: 3999,
    currency: 'eur',
    mode: 'payment' as const,
  },
  abo: {
    name: 'SafeScreen Update-Abo',
    description: 'Jährliches Update-Abo mit E-Mail-Benachrichtigungen',
    priceAmount: 1999,
    currency: 'eur',
    mode: 'subscription' as const,
  },
} as const

export type ProductKey = keyof typeof PRODUCTS
