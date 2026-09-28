/*CMD
  command: /fc_add_start
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })
Bot.sendMessage("📢 Send channel @username or numeric Chat ID:")
Bot.runCommand("/fc_add_getid")
