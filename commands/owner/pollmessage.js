const discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'poll',
    category: 'owner',
    aliases: ['pl'],
    utilisation: '{prefix}poll',
    execute : async function(client, message,args) {
       let pollchannel = message.mentions.channels.first()
       if (!pollchannel) return message.channel.send('vui lòng nói một kênh để gửi cuộc thăm dò ');
       let polldesciption = args.slice(1).join('');
       if (!polldesciption) return message.channel.send('xin vui lòng bao gồm một mô tả ')
       let embedpoll = new discord.MessageEmbed()
       .setTitle('newmessage')
       .setDescription(polldesciption)
       .setColor('RANDOM')
       let msgEmbed = await pollchannel.send(embedpoll);
       await msgEmbed.react ('1️⃣')
       await msgEmbed.react ('2️⃣')
    }
}