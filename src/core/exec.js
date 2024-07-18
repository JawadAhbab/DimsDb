import { createMongoJson } from './createMongoJson.js'
import { mongoUpload } from './mongoUpload.js'

export const exec = async () => {
  console.clear()
  await createMongoJson()
  await mongoUpload()
  console.log()
}
