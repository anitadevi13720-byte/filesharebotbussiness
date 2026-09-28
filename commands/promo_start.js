/*CMD
  command: /promo_start
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []

if (channels.length == 0) {
  Bot.sendMessage("❌ No channels saved. Add channels first.")
  return
}

User.setProperty("pr_chlist", JSON.stringify(channels), "string")
User.setProperty("pr_idx", 0, "integer")
User.setProperty("pr_valid", "[]", "string")
Bot.runCommand("/promo_chk_loop")
