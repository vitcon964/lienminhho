
    const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: "setleave",
   usage: "setleave <#channel>",
  execute: (client, message, args) => {
 let channel = message.mentions.channels.first() //mentioned channel
     //send success message
   if(!channel) {  
    
    
      return message.channel.send("Please Mention the channel first")
     }
    //Now we gonna use quick.db
    db.set(`leechannel_${message.guild.id}`, channel.id) //set id in var
    return message.channel.send(`leave Channel is seted as ${channel}`)
      
  }}
