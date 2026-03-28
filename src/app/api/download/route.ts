import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Bitte melden Sie sich an.' },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user?.hasGuide) {
      return NextResponse.json(
        { error: 'Bitte erwerben Sie zuerst den Guide.' },
        { status: 403 }
      )
    }

    const pdfPath = join(process.cwd(), 'public', 'SafeScreen_Guide_2026.pdf')
    const pdf = readFileSync(pdfPath)

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="SafeScreen_Guide_Maerz_2026.pdf"',
      },
    })
  } catch (error) {
    console.error('Download-Fehler:', error)
    return NextResponse.json(
      { error: 'Download fehlgeschlagen.' },
      { status: 500 }
    )
  }
}
