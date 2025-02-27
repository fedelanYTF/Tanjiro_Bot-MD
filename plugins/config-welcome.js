import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => image)
  let image = await (await fetch(`${pp}`)).buffer()

  let chat = global.db.data.chats[m.chat];

  if (chat.welcome && m.messageStubType == 27) {
    let user = `@${m.messageStubParameters[0].split`@`[0]}`;
    let description = groupMetadata.desc ? `\n${groupMetadata.desc}` : '';
    let welcome = `*Usuario ✦ ${user}*\n${description}`;

    await conn.sendMini(m.chat, redes, dev, welcome, image, image, redeshost);
  }
}
