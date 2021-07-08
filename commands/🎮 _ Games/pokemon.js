  
const { MessageEmbed } = require("discord.js");
const { Spawn } = require("pokecord");

module.exports = {
  name: "pokemon",
  category: "games",
  description: "Guess the pokemon!",
  usage: "sz!pokemon",
  execute: async (client, message, args) => {

    const pokemon = await Spawn().catch(e => {});
    if (!pokemon) return message.channel.send("OOP! WHAT IS HAPPENING TO ME? SOMETHING WENT WRONG... BEEP BEEP");
    const filter = m => m.author.id === message.author.id;

    const embed = new MessageEmbed()
        .setAuthor("đoán pokemon")
        .setColor("#E15D44")
        .setImage(pokemon.imageURL);
    console.log(`${message.author.username} from ${message.guild.name} wants to guess ${pokemon.name}`)
    await message.channel.send(embed);

    message.channel.awaitMessages(filter, {
        max: 1,
        error: ["time"],
        time: 100000
    })
    .then(collected => {
        const m = collected.first();
        if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.channel.send(` Đoán không chính xác! Câu trả lời là  **${pokemon.name}**.`);
        return message.channel.send(`**GREAT!**`);
    })
    .catch(() => {
        message.channel.send(` You did not answer in time. The pokemon name is **${pokemon.name}**!`);
    });

}
};