import Fastify from 'fastify'
import { P } from '@prisma/client'

const app = Fastify()

app.get('/', () => {
  return 'Hello World!'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server running!')
})
