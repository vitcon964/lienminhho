const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "reset",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   execute: async function (client, message,args) {
    const member = message.mentions.members.first();

    if (!member) return message.reply("vui lòng chỉ định thành viên ");

    try {
      member.setNickname(null);
    } catch (err) {
      message.reply(
        "Tôi không có quyền thiết lập  " + member.toString() + " biệt danh !"
      );
    }
  },
};  