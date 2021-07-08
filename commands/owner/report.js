const discord = require('discord.js')
module.exports = {
    name: "report",
    aliases: ["rp"],
    utilisation: '{prefix}report',
     execute: async function (client, message,args) {
          let user = message.mentions.users.first()
        if (!user) return message.channel.send('muốn kiện gì tag người ta vào ')
    
        let reason = args.slice(1).join(" ")
        if (!reason) return message.channel.send("cho xin lý do nè !")
    
        let Avatar = user.displayAvatarURL();
        let Channel = message.guild.channels.cache.find((ch) => ch.name === "report") //report @KarimX raosnfdfd
        if (!Channel) return message.channel.send("không có kênh report , vui lòng tạo kênh report cảm ơn  ");
    
        const embed = new discord.MessageEmbed()
        .setTitle('đơn kiện ')
        .setDescription(`thằng ngu \`${message.author.tag}\` đã kiện một thằng khùng  \`${user.tag}\`!`)
        .setColor("RED")
        .setThumbnail(Avatar)
        .addFields(
            { name: "Member ID", value: `${message.author.id}`, inline: true},
            { name: "Member Tag", value: `${message.author.tag}`, inline: true},
            { name: "Reported ID", value: `${user.id}`, inline: true},
            { name: "Reported Tag", value: `${user.tag}`, inline: true},
            { name: "Reason", value: `${reason}`, inline: true}
        )
        Channel.send(embed)
        return message.reply('đã gửi báo cáo thành công !')
     }}