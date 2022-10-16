import {ContextWithTextMessage} from "../../types/Teamogram.types";
import {db} from "../../db";
import {TeamogramHelpers} from "../helpers/TeamogramHelpers";

export class TeamogramCommands {
  static me = async (ctx: ContextWithTextMessage) => {
    const text = ctx?.message?.text?.replace(/^\/me\s?/, '')
    const from = ctx.message?.from
    if(text && from) {
      await ctx.tg.deleteMessage(ctx.chat.id, ctx.message.message_id)
      const userGivenData = await db.getGivenNameByTelegramUserId(from.id)
      const name = userGivenData?.title || TeamogramHelpers.getUserNameByMessageFrom(from)
      await ctx.reply(`${name} ${text}`)
    }
  }
  static stat = async (ctx: ContextWithTextMessage) => {
    const statics = await db.getScoreStatistics()
    const users = await db.getGivenNames()
    const usersForStat = statics.reduce((result, item) => {
      const {targetTelegramUserId} = item
      const userNameGivenData = users.find(({id}) => id === targetTelegramUserId)
      return [...result, { name: userNameGivenData?.title, score: item._sum.value}]
    }, [])
    const scoreStatisticsString = usersForStat.map(({name, score}) => {
      return `${name.padEnd(12, ' ')}${score}`
    }).join('\n')
    await ctx.reply(scoreStatisticsString || 'Статы пока нет')
  }

}
