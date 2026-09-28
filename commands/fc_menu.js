/*CMD
  command: /fc_menu
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })
Api.editMessageText({
  chat_id: user.id,
  message_id: request.message.message_id,
  text: "📢 *Force Channels*",
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "➕ Add Channel", callback_data: "/fc_add_start" }],
      [{ text: "📋 List Channels", callback_data: "/fc_list_cb" }],
      [{ text: "🗑 Remove Channel", callback_data: "/fc_rem_list" }],
      [{ text: "🔁 Enable/Disable", callback_data: "/fc_tog_list" }],
      [{ text: "👮 Check Admin Channels", callback_data: "/fc_adm_start" }],
      [{ text: "📢 Broadcast", callback_data: "/fc_bc_start" }],
      [{ text: "🔙 Back", callback_data: "/back_adm" }]
    ]
  }
})
