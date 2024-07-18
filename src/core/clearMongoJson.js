import fs from 'fs'
import { mongoJsonFolder } from './mongoJsonFolder.js'

export const clearMongoJson = () => {
  fs.rmSync(mongoJsonFolder, { recursive: true, force: true })
}
