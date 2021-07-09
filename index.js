const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ 
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"] });require('discord-buttons')(client)
const db = require('quick.db');
const { Player } = require('discord-player');
client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();
fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));
for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on (file.split(".")[0], event.bind(null, client));
};
for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '862908561549426728'){
        if(reaction.emoji.name === '⚔️') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('748181627733278830')
            user.send('Chào mừng bạn tới với discord của VIGGA, mong bạn hãy đọc luật discord đầy đủ!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '862908561549426728'){
        if(reaction.emoji.name === '⚔️') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('748181627733278830')
            user.send('Bạn đã từ bỏ quyền truy cập vào ở discord VIGGA.')
        }
    }
})
client.login(process.env.token);
