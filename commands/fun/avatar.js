const {MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    category: 'user',
    aliases: ['avt'],
    utilisation: '{prefix}avatar',
    execute(client, message, args ) {
        if (message.deletable) message.delete()
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
            const URL = member.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024})
            const avatarEmbed = new MessageEmbed()
                .setImage(URL)
                .setURL(URL)
                .setTitle('BẤM VÔ XEM SỰ CUTE')
            message.channel.send(avatarEmbed)
        
    }
}