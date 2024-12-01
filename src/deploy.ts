import 'dotenv/config'
import * as fs from 'fs'

const DESTINATION = process.env.FOLDER_PATH

fs.readdir('./dist', 'utf-8', (err, files) => {
  if (err ) return err
  if ( !DESTINATION){ console.error('please set up a folder path');return;}
  fs.copyFile('./main.js', DESTINATION, () => {
    console.log('success in copying files')
  })
})


export {}