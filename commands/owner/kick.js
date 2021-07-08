const discord = require('discord.js');
const axios = require('axios');
const { MessageEmbed  } = require('discord.js')
module.exports = {
    name: 'kick',
    aliases: ['k'],
    execute(client, message,args) {
        const kick = args[0];
        if (!kick) {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('***Hãy nhập tên người bạn muốn kick***')
        return message.channel.send(embed)
        }
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('mày không có quyền !');
        const member = message.mentions.members.first();
        member.kick(); 
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`***${member.displayName} đã bị kick***`)
        return message.channel.send(embed)
    }}