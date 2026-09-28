/*CMD
  command: /fc_add_chkadm
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

if (!options || !options.ok) {
  Bot.sendMessage("❌ Bot is not in that channel or channel not found. Add bot as Admin first.")
  return
}
var st = options.result.status
if (st != "administrator" && st != "creator") {
  Bot.sendMessage("❌ Bot is not Admin in that channel. Add bot as Admin first.")
  return
}

Api.getChat({
  chat_id: User.getProperty("fc_p_input"),
  on_result: "/fc_add_gotchat"
})
