import { exec } from './core/exec.js'

exec()
export const configs = {
  disableTables: [
    'android_metadata',
    't_favourite',
    't_sponsored_brand',
    'addvertisement',
    'sqlite_sequence',
    'district',
    'thana',
    'chamber_info',
    'd_specialty',
    'job',
    'job_category_type',
    'occupation',
    't_addvertisement',
  ],
  mongoUpload: {
    // THIS OPERATION IS DESTRUCTIVE
    // GIVEN DATABSE WILL BE DROPPED FIRST
    // NAME A NEW DATABSE IF YOU WANT TO BE SAFE
    // THERE MAY BE HUGE AMOUNT OF DATA
    // UPLOADING TO ATLAS MAY CAUSE PRESSURE
    enable: true,
    url: 'mongodb://localhost:27017',
    dbname: 'DIMS',
  },
}
