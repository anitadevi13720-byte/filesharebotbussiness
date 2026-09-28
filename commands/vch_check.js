/*CMD
  command: /vch_check
CMD*/

if (!options || !options.ok) {
  Bot.sendMessage("❌ Could not access that channel. Make sure bot is added as Admin.")
  return
}
var st = options.result.status
if (st != "administrator" && st != "creator") {
  Bot.sendMessage("🤷🏻 Bot Is Not Admin In Your Channel. Add bot as Admin first.")
  return
}
Bot.sendMessage("✡️ Send Name And Logo\nEx:- `Rolex - ❤`")
Bot.runCommand("/vch_post")
