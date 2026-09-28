/*CMD
  command: /fc_rem_do
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })

var rid = User.getProperty("fc_rem_id")
var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []
var removed = null
var newList = []

for (var i = 0; i < channels.length; i++) {
  if (channels[i].id == rid) {
    removed = channels[i]
  } else {
    newList.push(channels[i])
  }
}

Bot.setProperty("fc_list", JSON.stringify(newList), "string")

if (removed) {
  var log = Bot.getProperty("fc_log") ? JSON.parse(Bot.getProperty("fc_log")) : []
  log.push({ admin: "" + user.id, channel_id: removed.id, name: removed.name, type: removed.type, action: "remove", time: new Date().toISOString() })
  Bot.setProperty("fc_log", JSON.stringify(log), "string")
}

Bot.sendMessage("✅ Force Join channel removed successfully.")
