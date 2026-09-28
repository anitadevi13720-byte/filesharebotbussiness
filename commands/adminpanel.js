/*CMD
  command: /adminpanel
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) {
  Bot.sendMessage("❌ Unauthorized.")
  return
}
Api.sendMessage({
  chat_id: user.id,
  text: "⚙️ *Admin Panel*",
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "📢 Force Channels", callback_data: "/fc_menu" }]
    ]
  }
})
