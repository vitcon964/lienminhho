const commando = require("discord.js-commando");
const fetch = require('node-fetch');
const fs = require('fs');

module.exports = {
      name: 'crabrave',
  execute : async (client ,message, args)=>{
  
  const embed = {
  "title": "Crabrave! :crab::tropical_drink::crab:",
  "color": 15031581,
  "image": {
    "url": "https://i.imgur.com/yUqx1Jm.gif"
  },
  "fields": []
  };
  message.channel.send({ embed });
   

  }
  
}