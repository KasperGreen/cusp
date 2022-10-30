import {Context} from "telegraf";
import {TelegraphContextWithTextMessage, UserScoreList} from "../../types/Teamogram.types";
import {db} from "../../db";

export class TeamogramHelpers {

  static getUserNameFromDbByContext = async (ctx: TelegraphContextWithTextMessage) => {
    const userData = await db.getGivenNameByTelegramUserId(ctx.from.id)
    return userData.title || this.getUserNameByMessageFrom(ctx.message.from)
  };

  static getUserNameByMessageFrom = (from: Context['message']['from']) => {
    return from.username || from.first_name || from.last_name
  }

  static getUserNamesByIds = async (usersIds: number[]):
    Promise<Record<number, string>> => {
    const usersNamesFromDb = await db.getGivenNames({where: {id:{
          in: usersIds
        }}})
    return usersNamesFromDb.reduce((result, user) => ({...result, [user.id]: user.title}), {})
  }

  static getStatTableStringFromScores = async (scores: UserScoreList) => {
    const usersIds = scores.map((i) => i.id)
    const usersNamesById = await TeamogramHelpers.getUserNamesByIds(usersIds)
    return  `

сумма оценок (количество)

`+scores.map(({id, score, count}) => {
      return `${String(score).padEnd(12, ' ')} ${String(usersNamesById[id] || id).padEnd(12, ' ')} (${count})`
    }).join('\n')

  }

}
