import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

import config from './config/config.js'

const bot = new Telegraf(process.env.BOT_TOKEN)

