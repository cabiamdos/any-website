import 'dotenv/config'
import * as fs from 'fs'
import * as path from 'path'

const MAIN_FILE = path.resolve(__dirname, '..', './dist/main.js')
const FOLDER_PATH = process.env.FOLDER_PATH 

fs.readdir('./dist', 'utf-8', (err, files) => {
  if (err) return err
  if (!FOLDER_PATH){ console.error('please set up a folder path');return;}
  const DESTINATION_PATH = FOLDER_PATH + '/.obsidian/plugins/any-website/'
  fs.mkdir(DESTINATION_PATH, { recursive: true }, (err) => {
    if (err) throw new Error(err.message);
    // INFO: copy main file
    fs.copyFile(MAIN_FILE, DESTINATION_PATH + 'main.js', (err) => {
      if (err) {
        console.error(err)
        return;
      }
      console.log('Success copying main.js')
    })
    // INFO: copy manifest.json file
    fs.copyFile(path.resolve(__dirname,'..', 'manifest.json'), DESTINATION_PATH + 'manifest.json', (err) => {
      if (err) {
        console.error(err)
        return;
      }
      console.log('Success copying manifest.json')
    })
    // INFO: copy styles css file
    fs.copyFile(path.resolve(__dirname,'..', './src/styles.css'), DESTINATION_PATH + 'styles.css', (err) => {
      if (err) {
        console.error(err)
        return;
      }
      console.log('Success copying styles.css')
    })
  })
})


export {}