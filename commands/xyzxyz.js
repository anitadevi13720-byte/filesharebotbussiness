/*CMD
  command: /xyzxyz
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

Api.sendMessage({
  chat_id: user.id,
  text: "👑 *Secret Admin Panel*",
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "👤 Promote User", callback_data: "/promo_start" }]
    ]
  }
})
