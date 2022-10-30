import {Context} from "telegraf";
import {Message, Update } from "telegraf/typings/core/types/typegram";

export type TelegraphContextWithTextMessage = Context<{message: Update.New & Update.NonChannel & Message.TextMessage, update_id: number}> & Context<Update>

export type UserScoreListItem = {
  id: number
  score: number
  count: number
}
export type UserScoreList = UserScoreListItem[]
