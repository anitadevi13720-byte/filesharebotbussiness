/*CMD
  command: /fc_adm_res
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var ch = JSON.parse(User.getProperty("fa_cur") || "{}")
var idx = parseInt(User.getProperty("fa_idx") || "0")
var res = User.getProperty("fa_res") || ""

var isAdmin = false
if (options && options.ok) {
  var st = options.result.status
  if (st == "administrator" || st == "creator") isAdmin = true
}

res += "📢 " + ch.name + "\n"
res += "🆔 " + ch.id + "\n"
res += "🔗 " + ch.url + "\n"
res += (isAdmin ? "✅ Bot is Admin" : "❌ Bot is not Admin") + "\n\n"

User.setProperty("fa_res", res, "string")
User.setProperty("fa_idx", idx + 1, "integer")
Bot.runCommand("/fc_adm_loop")
