import {TelegraphContextWithTextMessage, UserScoreList} from "../../types/Teamogram.types";
import {db} from "../../db";
import {TeamogramHelpers} from "../helpers/TeamogramHelpers";

export class TeamogramCommands {
  static me = async (ctx: TelegraphContextWithTextMessage) => {
    const text = ctx?.message?.text?.replace(/^\/me\s?/, '')
    const from = ctx.message?.from
    if (text && from) {
      await ctx.tg.deleteMessage(ctx.chat.id, ctx.message.message_id)
      const userGivenData = await db.getGivenNameByTelegramUserId(from.id)
      const name = userGivenData?.title || TeamogramHelpers.getUserNameByMessageFrom(from)
      await ctx.reply(`${name} ${text}`)
    }
  }

  static stat = async (ctx: TelegraphContextWithTextMessage) => {
    if (!ctx?.chat?.id) {
      return await ctx.reply('Чот нет id у чата.')
    }
    const statics = await db.getScoreStatistics(ctx.chat.id)

    const scores: UserScoreList = statics.map((
      {
        targetTelegramUserId,
        _sum: {value: sum},
        _count: {value: count}
      }) => ({
      id: targetTelegramUserId,
      score: sum,
      count
    }))
    const scoreStatisticsString = await TeamogramHelpers.getStatTableStringFromScores(scores)
    await ctx.reply(`
Вздрыжстата
--

${scoreStatisticsString}
    ` || 'Статы пока нет')
  }

  static givenStat = async (ctx: TelegraphContextWithTextMessage) => {
    if (!ctx?.chat?.id) {
      return await ctx.reply('Чот нет id у чата.')
    }
    const statics = await db.getGivenScoreStatistics(ctx.chat.id)
    const scores: UserScoreList = statics.map((
      {
        givingTelegramUserId,
        _sum: {value: sum},
        _count: {value: count}
      }) => ({
      id: givingTelegramUserId,
      score: sum,
      count
    }))

    const scoreStatisticsString = await TeamogramHelpers.getStatTableStringFromScores(scores)
    await ctx.reply(`
Вздрыжстата

Кто сколько раздал вздрыж всего!
--

${scoreStatisticsString}
    ` || 'Статы пока нет')
  }


}
