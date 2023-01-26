import { prisma } from "./prisma"

export function appRoutes(app) {
  app.get('/', async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Beber'
      }
    }
  })
  return habits
  })
}