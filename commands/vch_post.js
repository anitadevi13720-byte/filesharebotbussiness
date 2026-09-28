/*CMD
  command: /vch_post
CMD*/

var raw = message
if (!raw || raw.indexOf("-") == -1) {
  Bot.sendMessage("❌ Wrong format. Use: `Name - Logo`\nEx: `Rolex - ❤`")
  Bot.runCommand("/vch_post")
  return
}
var dashIdx = raw.indexOf("-")
var name = raw.substring(0, dashIdx).trim()
var logo = raw.substring(dashIdx + 1).trim()

if (!name || !logo) {
  Bot.sendMessage("❌ Wrong format. Use: `Name - Logo`")
  Bot.runCommand("/vch_post")
  return
}

var rand = Libs.Random.randomInt(100000, 999999)
var rr = rand + "" + user.id
Bot.setProperty("ex" + rr, logo, "string")

var key = [[{ text: logo + " 0", callback_data: "/explore " + rr }]]
Api.sendMessage({
  chat_id: User.getProperty("v_channel"),
  text: "*" + name + "*",
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: key }
})
Bot.sendMessage("✅ Vote Posted Successfully!")
