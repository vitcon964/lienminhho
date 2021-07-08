module.exports = {
    name: 'say',
    category: 'fun',
    aliases: ['s'],
    utilisation: '{prefix}say',
    execute(client, message,args) {
        if (message.deletable) message.delete()
        message.channel.send(args.join(' '))
    }
}