/*CMD
  command: /back_adm
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })
Api.editMessageText({
  chat_id: user.id,
  message_id: request.message.message_id,
  text: "⚙️ *Admin Panel*",
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "📢 Force Channels", callback_data: "/fc_menu" }]
    ]
  }
})
