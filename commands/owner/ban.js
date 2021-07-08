const discord = require('discord.js');
const axios = require('axios');
module.exports = {
    name: 'ban',
    aliases: ['b'],
    execute(client, message,args) {
        const ban = args[0];
        if (!ban) return message.channel.send("Muốn ban ai thì nhập Tên vào Thằng Lol ");
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('mày không có quyền !');
         const member = message.mentions.members.first();
         const user = member       
         member.ban(user);
         return message.reply (` đã đá khỏi server!  `)
    }

}