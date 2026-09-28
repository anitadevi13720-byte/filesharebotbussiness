/*CMD
  command: /fc_rechk_loop
CMD*/

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []
var enabled = []
for (var i = 0; i < channels.length; i++) {
  if (channels[i].enabled) enabled.push(channels[i])
}

var idx = parseInt(User.getProperty("fc_idx") || "0")

if (idx >= enabled.length) {
  var failed = JSON.parse(User.getProperty("fc_failed") || "[]")
  var rid = User.getProperty("fc_rechk_rid")
  var mid = parseInt(User.getProperty("fc_rechk_mid") || "0")
  if (failed.length == 0) {
    Api.answerCallbackQuery({ callback_query_id: rid, text: "✅ Verified!", show_alert: true })
    Bot.runCommand("/start_welcome")
  } else {
    var btns = []
    for (var k = 0; k < failed.length; k++) {
      btns.push([{ text: "📢 " + failed[k].name, url: failed[k].url }])
    }
    btns.push([{ text: "🔵 Check Membership", callback_data: "/chk_mem" }])
    Api.answerCallbackQuery({ callback_query_id: rid, text: "❌ Still not joined all channels.", show_alert: true })
    Api.editMessageReplyMarkup({
      chat_id: user.id,
      message_id: mid,
      reply_markup: { inline_keyboard: btns }
    })
  }
  return
}

var ch = enabled[idx]
User.setProperty("fc_cur", JSON.stringify(ch), "string")
User.setProperty("fc_cur_idx", idx, "integer")

if (ch.type == "join_request") {
  var jr = User.getProperty("jr_" + ch.id)
  var failed2 = JSON.parse(User.getProperty("fc_failed") || "[]")
  if (!jr || jr != "true") {
    failed2.push({ name: ch.name, url: ch.url })
    User.setProperty("fc_failed", JSON.stringify(failed2), "string")
  }
  User.setProperty("fc_idx", idx + 1, "integer")
  Bot.runCommand("/fc_rechk_loop")
  return
}

Api.getChatMember({
  chat_id: ch.id,
  user_id: user.id,
  on_result: "/fc_rechk_res"
})
