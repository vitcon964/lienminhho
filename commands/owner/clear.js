module.exports = {
    name: 'clear',
    description: 'clear chat messages',
    utilisation: '{prefix}clear',
    execute(client, message,args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("bạn không có quyền .").then((msg) => {
      msg.delete({ timeout: 2000});
  });
  if (!args[0]) return message.channel.send("bạn cần nhập một giá trị (1-100)");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`Clear ${args[0]} messages.`)
      .then((msg) => {
            msg.delete({ timeout: 2000});
      });
  });
    }, 
  };