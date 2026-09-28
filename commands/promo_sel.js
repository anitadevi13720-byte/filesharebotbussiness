/*CMD
  command: /promo_sel
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }
Api.answerCallbackQuery({ callback_query_id: request.id })

var cid = params
User.setProperty("pr_channel", cid, "string")

var channels = Bot.getProperty("fc_list")
channels = channels ? JSON.parse(channels) : []
var chName = cid
for (var i = 0; i < channels.length; i++) {
  if (channels[i].id == cid) { chName = channels[i].name; break }
}

Bot.sendMessage("✅ Selected: " + chName + "\n\nSend username or numeric Chat ID of user to promote:\nEx: @username or 123456789")
Bot.runCommand("/promo_do")
