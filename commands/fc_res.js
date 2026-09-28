/*CMD
  command: /fc_res
CMD*/

var ch = JSON.parse(User.getProperty("fc_cur") || "{}")
var idx = parseInt(User.getProperty("fc_cur_idx") || "0")
var failed = JSON.parse(User.getProperty("fc_failed") || "[]")

var joined = false
if (options && options.ok) {
  var st = options.result.status
  if (st == "member" || st == "administrator" || st == "creator") joined = true
}

if (!joined) {
  failed.push({ name: ch.name, url: ch.url })
  User.setProperty("fc_failed", JSON.stringify(failed), "string")
}

User.setProperty("fc_idx", idx + 1, "integer")
Bot.runCommand("/fc_loop")
