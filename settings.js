import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.botNumberCode = ''
global.confirmCode = ''

global.owner = [
   ['5493876639332', 'Ian', true],
   ['50360438371', 'Alex', true],
]

global.mods = []
global.prems = []

global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '1.0.1'
global.languaje = 'Español'
global.nameqr = 'ʙᴏᴛ ᴋɪʟʟᴇʀ | ʙʏ ᴊᴜᴅᴀɪ'
global.sessions = 'Killer'
global.jadi = 'JadiBot'

global.banner = 'https://qu.ax/ucKST.jpg'
global.botname = 'ᴋɪʟʟᴇʀ ʙᴏᴛ'
global.author = 'ᴏᴡɴᴇʀ | ᴊᴜᴅᴀɪ'
global.dev = 'ᴋɪʟʟᴇʀ ʙᴏᴛ / ʙʏ ᴊᴜᴅᴀɪ'
global.currency = 'Yenes'
global.botStatus = true;
global.numc = '50360438371'

global.image = fs.readFileSync('./src/img/imagen.jpg')
global.avatar = fs.readFileSync('./src/img/avatar_contact.jpg')

global.grupo = 'https://chat.whatsapp.com/KiJY7gZS17aLcP6qaGatFX'
global.channel = 'https://whatsapp.com/channel/0029VajkZ6bIXnlwPZmbuH1u'


global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : 100, status: 1, surface : 1, message: 'by ian', orderTitle: 'Bang', thumbnail: image, sellerJid: '0@s.whatsapp.net'}}}


global.esti = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": `ᴏᴡɴᴇʀ | ᴊᴜᴅᴀɪ`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `ʙʏ | ᴊᴜᴅᴀɪ`, 'jpegThumbnail': image }}}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
