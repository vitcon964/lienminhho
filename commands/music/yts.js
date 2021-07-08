const Discord = require('discord.js');
const ytsr = require('ytsr');
module.exports = {
  name: 'yts',
  description: "Search for youtube videos in Discord!",
  aliases: ["ys"],
  execute : async function (client, message, args) {
    const query = args.join(' ');
    if (!query) return message.channel.send("Provide a search for me to search YouTube!");

    const res = await ytsr(query).catch(e => message.channel.send(`Nos results found for ${query}`));
    const video = res.items.filter(i => i.type === 'video')[0];
    const embed = new Discord.MessageEmbed()
      .setTitle(video.title)
      .setURL(video.url)
      .setImage(video.bestThumbnail.url)
      .setDescription(video.description ? video.description : "No Description")
      .addField(`Song Information`,
`**Creator**: [${video.author.name}](${video.author.url}) ${video.author.verified ? ":white_check_mark: (Verified)" : "\u200b"}
**Length**: ${video.duration} minute(s)
**Uploaded**: ${video.uploadedAt}
**Views**: ${video.views.toLocaleString()}`
      )
      .setThumbnail(video.author.bestAvatar.url)
    message.reply(embed);
  }
}