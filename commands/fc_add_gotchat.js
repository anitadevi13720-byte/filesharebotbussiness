/*CMD
  command: /fc_add_gotchat
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

if (!options || !options.ok) {
  Bot.sendMessage("❌ Could not fetch channel info. Try again.")
  return
}

User.setProperty("fc_p_name", options.result.title, "string")
User.setProperty("fc_p_cid", "" + options.result.id, "string")

Api.sendMessage({
  chat_id: user.id,
  text: "✅ Bot is Admin!\n📢 *" + options.result.title + "*\n\nSelect Channel Type:",
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "⚪ Public", callback_data: "/fc_settype public" }],
      [{ text: "⚪ Private", callback_data: "/fc_settype private" }],
      [{ text: "⚪ Join Request", callback_data: "/fc_settype join_request" }],
      [{ text: "❌ Cancel", callback_data: "/fc_menu" }]
    ]
  }
})
