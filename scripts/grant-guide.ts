// Skript zum manuellen Freischalten des Guides für einen Nutzer
// Nutzung: npx tsx scripts/grant-guide.ts <email>

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const email = process.argv[2]

  if (!email) {
    // Wenn keine E-Mail angegeben, alle Nutzer anzeigen
    const users = await prisma.user.findMany()
    console.log('Registrierte Nutzer:')
    users.forEach(u => {
      console.log(`  ${u.email} - Guide: ${u.hasGuide ? 'JA' : 'NEIN'} - Abo: ${u.hasAbo ? 'JA' : 'NEIN'}`)
    })
    console.log('\nNutzung: npx tsx scripts/grant-guide.ts <email>')
    return
  }

  const user = await prisma.user.update({
    where: { email },
    data: { hasGuide: true },
  })

  console.log(`Guide freigeschaltet für: ${user.email}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
