/*CMD
  command: /fc_adm_start
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []

if (channels.length == 0) {
  Bot.sendMessage("👮 No channels saved.")
  return
}

User.setProperty("fa_list", JSON.stringify(channels), "string")
User.setProperty("fa_idx", 0, "integer")
User.setProperty("fa_res", "", "string")
Bot.runCommand("/fc_adm_loop")
