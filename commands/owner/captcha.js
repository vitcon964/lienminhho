const db = require('quick.db')

module.exports = {
    name : 'captcha',
    execute : async(client, message, args) => {
        if(args[0] === 'on') {
            await db.set(`captcha-${message.guild.id}`, true)
            message.channel.send('Turned on captcha feature')
        } else if(args[0] === 'off') {
            await db.delete(`captcha-${message.guild.id}`)
            message.channel.send('Turned off captcha feature')
        }
    }
}