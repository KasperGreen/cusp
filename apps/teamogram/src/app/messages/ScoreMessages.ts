import {TelegraphContextWithTextMessage} from "../../types/Teamogram.types";
import {db} from "../../db";
import {TeamogramHelpers} from "../helpers/TeamogramHelpers";



export class ScoreMessages {
  static #scoreRegExp = /([+-]\d+)вздрыж/
  static #shortScoreRegExp = /\+{1,4}|-{1,4}/
  static #addScoreToDbAndReplyIfItNotPossible = async (scoreValue: number, ctx: TelegraphContextWithTextMessage) => {
    if (scoreValue) {
      let resultScoreValue = 0
      if (scoreValue < 5 && scoreValue > 0) {
        resultScoreValue = scoreValue
      } else if (scoreValue < 0 && scoreValue > -5) {
        resultScoreValue = scoreValue
      } else if (scoreValue > 4 || scoreValue < -4) {
        const userName = await TeamogramHelpers.getUserNameFromDbByContext(ctx)
        await ctx.reply(`
${userName}, тебе не кажется, что это слишком много?

Давай ограничимся тремя или — в исключительном случае четырьмя!`);
      }
      if (resultScoreValue) {
        await db.addScore({
          telegramChatId: ctx.chat.id,
          givingTelegramUserId: ctx.from.id,
          targetTelegramUserId: ctx.message.reply_to_message.from.id,
          value: resultScoreValue,
          text: ctx.message.text,
          telegramMessageJson: JSON.stringify(ctx.message)
        })
      }
    }
    else {
      const userName = await TeamogramHelpers.getUserNameFromDbByContext(ctx)
      await ctx.reply(`
${userName}, что-то пошло не так. Это сообщение не должно было появиться. Пришло нулевое значение.`)
    }
  };

  static addScore = async (ctx: TelegraphContextWithTextMessage) => {
    if (
      ctx.message
      && ctx.message.reply_to_message
      && ctx.message.text
    ) {
      let scoreValue = 0
      const {text} = ctx.message

      const shortMatch = text.match(this.#shortScoreRegExp)
      if(shortMatch) {
        const matchedScoreValue = shortMatch[0]
        const matchedScoreNumber = matchedScoreValue.length

        scoreValue = matchedScoreValue[0] === '+'
          ? matchedScoreNumber
          : -matchedScoreNumber

      } else {
        const match = text.match(this.#scoreRegExp)
        if (match) {
          scoreValue = Number(match?.[1]?.replace('+', ''))
        }
      }


      if(scoreValue) {
        await this.#addScoreToDbAndReplyIfItNotPossible(scoreValue, ctx)
      }

    }
  }

}
