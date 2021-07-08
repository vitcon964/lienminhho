
module.exports = {
    name: 'unban',
    aliases: ['ub'],
    utilisation: '{prefix}unban',
    execute(client, message,args) {
        const member =args[0];
        if (!member){
            return message.channel.send('vui lòng nhập id người dùng  ')
        }
        try {
            message.guild.fetchbans().then(bans=> {
                message.guild.members.unban(member)
            })
            async function asyncFunc() {
                await message.channel.send(`${member}thằng ngu đã được bỏ cấm `);
            }
        }catch(e){
            return message.channel.send(`một lỗi đã xảy ra`)
        }
    }}