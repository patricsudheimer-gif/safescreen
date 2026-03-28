import { NextResponse } from 'next/server'
import { stripe, PRODUCTS, ProductKey } from '@/lib/stripe'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Bitte melden Sie sich zuerst an.' },
        { status: 401 }
      )
    }

    const { productKey } = await request.json()

    if (!productKey || !PRODUCTS[productKey as ProductKey]) {
      return NextResponse.json(
        { error: 'Ungültiges Produkt.' },
        { status: 400 }
      )
    }

    const product = PRODUCTS[productKey as ProductKey]

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: product.mode,
      customer_email: session.user.email,
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.priceAmount,
            ...(product.mode === 'subscription' && {
              recurring: { interval: 'year' },
            }),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/guide?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/#preise`,
      metadata: {
        userEmail: session.user.email,
        productKey,
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error('Checkout-Fehler:', error)
    return NextResponse.json(
      { error: 'Checkout konnte nicht erstellt werden.' },
      { status: 500 }
    )
  }
}
