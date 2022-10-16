import {ContextWithTextMessage} from "../../types/Teamogram.types";
import {Context} from "telegraf";
import {db} from "../../db";

export class TeamogramCommands {
  static me = async (ctx: ContextWithTextMessage) => {
    const text = ctx?.message?.text?.replace(/^\/me\s?/, '')
    const from = ctx.message?.from
    if(text && from) {
      await ctx.tg.deleteMessage(ctx.chat.id, ctx.message.message_id)
      const userGivenData = await db.getGivenNameByTelegramUserId(from.id)
      const name = userGivenData?.title || this.getUserNameByMessageFrom(from)
      await ctx.reply(`${name} ${text}`)
    }
  }
  static getUserNameByMessageFrom = (from: Context['message']['from']) => {
    return from.username || from.first_name || from.last_name
  }
}
