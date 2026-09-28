/*CMD
  command: /fc_adm_loop
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var channels = JSON.parse(User.getProperty("fa_list") || "[]")
var idx = parseInt(User.getProperty("fa_idx") || "0")

if (idx >= channels.length) {
  var res = User.getProperty("fa_res") || "No data."
  Bot.sendMessage("👮 *Admin Channel Status:*\n\n" + res)
  return
}

User.setProperty("fa_cur", JSON.stringify(channels[idx]), "string")
var bot_id = bot.token.split(":")[0]
Api.getChatMember({
  chat_id: channels[idx].id,
  user_id: bot_id,
  on_result: "/fc_adm_res"
})
