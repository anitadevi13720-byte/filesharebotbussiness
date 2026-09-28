/*CMD
  command: /fc_bc_start
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })
Bot.sendMessage("📢 Send the broadcast message:")
Bot.runCommand("/fc_bc_do")
