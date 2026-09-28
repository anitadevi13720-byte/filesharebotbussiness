/*CMD
  command: /fc_settype
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })
User.setProperty("fc_p_type", params, "string")
Bot.sendMessage("🔗 Send the Join URL for this channel:\nEx: https://t.me/yourchannel")
Bot.runCommand("/fc_add_save")
