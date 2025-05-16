
const handler = async (m, { text, quoted }) => {
  const defaultPP = 'https://files.catbox.moe/6x3v5u.jpg';
  const defaultSignature = '@frases_que_nadie_dijo';
  const name = m.name || 'Usuario Anonimo';

  if (!text) return m.reply(`Ingresa el texto para crear la frase!\nEjemplo: .cfrase Hola mundo | https://example.com/pp.jpg*`);

  let [quoteText, ppUrl] = text.split('|').map(a => a.trim());
  if (!quoteText) return m.reply('Texto para la frase no definido.');
  if (ppUrl && !/^https?:\/\//.test(ppUrl)) return m.reply('El link de la imagen no es válido.');

  const quoteApi = `https://fastrestapis.fasturl.cloud/maker/quote?text=${encodeURIComponent(quoteText)}&username=${encodeURIComponent(name)}&ppUrl=${encodeURIComponent(ppUrl || defaultPP)}&signature=${encodeURIComponent(defaultSignature)}`;

  try {
    await conn.sendMessage(m.chat, {
      image: { url: quoteApi },
      caption: `Listo *${name}*\n\n\n${quoteText}`
    }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('Error en la api.');
  }
};

handler.help = ['cfrase <texto> | <linkimg>'];
handler.tags = ['maker'];
handler.command = /^cfrase$/i;

export default handler;