import { getTables } from './core/getTables.js'

makeMongoJson()
async function makeMongoJson() {
  const tables = await getTables()

  console.log(tables)
}
