const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'rrnew',
    execute : async function(client, message,args) {
        const embed = new MessageEmbed()
            .setTitle('Nơi Lấy Role')
            .setDescription('Hãy nhấn icon bên dưới \n⚔️ - Bấm vào icon để có quyền truy cập vào sân chơi của VIGGA 2021')
            .setColor('YELLOW')
            .setImage('https://i.imgur.com/EL3XkV3.jpg')
        const msg = await message.channel.send(embed)
        await msg.react('⚔️')
    }
}