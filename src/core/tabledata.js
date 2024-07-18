import { db } from './db.js'

export const tabledata = async (table) => {
  return new Promise((resolve) => {
    db.all(`SELECT * FROM ${table}`, (_, rows) => {
      resolve(rows)
    })
  })
}
