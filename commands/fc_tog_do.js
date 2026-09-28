/*CMD
  command: /fc_tog_do
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var tid = params
var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []
var toggled = null

for (var i = 0; i < channels.length; i++) {
  if (channels[i].id == tid) {
    channels[i].enabled = !channels[i].enabled
    toggled = channels[i]
    break
  }
}

Bot.setProperty("fc_list", JSON.stringify(channels), "string")

if (toggled) {
  var log = Bot.getProperty("fc_log") ? JSON.parse(Bot.getProperty("fc_log")) : []
  log.push({ admin: "" + user.id, channel_id: toggled.id, name: toggled.name, type: toggled.type, action: toggled.enabled ? "enabled" : "disabled", time: new Date().toISOString() })
  Bot.setProperty("fc_log", JSON.stringify(log), "string")
  Api.answerCallbackQuery({ callback_query_id: request.id, text: toggled.enabled ? "✅ Enabled" : "🚫 Disabled", show_alert: true })
  Bot.runCommand("/fc_tog_list")
} else {
  Api.answerCallbackQuery({ callback_query_id: request.id, text: "Channel not found.", show_alert: true })
}
