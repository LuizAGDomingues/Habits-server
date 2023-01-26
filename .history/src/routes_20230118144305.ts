import { prisma } from "./lib/prisma"

export function appRoutes(app) {
  app.get('/', async () => {
    const habits = await prisma.habit.findMany()
    return habits
  })
}