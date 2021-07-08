const discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const db = require ('quick.db');
const Canvacord = require('canvacord');
module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    const prefix = client.config.discord.prefix;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();      
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    if (cmd) {
        cmd.execute (client, message, args);
        //logs
        const channel = client.channels.cache.get('859277550035271753') 
        channel.send(
            `** ${message.author.tag}** has used **${cmd.name}**cmd in **${message.guild.name}**`)
    }  
    ///////////////////////////// xp //////////////////////////////////////////////////////////
    xp(message)
    if(message.content.startsWith(`${prefix}rank`)) {
    var user = message.mentions.users.first() || message.author;
    var level = db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0;
    var currentxp = db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0;
    var xpNeeded = level * 500 + 500 // 500 + 1000 + 1500
    const rankcard = new Canvacord.Rank()
        .setAvatar(user.displayAvatarURL({format: 'png', dynamic: true}))
        .setCurrentXP(db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0)
        .setRequiredXP(xpNeeded)
        .setStatus(user.presence.status)
        .setLevel(db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0)
        .setRank(1, 'RANK', false)
        .setProgressBar("#a81d16", "COLOR")
        .setOverlay("#000000")
        .setUsername(user.username)
        .setDiscriminator(user.discriminator)
        .setBackground("IMAGE", "https://media.discordapp.net/attachments/846289132115329025/853551561614426172/JFeEHc.png?width=1214&height=683")
        rankcard.build()
        .then(data => {
            const atta = new discord.MessageAttachment(data, "rank.png")
            message.channel.send(atta)
        })
    }
    function xp(message) {
        const randomNumber = Math.floor(Math.random() * 10) + 20;
        db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber) 
        db.add(`guild_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)
        var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
        var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`)
        var xpNeeded = level * 500;
        if(xpNeeded < xp){
            var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1) 
            db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
            message.channel.send(`Congrats ${message.author}, you leveled up, you are now level ${newLevel}`)
        }
    }
    /////////////////////////////////////////// xp ////////////////////////////////////
};