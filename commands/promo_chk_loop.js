/*CMD
  command: /promo_chk_loop
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var channels = JSON.parse(User.getProperty("pr_chlist") || "[]")
var idx = parseInt(User.getProperty("pr_idx") || "0")

if (idx >= channels.length) {
  var valid = JSON.parse(User.getProperty("pr_valid") || "[]")
  if (valid.length == 0) {
    Bot.sendMessage("❌ No channels where bot has admin promote permission.")
    return
  }
  var btns = []
  for (var i = 0; i < valid.length; i++) {
    btns.push([{ text: "📢 " + valid[i].name, callback_data: "/promo_sel " + valid[i].id }])
  }
  Api.sendMessage({
    chat_id: user.id,
    text: "📢 Select channel to promote user in:",
    reply_markup: { inline_keyboard: btns }
  })
  return
}

User.setProperty("pr_cur", JSON.stringify(channels[idx]), "string")
var bot_id = bot.token.split(":")[0]
Api.getChatMember({
  chat_id: channels[idx].id,
  user_id: bot_id,
  on_result: "/promo_chk_res"
})
