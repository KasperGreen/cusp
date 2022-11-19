import {config} from "dotenv";
config()
import {Telegraf} from 'telegraf';
import {MandalaPrice} from "@cusp/mandala-price";

const bot = new Telegraf(process.env.MANDALA_PRICE_BOT_TOKEN)
bot.help((ctx) => ctx.reply('Тут нужно бы про команды. Например /me — её нужно писать с текстом'))
bot.on('message', (ctx) => {
  const msg: {text?: string} = ctx.message as unknown as any
  const text = msg?.text || ""
  const matchNumber = text.match(/^\d{1,4}$/)
  const matchCentimeters = text.match(/^(\d{1,3})см$/)
  if(matchNumber || matchCentimeters) {
    const millimeters = Number(matchNumber?.[0]) || Number(matchCentimeters?.[1]) * 10
    const price = MandalaPrice.calculate(millimeters)
    const formattedPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price)
    ctx.reply(`${formattedPrice}`)
  } else {
    ctx.reply('Введите радиус мандалы в миллиметрах и получите примерную стоимость.')
  }
})
bot.launch().then(() => {
  console.log('Бот запустился!')
})


function closeApp() {
  bot.stop('SIGINT')
}

// Enable graceful stop
process.once('SIGINT', closeApp)
process.once('SIGTERM', closeApp)
