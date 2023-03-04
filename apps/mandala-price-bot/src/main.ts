import {config} from "dotenv";
import {chunk} from 'lodash'

config()
import {Telegraf, Markup} from 'telegraf';
import {MandalaPrice} from "@cusp/mandala-price";

const simpleSizes = [15, 20, 30, 40, 50, 60, 80, 90, 108]
const bot = new Telegraf(process.env.MANDALA_PRICE_BOT_TOKEN)
bot.help((ctx) => ctx.reply('Тут нужно бы про команды. Например /me — её нужно писать с текстом'))
bot.on('message', (ctx) => {
  const msg: { text?: string } = ctx.message as unknown as any
  const text = msg?.text || ""
  const matchCentimeters = text.match(/^(\d{1,4})(см)?$/)?.[1]
  if (!matchCentimeters) {
    ctx.reply(`

<b>Мир всем измерениям!</b>

<i>Я — мандала-прайс-бот, подскажу по стоимости мандал.</i>

Небольшая мандала-магнит, диаметром 80 миллиметров, стоит 500 рублей. Она состоит из 50 квадратных сантиметров.
Стоимость одного квадратного сантиметра, с учётом работы и материалов, составляет 10 рублей.

Мандалы большого размера редки, сложны и долги в изготовлении, требуют специальных инструментов, подготовки и терпения.

Большие мандалы имеют наценку пропорциональную размеру, например двухметровая мандала будет стоить 20 рублей за квадратный сантиметр,
так как при таком размере сложность как минимум удваивается, а само изготовление и работа требуют капитальных вложений средств и времени.

Введите размер мандалы в сантиметрах или выберите из типовых размеров и получите примерную стоимость.`, {
      parse_mode: 'HTML',
      ...Markup.keyboard([
        ...chunk(simpleSizes.map((size) => {
            return Markup.button.callback(size + 'см', `size${size}`)
          })
        , 3)      ])
    })

  } else {
    ctx.reply(replyBySize(Number(matchCentimeters)))
  }
})

function replyBySize(size: number) {
  const millimeters = size * 10
  const square = Math.PI * (millimeters / 10 / 2) ** 2
  const price = MandalaPrice.calculate(millimeters)
  const formattedPrice = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'})
    .format(Math.ceil(price))
  return (
    `
Мандала со стороной ${millimeters / 10}см займёт ${Math.ceil(square)}см²

(это примерно ${Math.ceil(square / 50)} шт. в пересчёте на магниты со стороной 8см)

будет стоить примерно ${formattedPrice}

`
  )
}

simpleSizes.forEach((size) => {
  bot.action(`size${size}`, async (ctx) => {
    await ctx.answerCbQuery()
    await ctx.reply(replyBySize(size))
  })
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
