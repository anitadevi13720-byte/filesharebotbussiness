/*CMD
  command: /start
CMD*/

var ADMIN_ID = "8710308658"

var users = Bot.getProperty("all_users")
users = users ? JSON.parse(users) : []
var uid = "" + user.id
var found = false
for (var i = 0; i < users.length; i++) {
  if ("" + users[i] == uid) { found = true; break }
}
if (!found) {
  users.push(uid)
  Bot.setProperty("all_users", JSON.stringify(users), "string")
}

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []
var enabled = []
for (var j = 0; j < channels.length; j++) {
  if (channels[j].enabled) enabled.push(channels[j])
}

if (enabled.length == 0) {
  Bot.runCommand("/start_welcome")
  return
}

User.setProperty("fc_idx", 0, "integer")
User.setProperty("fc_failed", "[]", "string")
Bot.runCommand("/fc_loop")
