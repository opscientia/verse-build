import { PrismaClient } from '@prisma/client'

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}
export const prisma =
  global.prisma ||
  new PrismaClient({
    errorFormat: 'pretty'
  })

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export * from '@prisma/client'
export default prisma
