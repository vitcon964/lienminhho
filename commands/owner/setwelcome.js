const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  execute : (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("đề cập đến kênh đề đặt lệnh ")
    }
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`lệnh chào mừng được đặt tại ${channel}`)
  }
}