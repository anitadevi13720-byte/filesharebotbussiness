/*CMD
  command: /vch_get
CMD*/

User.setProperty("v_channel", message.trim(), "string")
var bot_id = bot.token.split(":")[0]
Api.getChatMember({
  chat_id: message.trim(),
  user_id: bot_id,
  on_result: "/vch_check"
})
