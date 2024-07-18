import { configs } from '../index.js'
import { clearMongoJson } from './clearMongoJson.js'
import { tabledata } from './tabledata.js'
import { tablenames } from './tablenames.js'

export const createMongoJson = async () => {
  clearMongoJson()
  const tables = await tablenames()

  for (const table of tables) {
    if (configs.disableTables.includes(table)) {
      console.log('CREATE'.padEnd(8), ':', table.padEnd(26), ':', '[DISABLED]')
      continue
    }

    const data = await tabledata(table)

    console.log('CREATE'.padEnd(8), ':', table.padEnd(26), ':', true)
  }
}
