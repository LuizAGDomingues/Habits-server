import { prisma } from "./lib/prisma"
import {  }

export function appRoutes(app) {
  app.get('/', async () => {
    const habits = await prisma.habit.findMany()
    return habits
  })
}