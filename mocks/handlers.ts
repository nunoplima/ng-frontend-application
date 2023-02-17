import { rest } from 'msw'
import quests from './fixtures/quests.json'
import quest from './fixtures/quest.json'

export const handlers = [
  rest.get('http://localhost:3000/api/quests', (_req, res, ctx) => {
    return res(ctx.json(quests))
  }),
  rest.get('http://localhost:3000/api/quests/:id', (_req, res, ctx) => {
    return res(ctx.json(quest))
  }),
]