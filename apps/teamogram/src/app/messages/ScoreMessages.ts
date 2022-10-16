import {ContextWithTextMessage} from "../../types/Teamogram.types";
import {db} from "../../db";
import {TeamogramHelpers} from "../helpers/TeamogramHelpers";

export class ScoreMessages {
  static #scoreRegExp = /([+-]\d+)вздрыж/
  static addScore = async (ctx: ContextWithTextMessage) => {
    if (
      ctx.message
      && ctx.message.reply_to_message
      && ctx.message.text
    ) {
      const match = ctx.message.text.match(this.#scoreRegExp)
      if (match) {
        const scoreValue = Number(match?.[1]?.replace('+', ''))
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
      }
    }
  }
}
