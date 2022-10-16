import {Context} from "telegraf";
import {Message, Update } from "telegraf/typings/core/types/typegram";

export type ContextWithTextMessage = Context<{message: Update.New & Update.NonChannel & Message.TextMessage, update_id: number}> & Context<Update>
