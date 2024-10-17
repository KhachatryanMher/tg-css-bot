import { Telegraf } from 'telegraf'
import { BOT_TOKEN } from './config/config.js'

const bot = new Telegraf(BOT_TOKEN)

console.log('Bot started')
console.log('valod')

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

