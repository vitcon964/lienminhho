const { Client, Message, MessageEmbed } = require('discord.js');
const akinator = require('discord.js-akinator')
module.exports = {
    name: 'akinator',
    aliases: ['aki'],
    description: 'Akinator game but on discord',
    usage: 'akinator <option>',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
     execute: async function (client, message,args) {
        akinator(message, client)
    }
}