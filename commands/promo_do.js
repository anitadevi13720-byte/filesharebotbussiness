/*CMD
  command: /promo_do
CMD*/

var ADMIN_ID = "8710308658"
if ("" + user.id != ADMIN_ID) { return }

var cid = User.getProperty("pr_channel")
var target = message.trim().replace("@", "")
User.setProperty("pr_target", message.trim(), "string")

Api.promoteChatMember({
  chat_id: cid,
  user_id: target,
  can_manage_chat: true,
  can_post_messages: true,
  can_edit_messages: true,
  can_delete_messages: true,
  can_invite_users: true,
  can_restrict_members: true,
  can_pin_messages: true,
  can_promote_members: false,
  on_result: "/promo_done"
})
