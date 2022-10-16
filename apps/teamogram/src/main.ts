import {config} from "dotenv";
config()
import {Telegraf} from 'telegraf';
import {TeamogramCommands} from "./app/commands/TeamogramCommands";
import {ScoreMessages} from "./app/messages/ScoreMessages";
const bot = new Telegraf(process.env.TEAMOGRAM_BOT_TOKEN)
bot.help((ctx) => ctx.reply('Тут нужно бы про команды. Например /me — её нужно писать с текстом'))
bot.command('me', TeamogramCommands.me)
bot.command('stat', TeamogramCommands.stat)
bot.start((ctx) => ctx.reply('Тут стартовый мессадж. Чот не понял где он появляется.'))
bot.on('message', ScoreMessages.addScore)
bot.launch().then(() => {
  console.log('Бот запустился!')
})

function closeApp() {
  bot.stop('SIGINT')
}

// Enable graceful stop
process.once('SIGINT', closeApp)
process.once('SIGTERM', closeApp)
