import { prisma } from "./lib/prisma"
import { FastifyInstance } from "fastify"

export function appRoutes(app) {
  app.get('/', async () => {
    const habits = await prisma.habit.findMany()
    return habits
  })
}