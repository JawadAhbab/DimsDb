import fs from 'fs-extra'
import { MongoClient } from 'mongodb'
import { join } from 'path'
import { configs } from '../index.js'
import { consoler } from './consoler.js'
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
    consoler('IMPORT', cname, json.length, 'Rows')
  }

  await mongo.close()
}
