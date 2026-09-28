/*CMD
  command: /chk_mem
CMD*/

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []
var enabled = []
for (var i = 0; i < channels.length; i++) {
  if (channels[i].enabled) enabled.push(channels[i])
}

User.setProperty("fc_idx", 0, "integer")
User.setProperty("fc_failed", "[]", "string")
User.setProperty("fc_rechk_mid", request.message.message_id, "integer")
User.setProperty("fc_rechk_rid", request.id, "string")
Bot.runCommand("/fc_rechk_loop")
