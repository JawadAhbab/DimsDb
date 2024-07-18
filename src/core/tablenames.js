import { db } from './db.js'

export const tablenames = () => {
  return new Promise((resolve) => {
    db.all(`SELECT name FROM sqlite_master WHERE type='table'`, (_, tables) => {
      resolve(tables.map((i) => i.name))
    })
  })
}
