const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports = {
  name: "fed",
  category: "expressions",
  description: "feeds a mentioned user",
  usage: "[command] + [user]",
  execute: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to cuddle');

        async function work() {
        let owo = (await neko.sfw.feed());

        const feedembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been fed! ")
        .setDescription((user.toString() + " got fed by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(feedembed);

}

      work();
}
                };