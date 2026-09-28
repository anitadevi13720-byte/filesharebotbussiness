/*CMD
  command: /fc_add_getid
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
var input = message.trim()
User.setProperty("fc_p_input", input, "string")
var bot_id = bot.token.split(":")[0]
Api.getChatMember({
  chat_id: input,
  user_id: bot_id,
  on_result: "/fc_add_chkadm"
})
