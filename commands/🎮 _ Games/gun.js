const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'gun',
    aliases: ['gu'],
    description: ':gun: Gunify your text',
    usage: 'gunify <text>',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     execute: async function (client, message,args) {
        if (!args[0])
            return message.channel.send(
                `:gun: viết :gun: lệnh :gun: rồi :gun: thêm :gun: chữ :gun: vào `
                
            );

        const text = args.join(' :gun: ');

        if(text.includes('@')) return message.lineReply(`:gun: No :gun:`)
        
        if(text.length > 100) return message.channel.send(`:gun: **|** :gun: That's :gun: over :gun: the :gun: limit! :gun:`)

        message.channel.send(`:gun: **|** :gun: ${text} :gun:`)
    },
};