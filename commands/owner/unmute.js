const {Message, MessageEmbed}= require('discord.js')
module.exports=  {
    name : 'unmute', 
    /**
     * @param {Message} message
     */
     execute: async function (client, message,args) {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) {
            const embed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Command: .unmute')
            .setDescription('Unmute một người cho quyền chat')
            .addField('Unmute @tên', 'Sẽ được chat', true)
            .setFooter('VIGGA 2021')
            .setTimestamp();
        return message.channel.send(embed);}
        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
        await Member.roles.remove(role)
        const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setDescription( `✅***${Member.displayName} đã được mở mute***`)
    return message.channel.send(embed)
        message.channel.send(`${Member.displayName} hiện đã được bật  tiếng.`)
    }
}