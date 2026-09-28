/*CMD
  command: /bc_next
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var idx = parseInt(User.getProperty("bc_idx") || "0")
var sent = parseInt(User.getProperty("bc_sent") || "0")

if (options && options.ok) sent++

User.setProperty("bc_idx", idx + 1, "integer")
User.setProperty("bc_sent", sent, "integer")
Bot.runCommand("/bc_loop")
