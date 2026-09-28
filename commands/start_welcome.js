/*CMD
  command: /start_welcome
CMD*/

var ADMIN_ID = "8710308658"
var msg = "👋Hi Dear " + user.first_name + "\n\n✅Here You Can Make Custom Voting System Like @botadminshere Bot\n\n❤️Made With Love By @TOXIC_ADMINN"
if ("" + user.id == ADMIN_ID) {
  Bot.sendKeyboard("📱Create Vote\n/adminpanel", msg)
} else {
  Bot.sendKeyboard("📱Create Vote", msg)
}
