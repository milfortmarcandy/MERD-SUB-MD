import fs from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['50934329984'] // ['628','628'] 2 owner atau lebih
global.author = 'MERD-SUB-MD'
global.botname = 'MERD-SUB-MD'
global.packname = 'MERD-SUB-MD'
global.timezone = 'Haïti' // Ganti pakai command .settimezone
global.locale = 'en' // Ganti pakai command .setlocale
global.listprefix = ['+','!','.']

global.listv = [
  '✦', '✧', '★', '☆', '✪', '✯', '✰',
  '❖', '✿', '❀', '❁', '❃', '❂',
  '➤', '➣', '➢', '➩', '➪', '➫', '➬',
  '➭', '➮', '➯', '➱',
  '⟡', '⟢', '⟣', '⟤', '⟥',
  '◆', '◇', '◈', '⬟', '⬢',
  '■', '□', '▣', '▢',
  '●', '○', '◉', '◎',
  '▲', '△', '▼', '▽',
  '♠', '♣', '♥', '♦',
  '✚', '✛', '✜', '✝',
  '〆', '々', 'ツ', 'ッ',
  '⚡', '🔥', '💎', '🌟'
]

global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.tempatStore = 'baileys_store.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/Nazedev',
	gh: 'https://github.com/nazedev',
	gc: 'https://chat.whatsapp.com/DPUC3uuqYZI9FNLdgtMp4n?mode=gi_t',
	ch: '120363419296446108@newsletter',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 900
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key: "Apikey limit! Silahkan Upgrade: https://naze.biz.id",
	owner: "Khusus Owner!",
	admin: "Khusus Admin!",
	botAdmin: "Bot harus Admin!",
	onWa: "Nomor tersebut tidak terdaftar di WhatsApp!",
	group: "Khusus Grup!",
	private: "Khusus Private Chat!",
	quoted: "Reply pesannya!",
	limit: "Limit habis!",
	prem: "Khusus Premium!",
	text: "Masukkan teksnya!",
	media: "Kirim medianya!",
	wait: "Proses...",
	fail: "Gagal!",
	error: "Error!",
	done: "Selesai!"
}

global.APIs = {
	naze: 'https://api.naze.biz.id',
	neosantara: 'https://api.neosantara.xyz/v1',
}
global.APIKeys = {
	'https://api.naze.biz.id': 'YOUR_API_KEY',
	'https://api.neosantara.xyz/v1': 'API_KEY_NEOSANTARA_AI',
}

// Lainnya
global.jadwalSholat = {
	Subuh: '04:30',
	Dzuhur: '12:06',
	Ashar: '15:21',
	Maghrib: '18:08',
	Isya: '19:00'
}

global.badWords = ['dongo', 'konsol'] // input kata-kata toxic yg lain. ex: ['dongo','dongonya']
global.chatLength = 1000

fs.watchFile(__filename, async () => {
	console.log(chalk.yellowBright(`[UPDATE] ${__filename}`))
});