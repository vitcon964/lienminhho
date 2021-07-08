const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports = {
  name: "poke",
  aliases: [],
  execute: async(client, message, args) => {
            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "You must mention someone to poke!"
            }})

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "You cant poke yourself!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/poke')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " vừa bị chọc bởi " + message.author.username)
              .setImage(response.body.url)
              .setColor("RANDOM")
              .setDescription((user.toString() + " bị chọc bởi  " + message.author.toString()))
              .setFooter(`rip`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

        }
        }
module.exports.help = {
    name: "poke",
    description: "Poke a mention user",
    usage: "poke <user>",
    type: "Fun" 
}