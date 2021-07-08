const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "name",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   execute: async function (client, message,args) {
    const member = message.mentions.members.first();

    if (!member) return message.reply("Vui lòng chỉ định một thành viên !");

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply("Vui lòng chỉ định một biệt danh!");

    try {
      member.setNickname(arguments);
    } catch (err) {
      console.log(err);
      message.reply(
        "Tôi không có quyền thiết lập" + member.toString() + " biệt danh !"
      );
    }
  },
};