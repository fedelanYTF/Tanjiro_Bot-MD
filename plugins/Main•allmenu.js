import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
    try {
    let { exp, diamantes, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    exp = exp || 'Desconocida';
    role = role || 'Aldeano';

        const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

        await m.react('☁️')
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/pk3xxk.jpg')

        const fotoUrl = 'https://files.catbox.moe/62kd0v.jpg' // URL fija del foto

        let menu = `

👤 ¡Hᴏʟᴀ! ${taguser} ¿Cᴏᴍᴏ Esᴛᴀ́s?
💙${saludo}

✦ *Nombre: ${global.botname}*
✦ *Versión: ${global.vs}*
✦ *Economía: ${global.currency}*
✦ *Prefix: [.]

𓂂𓏸  𐅹੭੭   *\`MENU-BOT\`*   🍃ᩚ꤬ᰨᰍ
*\`Info\`*

✦ *perfil*
✦ *menu*

*\`ᴀɪ\`*

✦ *remini*
✦ *hd*
✦ *enhance*
✦ *wallpape <txt>*
✦ *gemini / ia*
✦ *pixai*

 *\`ʙᴜꜱQᴜᴇᴅᴀꜱ\`*

✦ *google <busqueda>*
✦ *tiktoksearch <txt>*
✦ *ytsearch*
✦ *imagen <txt>*
✦ *play* <musica
✦ *ytdlmp4* <nombre>
✦ *ytdlmp3* <nombre>

‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌
 *\`ᴊᴜᴇɢᴏꜱ\`*

✦ *abrazar <@tag>*
✦ *acertijo*
✦ *sonrojarse <@tag>*
✦ *consejo*
✦ *enamorada <@tag>*
✦ *meme*
✦ *acariciar <@tag>*
✦ *personalidad*
✦ *piropo*
✦ *pokedex <pokemon*
✦ *pregunta*
✦ *dormir <@tag>*
✦ *triste <@tag>*
✦ *top <txt>*

 *\`ᴊᴀᴅɪ / ʙᴏᴛꜱ\`*

✦ *code* 
✦ *serbot*

 *\`ꜱᴛɪᴄᴋᴇʀꜱ\`*

✦ *qc*
✦ *sticker <img>*
✦ *sticker <url>*
✦ *take <ɴᴏᴍʙʀᴇ/ᴀᴜᴛᴏʀ>*

 *\`ɢʀᴜᴘᴏꜱ\`*

✦ *link*
✦ *grupo open / close*
✦ *delete*
✦ *demote*
✦ *promote*
✦ *encuesta <txt / txt>*
✦ *hidetag*
✦ *infogrupo*
✦ *kick*
✦ *listadv*
✦ *tagall <txt>*
✦ *invocar <txt>*

 *\`ᴏɴ/ᴏꜰꜰ\`*

✦ *enable*
✦ *disable*

 *\`ᴅᴇꜱᴄᴀʀɢᴀꜱ\`*

✦ *facebook - fb*
✦ *instagram - ig*
✦ *tiktok*
✦ *ytmp4*
✦ *ytmp3*

 *\`ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ\`*

✦ *ᴛᴏᴀɴɪᴍᴇ*
✦ *remini*
✦ *hd*
✦ *ssweb*
✦ *ss*
✦ *trad*

 *\`ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇꜱ\`*

✦ *togifaud*
✦ *toimg*
✦ *toaudio*
`.trim()

        await conn.sendMessage(m.chat, {
            foto: { url: fotoUrl }, // Foto fijo
            caption: menu,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 999,
                externalAdReply: {
                    title: '💎TENKUU-BOT💎\nCreador fedelanYT 💙',
                    thumbnailUrl: perfil,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                },
            },
            gifPlayback: true,
            gifAttribution: 0
        }, { quoted: null })
    } catch (e) {
        await m.reply(`*☕ Ocurrió un error al enviar el menú.*\n\n${e}`)
    }
}

handler.help = ['menuff'];
handler.tags = ['main'];
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
                      }
