import { prisma } from "./lib/prisma"
import { FastifyInstance } from "fastify"

export async function appRoutes(app: FastifyInstance) {
  app.post('/habits', async (request) => {
    const { name, description } = request.body
    const habit = await prisma.createHabit(name, description)
    const response = {
  })
}