const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports = {
  name: "poked",
  category: "expressions",
  description: "pokes a mentioned user",
  usage: "[command] + [user]",
  execute: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to poke');

        async function work() {
        let owo = (await neko.sfw.poke());

        const pokeembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been poked ")
        .setDescription((user.toString() + " got poked by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(pokeembed);

}

      work();
}
                };