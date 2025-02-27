const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  const pesan = args.join` `;
  const colombia = `✦ *Mensaje:* ${pesan}`;
  let teks = `✦ *invocando grupo*\n${colombia}\n\n🥷 *Tags:*\n𝙎𝙊𝙋𝙊𝙍𝙏𝙀𝘼𝘿𝙊 𝘿𝙀 𝙁𝙊𝙍𝙈𝘼 𝙂𝙍𝘼𝙏𝙄𝙏𝙐𝘼 𝙋𝙊𝙍 𝙀𝙇 𝙏𝙄𝙊 𝙅𝙐𝘿𝘼𝙄`;
  for (const mem of participants) {
    teks += `@${mem.id.split('@')[0]}\n`;
  }
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall *<mesaje>*', 'invocar *<mesaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'invocar'];
handler.admin = true;
handler.group = true;
export default handler;
