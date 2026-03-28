'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function PricingButton({ productKey, className, children }: {
  productKey: string
  className: string
  children: React.ReactNode
}) {
  const { data: session } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (!session) {
      router.push('/register')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productKey }),
      })

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || 'Ein Fehler ist aufgetreten.')
      }
    } catch {
      alert('Verbindungsfehler. Bitte versuchen Sie es erneut.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleClick} disabled={loading} className={`${className} disabled:opacity-50`}>
      {loading ? 'Wird geladen...' : children}
    </button>
  )
}
