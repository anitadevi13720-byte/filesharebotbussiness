/*CMD
  command: /promo_done
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var cid = User.getProperty("pr_channel")
var target = User.getProperty("pr_target")

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []
var chName = cid
var chUrl = ""
for (var i = 0; i < channels.length; i++) {
  if (channels[i].id == cid) { chName = channels[i].name; chUrl = channels[i].url; break }
}

if (options && options.ok) {
  var log = Bot.getProperty("fc_log") ? JSON.parse(Bot.getProperty("fc_log")) : []
  log.push({ admin: "" + user.id, channel_id: cid, name: chName, type: "promotion", action: "promote:" + target, time: new Date().toISOString() })
  Bot.setProperty("fc_log", JSON.stringify(log), "string")
  Bot.sendMessage("✅ User promoted successfully.\n\n👤 User: " + target + "\n📢 Channel: " + chName + "\n🔗 " + chUrl)
} else {
  var errMsg = (options && options.description) ? options.description : "Unknown error"
  if (errMsg.indexOf("not enough rights") != -1 || errMsg.indexOf("can't promote") != -1) {
    Bot.sendMessage("❌ Bot doesn't have permission to add admins in this channel.")
  } else if (errMsg.indexOf("CHAT_ADMIN_REQUIRED") != -1) {
    Bot.sendMessage("❌ Bot is not an admin in this channel.")
  } else {
    Bot.sendMessage("❌ Promotion failed: " + errMsg)
  }
}
