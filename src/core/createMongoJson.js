import { configs } from '../index.js'
import { tablenames } from './tablenames.js'

export const createMongoJson = async () => {
  const tables = await tablenames()
  for (const table of tables) {
    if (configs.disableTables.includes(table)) {
      console.log('CREATE'.padEnd(8), ':', table.padEnd(26), ':', '[DISABLED]')
      continue
    }

    console.log('CREATE'.padEnd(8), ':', table.padEnd(26), ':', true)
  }
}
