import { db } from './db.js'

export const getTables = () => {
  return new Promise((resolve) => {
    db.all(`SELECT name FROM sqlite_master WHERE type='table'`, (_, tables) => {
      const names = tables.map((i) => i.name)
      console.log('TABLES'.padEnd(10), ':', names.length)
      resolve(names)
    })
  })
}
