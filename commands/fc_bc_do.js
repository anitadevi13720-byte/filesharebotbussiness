/*CMD
  command: /fc_bc_do
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var users = Bot.getProperty("all_users")
users = users ? JSON.parse(users) : []

User.setProperty("bc_txt", message, "string")
User.setProperty("bc_list", JSON.stringify(users), "string")
User.setProperty("bc_idx", 0, "integer")
User.setProperty("bc_sent", 0, "integer")
User.setProperty("bc_total", users.length, "integer")
Bot.runCommand("/bc_loop")
