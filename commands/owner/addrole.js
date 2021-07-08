const { Message , MessageEmbed } = require('discord.js')

module.exports = {
    name : 'add',
    aliases: ['al'],
    execute: async function (client, message,args) {
        //lets use parameters (optional)
        /**
         * @param {Message} message
         */
        //so firstly we will check whether the author of the message has permissions
        //this line means if the author doesn't have manage roles permission it will stop the process and send the following text
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('bạn không có quyền ')
        //next we define some variables
        const target = message.mentions.members.first() //member = mentions
        if(!target) {
            const embed = new MessageEmbed()
            .setColor('#ffa50 0')
            .setDescription('***Hãy @tag người đó vào dùm***')
            return message.channel.send(embed)
        }
        const role = message.mentions.roles.first() // roles = mentions
        if(!role) {const embed = new MessageEmbed()
            .setColor('#3cb371')
            .setDescription('Hãy chọn một role nào đó đi')
            return message.channel.send(embed)
        }
        //now the code!
        await target.roles.add(role) // adding the role to the user
        const embed = new MessageEmbed()
        .setColor('#6a5acd')
        .setDescription(`***✅  ${target.user.username} đã được thêm role thành công***`)// adding the role to the user
        return message.channel.send(embed)
    }
}