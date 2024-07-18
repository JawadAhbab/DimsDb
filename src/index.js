import { tablenames } from './core/tablenames.js'

makeMongoJson()
async function makeMongoJson() {
  const tables = await tablenames()

  console.log(tables)
}
