/*CMD
  command: /fc_add_save
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []

var entry = {
  id: User.getProperty("fc_p_cid"),
  name: User.getProperty("fc_p_name"),
  type: User.getProperty("fc_p_type"),
  url: message.trim(),
  enabled: true,
  added: new Date().toISOString()
}

channels.push(entry)
Bot.setProperty("fc_list", JSON.stringify(channels), "string")

var log = Bot.getProperty("fc_log") ? JSON.parse(Bot.getProperty("fc_log")) : []
log.push({ admin: "" + user.id, channel_id: entry.id, name: entry.name, type: entry.type, action: "add", time: entry.added })
Bot.setProperty("fc_log", JSON.stringify(log), "string")

Bot.sendMessage("✅ Force Join channel added successfully!\n\n📢 " + entry.name + "\nType: " + entry.type + "\n🆔 " + entry.id + "\n🔗 " + entry.url)
