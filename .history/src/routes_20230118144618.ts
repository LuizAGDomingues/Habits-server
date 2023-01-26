import { prisma } from "./lib/prisma"
import { FastifyInstance } from "fastify"

export async function appRoutes(app: FastifyInstance) {
  app.post('/habits', async (request) => {
    const {  } = request.body

  })
}