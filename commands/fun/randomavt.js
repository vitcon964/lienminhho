const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
  name: "random-avt",
  /**
   * @param {Client} client
   * @param {Message} message
   */
   execute: async(client, message,args) => {
    const user = client.users.cache.random();
    message.channel.send(
        new MessageEmbed()
        .setColor("RANDOM")
        .setFooter(`${user.tag}'s avatar! `)
        .setImage(user.displayAvatarURL())
    )
   }
}