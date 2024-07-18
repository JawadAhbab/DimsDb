import { tablenames } from './tablenames.js'

export const createMongoJson = async () => {
  const tables = await tablenames()
  for (const table of tables) {
    console.log(table)
  }
}
