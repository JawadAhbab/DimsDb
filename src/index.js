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
    enable: true,
  },
}
