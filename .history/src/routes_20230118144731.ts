import { prisma } from "./lib/prisma"
import { z } from 'zod'
import { FastifyInstance } from "fastify"

export async function appRoutes(app: FastifyInstance) {
  app.post('/habits', async (request) => {

    const { title, weekDays } = request.body

  })
}