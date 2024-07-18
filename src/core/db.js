import { join } from 'path'
import sqlite3 from 'sqlite3'
const sqlite = sqlite3.verbose()

const dbpath = join(process.cwd(), 'src/database/dims.db')
export const db = new sqlite.Database(dbpath, () => {
  console.clear()
  console.log('DATABASE'.padEnd(8), ':', 'CONNECTED')
})
