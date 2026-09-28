/*CMD
  command: /bc_loop
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var users = JSON.parse(User.getProperty("bc_list") || "[]")
var idx = parseInt(User.getProperty("bc_idx") || "0")
var total = parseInt(User.getProperty("bc_total") || "0")
var txt = User.getProperty("bc_txt") || ""

if (idx >= total) {
  var sent = parseInt(User.getProperty("bc_sent") || "0")
  Bot.sendMessage("✅ Broadcast complete. Sent to " + sent + "/" + total + " users.")
  return
}

Api.sendMessage({
  chat_id: users[idx],
  text: txt,
  on_result: "/bc_next"
})
