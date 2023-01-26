import { prisma } from "./lib/prisma"
import { z } from 'zod'
import { FastifyInstance } from "fastify"

export async function appRoutes(app: FastifyInstance) {
  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(
        z.number())
    })
    const { title, weekDays } = request.body

  })
}