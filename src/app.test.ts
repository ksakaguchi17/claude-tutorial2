import { describe, expect, it } from 'vitest'
import { app } from './app.js'

describe('app', () => {
  it('returns a greeting on the root route', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ message: 'Hello from Hono on Lambda!' })
  })

  it('returns ok on /health', async () => {
    const res = await app.request('/health')
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ status: 'ok' })
  })

  it('greets a name from the path param', async () => {
    const res = await app.request('/hello/world')
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ message: 'Hello, world!' })
  })
})
