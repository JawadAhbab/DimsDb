import fs from 'fs-extra'
import { join } from 'path'
import { configs } from '../index.js'
import { clearMongoJson } from './clearMongoJson.js'
import { mongoJsonFolder } from './mongoJsonFolder.js'
import { tabledata } from './tabledata.js'
import { tablenames } from './tablenames.js'

export const createMongoJson = async () => {
  clearMongoJson()
  const tables = await tablenames()

  for (const table of tables) {
    if (configs.disableTables.includes(table)) {
      console.log('EXPORT'.padEnd(8), ':', table.padEnd(26), ':', '[DISABLED]')
      continue
    }

    const rawdata = await tabledata(table)
    const data = rawdata.map((dataobj) => {
      const obj = {}
      Object.entries(dataobj).forEach(([key, value]) => (obj[key] = String(value)))
      return obj
    })

    const path = join(mongoJsonFolder, `${table}.json`)
    fs.outputJsonSync(path, data)
    console.log('EXPORT'.padEnd(8), ':', table.padEnd(26), ':', data.length, 'Rows')
  }
}
