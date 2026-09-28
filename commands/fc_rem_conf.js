/*CMD
  command: /fc_rem_conf
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })
User.setProperty("fc_rem_id", params, "string")

Api.editMessageText({
  chat_id: user.id,
  message_id: request.message.message_id,
  text: "⚠️ Confirm remove channel?\n🆔 " + params,
  reply_markup: {
    inline_keyboard: [
      [{ text: "🟢 Confirm Remove", callback_data: "/fc_rem_do" }],
      [{ text: "🔴 Cancel", callback_data: "/fc_menu" }]
    ]
  }
})
