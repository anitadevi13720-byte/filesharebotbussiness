/*CMD
  command: /promo_chk_res
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var ch = JSON.parse(User.getProperty("pr_cur") || "{}")
var idx = parseInt(User.getProperty("pr_idx") || "0")
var valid = JSON.parse(User.getProperty("pr_valid") || "[]")

if (options && options.ok) {
  var st = options.result.status
  var canProm = options.result.can_promote_members
  if (st == "creator" || (st == "administrator" && canProm)) {
    valid.push(ch)
    User.setProperty("pr_valid", JSON.stringify(valid), "string")
  }
}

User.setProperty("pr_idx", idx + 1, "integer")
Bot.runCommand("/promo_chk_loop")
