/*CMD
  command: /fc_rem_list
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []

if (channels.length == 0) {
  Bot.sendMessage("🗑 No channels to remove.")
  return
}

var btns = []
for (var i = 0; i < channels.length; i++) {
  btns.push([{ text: "🗑 " + channels[i].name, callback_data: "/fc_rem_conf " + channels[i].id }])
}
btns.push([{ text: "🔙 Back", callback_data: "/fc_menu" }])

Api.editMessageText({
  chat_id: user.id,
  message_id: request.message.message_id,
  text: "🗑 Select channel to remove:",
  reply_markup: { inline_keyboard: btns }
})
