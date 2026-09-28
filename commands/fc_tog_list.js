/*CMD
  command: /fc_tog_list
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []
var btns = []

for (var i = 0; i < channels.length; i++) {
  var c = channels[i]
  btns.push([{ text: (c.enabled ? "✅ " : "🚫 ") + c.name, callback_data: "/fc_tog_do " + c.id }])
}
btns.push([{ text: "🔙 Back", callback_data: "/fc_menu" }])

Api.editMessageText({
  chat_id: user.id,
  message_id: request.message.message_id,
  text: "🔁 Toggle channel status:",
  reply_markup: { inline_keyboard: btns }
})
