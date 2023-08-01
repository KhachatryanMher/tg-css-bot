import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

import config from './config/config.js'

const bot = new Telegraf(config.BOT_TOKEN)
bot.start(ctx => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()