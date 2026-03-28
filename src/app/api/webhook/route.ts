import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import Stripe from 'stripe'

export async function POST(request: Request) {
  const body = await request.text()
  const sig = headers().get('stripe-signature')

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Fehlende Signatur' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook-Signatur ungültig:', err)
    return NextResponse.json({ error: 'Ungültige Signatur' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const email = session.metadata?.userEmail || session.customer_email
        const productKey = session.metadata?.productKey

        if (!email) break

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) break

        // Bestellung speichern
        await prisma.order.create({
          data: {
            userId: user.id,
            type: productKey || 'unknown',
            amount: session.amount_total || 0,
            currency: session.currency || 'eur',
            status: 'completed',
            stripeId: session.id,
          },
        })

        // Nutzer-Berechtigung setzen
        if (productKey === 'guide') {
          await prisma.user.update({
            where: { id: user.id },
            data: { hasGuide: true },
          })
        } else if (productKey === 'kombi') {
          const expiresAt = new Date()
          expiresAt.setFullYear(expiresAt.getFullYear() + 1)
          await prisma.user.update({
            where: { id: user.id },
            data: {
              hasGuide: true,
              hasAbo: true,
              aboExpiresAt: expiresAt,
              stripeCustomerId: session.customer as string,
            },
          })
        } else if (productKey === 'abo') {
          const expiresAt = new Date()
          expiresAt.setFullYear(expiresAt.getFullYear() + 1)
          await prisma.user.update({
            where: { id: user.id },
            data: {
              hasAbo: true,
              aboExpiresAt: expiresAt,
              stripeCustomerId: session.customer as string,
              stripeSubscriptionId: session.subscription as string,
            },
          })
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        await prisma.user.updateMany({
          where: { stripeCustomerId: customerId },
          data: { hasAbo: false, stripeSubscriptionId: null },
        })
        break
      }
    }
  } catch (error) {
    console.error('Webhook-Verarbeitung fehlgeschlagen:', error)
    return NextResponse.json({ error: 'Verarbeitung fehlgeschlagen' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
