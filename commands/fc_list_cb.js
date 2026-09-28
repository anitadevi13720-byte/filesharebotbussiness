/*CMD
  command: /fc_list_cb
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []

if (channels.length == 0) {
  Bot.sendMessage("📋 No force channels added yet.")
  return
}

var msg = "📋 *Force Channels List:*\n\n"
for (var i = 0; i < channels.length; i++) {
  var c = channels[i]
  msg += (c.enabled ? "✅ Enabled" : "🚫 Disabled") + "\n"
  msg += "📢 " + c.name + "\n"
  msg += "Type: " + c.type + "\n"
  msg += "🆔 " + c.id + "\n"
  msg += "🔗 " + c.url + "\n\n"
}
Bot.sendMessage(msg)
