/*CMD
  command: /explore
CMD*/

if (!params) { return }

var rr = params
var al = User.getProperty("Gived" + rr)
var mm = request.message.message_id
var logo = Bot.getProperty("ex" + rr)
var tol = Libs.ResourcesLib.anotherChatRes("status", rr)

if (!al || al == "false") {
  tol.add(1)
  Api.answerCallbackQuery({ callback_query_id: request.id, text: "+1", show_alert: false })
  User.setProperty("Gived" + rr, "true", "string")
} else {
  tol.add(-1)
  Api.answerCallbackQuery({ callback_query_id: request.id, text: "-1", show_alert: false })
  User.setProperty("Gived" + rr, "false", "string")
}

Bot.editInlineKeyboard(
  [[{ title: logo + " " + tol.value(), command: "/explore " + rr }]],
  mm
)
