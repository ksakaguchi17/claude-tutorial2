import { Hono } from 'hono'

export const app = new Hono()

app.get('/', (c) => c.json({ message: 'Hello from Hono on Lambda!' }))

app.get('/health', (c) => c.json({ status: 'ok' }))

app.get('/hello/:name', (c) => {
  const name = c.req.param('name')
  return c.json({ message: `Hello, ${name}!` })
})
