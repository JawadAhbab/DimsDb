import { createMongoJson } from './createMongoJson.js'
import { mongoUpload } from './mongoUpload.js'

export const exec = async () => {
  await createMongoJson()
  await mongoUpload()
  console.log()
}
