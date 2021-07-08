const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'mute',
    /**
     * @param {Message} message
     */
     execute: async function (client, message,args) {
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('bạn không có quyền ')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) {
            const embed = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('**Command: .mute**')
                .setDescription('**Mute một người cho khỏi nói**')
                .addField('**Mute @tên**', '**Sẽ không được chat**', true)
                .setFooter('VIGGA 2021')
                .setTimestamp();
            return message.channel.send(embed);
        }
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('không tìm thấy vai trò ')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Đã tạo thành công vai trò ẩn. ')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) {
            const embed = new MessageEmbed()
            .setColor('#ff0000')
            .setDescription( `***${Member.displayName}  đã bị mute từ lâu rồi***`)
        return message.channel.send(embed);
    }
    await Member.roles.add(role2)
        const embed = new MessageEmbed()
            .setColor('#ff0000')
            .setDescription( `✅***${Member.displayName} đã bị mute***`)
        return message.channel.send(embed)
    }
    }
