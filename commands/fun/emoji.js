const { Util, MessageEmbed } = require('discord.js');
const { parse } = require('twemoji-parser');

module.exports = {
    name: 'emoji',
    category: 'fun',
    aliases: ['emj'],
    utilisation: '{prefix}emoji',
    execute(client, message,args) {
        const emoji = args[0];
        if (!emoji) return message.channel.send("Nhập EMJ gì đó bạn êy!");

        let custom = Util.parseEmoji(emoji);
        const embed = new MessageEmbed()
            .setTitle(`ĐÂY NÈ`)
            .setColor("RANDOM");
        if (custom.id) {
            let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;
            embed.setImage(link)
            .setFooter(`Emoji ID: ${custom.id}`);
            return message.channel.send(embed);
        
        } else {
            let parsed = parse(emoji, { assetType: 'png' });
            if (!parsed[0]) return message.channel.send('EMJ đéo hợp lệ');
            embed.setImage(parsed[0].url);
            return message.channel.send(embed);

        }
    

    }
}