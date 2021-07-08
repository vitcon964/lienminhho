const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: 'maps',
   execute: async function (client, message, args) {
   const sit = args.join("_")
if (!args.length) return message.reply("cho tớ xin cái tọa độ ")
    const site = `https://maps.google.com/?q=${args.join("+")}`
    try {
      const msg = await message.channel.send('vui lòng đợi chút xíu ')
          msg.delete({ timeout: 5000 })
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );
let att = new Discord.MessageAttachment(body, `${sit}.png`)
      return message.channel.send(att)
  
    } catch (err) {
      
      return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`)
        
    };
    }
  }