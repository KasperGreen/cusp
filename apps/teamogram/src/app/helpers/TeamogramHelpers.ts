import {Context} from "telegraf";
import {ContextWithTextMessage} from "../../types/Teamogram.types";
import {db} from "../../db";

export class TeamogramHelpers {

  static getUserNameFromDbByContext = async (ctx: ContextWithTextMessage) => {
    const userData = await db.getGivenNameByTelegramUserId(ctx.from.id)
    return userData.title || this.getUserNameByMessageFrom(ctx.message.from)
  };

  static getUserNameByMessageFrom = (from: Context['message']['from']) => {
    return from.username || from.first_name || from.last_name
  }

}
