let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081223883651]
│ • Telkomsel [082119094904]
╰────

╭─「 Donasi • Non Pulsa 」
│ • saat ini belum tersedia non pulsa...
│ 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
