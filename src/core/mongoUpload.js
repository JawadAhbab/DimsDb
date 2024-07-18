import { configs } from '../index.js'
import { MongoClient } from 'mongodb'
import fs from 'fs-extra'
import { join } from 'path'
import { mongoJsonFolder } from './mongoJsonFolder.js'

export const mongoUpload = async () => {
  if (!configs.mongoUpload) return
  console.log()

  const { url, dbname } = configs.mongoUpload
  const mongo = new MongoClient(url)
  await mongo.connect()
  const mongodb = mongo.db(dbname)
  await mongodb.dropDatabase()

  for (const filename of fs.readdirSync(mongoJsonFolder)) {
    const json = fs.readJsonSync(join(mongoJsonFolder, filename))
    const cname = filename.replace(/\.json$/, '')
    const collection = mongodb.collection(cname)
    await collection.insertMany(json)
    console.log('IMPORT'.padEnd(8), ':', cname.padEnd(26), ':', json.length, 'Rows')
  }

  await mongo.close()
}
