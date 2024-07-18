import fs from 'fs-extra'
import { join } from 'path'
import { configs } from '../index.js'
import { clearMongoJson } from './clearMongoJson.js'
import { consoler } from './consoler.js'
import { mongoJsonFolder } from './mongoJsonFolder.js'
import { tabledata } from './tabledata.js'
import { tablenames } from './tablenames.js'

export const createMongoJson = async () => {
  clearMongoJson()
  const tables = await tablenames()

  for (const table of tables) {
    if (configs.disableTables.includes(table)) {
      consoler('EXPORT', table, '[DISABLED]')
      continue
    }

    const rawdata = await tabledata(table)
    const data = rawdata.map((dataobj) => {
      const obj = {}
      Object.entries(dataobj).forEach(([key, value]) => {
        const number = +value
        obj[key] = isNaN(number) ? value : number
      })
      return obj
    })

    const path = join(mongoJsonFolder, `${table}.json`)
    fs.outputJsonSync(path, data)
    consoler('EXPORT', table, data.length, 'Rows')
  }
}
