const {createSimpleSlider, createAdvancedSlider,} = require("discord-epagination"); const discord = require('discord.js');

const { MessageEmbed,Message,Client} = require("discord.js"); const moment = require(`moment`) 

const ms = require("ms"); const { readdirSync} = require("fs");

const verificationLevels = { NONE: 'None', LOW: 'Low', MEDIUM: 'Medium', HIGH: 'High', VERY_HIGHT: 'Very High'}

const regions = {brazil: 'Brazil', europe: 'Europe', hongkong: 'Hong Kong', india: 'India', japan: 'Japan', russia: 'Russia', singapore: 'Singapore', 

southafrica: 'South Africa', sydeny: 'Sydeny', 'us-central': 'US Central', 'us-east': 'US East', 'us-west': 'US West', 'us-south': 'US South'}

const { version } = require("discord.js");

let color = "#36393f"
module.exports = {
    name: 'help', 
    execute (client, message, args){
const prefix = client.config.discord.prefix; 

const trangdau= new discord.MessageEmbed()

.setTitle("Help Menu:")

.setDescription(

`\`\`\`js\nPrefix: ${prefix}\nchào mừng bạn đến với Help Menu của VIGGA  \`\`\`\n[mời VIGGA tại đây nha ^_^](https://discord.com/oauth2/authorize?client_id=846017961004498955&scope=bot&permissions=8589934591)\n\`${prefix}help menu: \` Để biết thêm thông tin, hãy chuyển đến trang tiếp theo bằng cách phản hồi! \n\n__**=====>VIGGA<=====**__`)

.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

.setTimestamp() 

.setThumbnail(client.user.displayAvatarURL({dynamic: true}))

.setColor('RANDOM');

/////////////////////////////////////////////// page 1 ///////////////////////////////////////
const  botinfo = new discord.MessageEmbed() 
      .setColor(`RANDOM`) 

      .setTitle(`thông tin của mình nè `) 

      .setThumbnail(client.user.displayAvatarURL()) 

      .addField(`**General**`, [ 

`**Tên mình nè :** ${client.user.username}`, 
      
`**ngày mình được tạo ra nè:** ${moment(client.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`, 
      
`**Owner:** Smile #1308`, 
      
'\u200b'])
      
.addField(

`**hiện tại mình trông được**:`,[ `**📁Servers:** ${client.guilds.cache.size}`,  `**📁Channels:** ${client.channels.cache.size}`, `**📁Users:** ${client.users.cache.size}`,  ])
      
.setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL({dynamic: true}))
      
.setTimestamp();

/////////////////////////////////////////////// page 1 ///////////////////////////////////////

/////////////////////////////////////////////// page 2 ///////////////////////////////////////
const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1)

const members = message.guild.members.cache;

const channels = message.guild.channels.cache;

const emojis = message.guild.emojis.cache
let rolesdisplay;

if(roles.length < 20) {rolesdisplay = roles.join(' ')} else { rolesdisplay = roles.slice(20).join(' ')}

const { guild } = message

const { name, region, memberCount, owner } = guild

const icon = guild.iconURL()

const serverinfo = new discord.MessageEmbed()
      .setColor("RANDOM") .setTitle(`Server info of ${name}`) .setImage(message.guild.iconURL())

      .addField(`General`, [ 
`**Name sever :** ${name}`,  `**ID sever:** ${message.guild.id}`, 

`**Owner room :** ${message.guild.owner.user.tag}`,  

`**Region:** ${regions[message.guild.region]}`, 

`**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`, 

`**Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`, 

`**Boost Level:** ${message.guild.premiumSubscriptionCount || '0'}`, 

`**Created At:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`, 
      
'\u200b'])
      .addField('Stats', [ 
`**Role Count:** ${roles.length}`, 

`**Emoji Count:** ${emojis.size}`, 

`**Member Count:** ${message.guild.memberCount}`,

`**Humans:** ${members.filter(member => !member.user.bot).size}`, 

`**Bots:** ${members.filter(member => member.user.bot).size}`, 

`**Online:** ${members.filter(member => member.presence.status === 'online').size}`, 
      
`**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`, 

`**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`, 

`**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,  

`**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,

`**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`, 
      '\u200b'])

.addField(`Roles [${roles.length - 1}]`, rolesdisplay)   

.setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL({dynamic: true}))

/////////////////////////////////////////////// page 2 ///////////////////////////////////////
      
////////////////////////////////////////////// page 3////////////////////////////////////////
const info= new discord.MessageEmbed()

.setTitle('SMILE:Info nè  📻')

.setColor('#1764ff')

.addField(`${prefix} covid`,[

`${prefix} dis`,

`${prefix} github`,])

.setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL({dynamic: true}))

.setThumbnail(client.user.displayAvatarURL({dynamic: true}))

.setTimestamp();

////////////////////////////////////////////// page 3 ////////////////////////////////////////

////////////////////////////////////////////// page 4 ////////////////////////////////////////

const game = new discord.MessageEmbed()

.setTitle('SMILE : Game nè 🎮 ')

.setColor('#1764ff')

.addField(`${prefix} 8ball`,[

`${prefix} agent`, 

`${prefix} aki`, 
       
`${prefix} battleship`,

`${prefix} clap`, 

`${prefix} coinflip`, 

`${prefix} csgo`, 

`${prefix} fight`, 

`${prefix} gun`, 

`${prefix} minesweeper`,

`${prefix} pokemon`,

`${prefix} roll`,

`${prefix} slots`,

`${prefix} tictactoe`,

`${prefix} steam`,

`${prefix} ttt`,])

.setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL({dynamic: true}))

.setThumbnail(client.user.displayAvatarURL({dynamic: true}))

.setTimestamp();

const  fun = new discord.MessageEmbed()
        
.setTitle('SMILE :Fun nè 🎆')  

.setColor('#ffaa17')

.addField(`${prefix} avatar`,[
  
`${prefix} crabrave`,

`${prefix} dadjoke`,

`${prefix} dark`,
  
`${prefix} meme0`,

`${prefix} meme1`,

`${prefix} emoji`,

`${prefix} gay`,

`${prefix} image`,

`${prefix} instagram`,

`${prefix} maps`,

`${prefix} ping`,

`${prefix} say`,

`${prefix} translate`,

`${prefix} waifu`,

`${prefix} weather`,

`${prefix} yt`,

])
        
.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

.setThumbnail(client.user.displayAvatarURL({dynamic: true}))

.setTimestamp();
const actions= new discord.MessageEmbed()

.setTitle('SMILE: actions nè 🎬 ')

.setColor('#1764ff')

.addField(`${prefix} baka`, `quạo`)

.addField(`${prefix} cuddle`, `âu yếm `)

.addField(`${prefix} fed`, `cho ăn`)

.addField(`${prefix} hug`, `ôm `)

.addField(`${prefix} kiss`, `hôn`)

.addField(`${prefix} pat`, `vỗ `)

.addField(`${prefix} poke`, `chọc  `)

.addField(`${prefix} slapped`, `bị tát   `)

.addField(`${prefix} smug`, `tự mãn `)

.addField(`${prefix} spank`, `đánh đòn   `)

.addField(`${prefix} tickle`, `thọt cù lét   `)

.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

.setThumbnail(client.user.displayAvatarURL({dynamic: true}))

.setTimestamp();
const image = new discord.MessageEmbed()

.setTitle('SMILE: image nè 🎬 ')

.setColor('#1764ff')

.addField(`${prefix} achievment`,[ `${prefix} amazearth `, `${prefix} amongus`, `${prefix} criminalcoialai`, `${prefix} deepfry`, `${prefix} drip`, 

`${prefix} eject`, `${prefix} fire`, `${prefix} gay`, `${prefix} iphonex`, `${prefix} kemonomimi`, `${prefix} meeting`, `${prefix} notstonks`, `${prefix} ohno`, `${prefix} owo`, 
      `${prefix} panda `,
      `${prefix} pat`,
      `${prefix} petpat`,
      `${prefix} pikachu `,
      `${prefix} presentation`,
      `${prefix} quote`,
      `${prefix} rip `,
      `${prefix} seal`,
      `${prefix} shame`,
      `${prefix} smartcat `,
      `${prefix} smug`,
      `${prefix} speed`,
      `${prefix} stonkes `,
      `${prefix} tableflip`,
      `${prefix} tatoo`,
      `${prefix} tickle `,
      `${prefix} toilet`,
      `${prefix} trash`,
      `${prefix} trigem `,
      `${prefix} wanted `,
      `${prefix} wasted `,
])

.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

.setThumbnail(client.user.displayAvatarURL({dynamic: true}))

.setTimestamp();
const give = new discord.MessageEmbed()

.setTitle('SMILE: giveaways nè  ')

.setColor('#1764ff')

.addField(`${prefix} give`, `[...]`)

.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

.setThumbnail(client.user.displayAvatarURL({dynamic: true}))

.setTimestamp();

const MUSIC= new discord.MessageEmbed()

.setTitle('SMILE: MUSIC nè 🎵  ')

.setColor('#1764ff')

.addField(`${prefix} play`, `phát nhạc `)

.addField(`${prefix} loop`, `phát lại `)

.addField(`${prefix} lyric`, `xem lời bài hát `)

.addField(`${prefix} pause`, `dừng nhạc `)

.addField(`${prefix} resume`, `tiếp tục chạy nhạc`)

.addField(`${prefix} shuffle`, `xáo trộn danh sách  `)

.addField(`${prefix} skip`, `qua bài hát khác   `)

.addField(`${prefix} stop`, `tắt nhạc`)

.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

.setThumbnail(client.user.displayAvatarURL({dynamic: true}))

.setTimestamp();

const  NSFW = new discord.MessageEmbed()

.setTitle('SMILE :NSFW  nè 🔞')  

.setColor('#ffaa17')

.addField(`${prefix}2danal`,[  `${prefix} 2dboobs`, `${prefix} 2dfeetgif`, `${prefix} 2dtits`, `${prefix} ass`, `${prefix} boobs`, `${prefix} cumart`, `${prefix} cumslut`, `${prefix} danbooru`,

`${prefix} ero`, `${prefix} erokitsune`, `${prefix} eroyuki`, `${prefix} feetgif`, `${prefix} femdom`, `${prefix} futanari`, `${prefix} gasm`, `${prefix} gelbooru`, `${prefix} girlsolo`,

`${prefix} girlsologif`, `${prefix} hentai`, `${prefix} hentaigif`, `${prefix} holo`, `${prefix} holoero`, `${prefix} keta`, `${prefix} kitsune`, `${prefix} kuni`, `${prefix} lesbian`, `${prefix} lewdavatar`,
        
`${prefix} lewdnekogif`, `${prefix} lewdneko`, `${prefix} neko`, `${prefix} nekogif`, `${prefix} nekoapiclassic`, `${prefix} pussy`, `${prefix} pussyart`, `${prefix} pussywankgif`, `${prefix} r34`, 

`${prefix} trap`, `${prefix} yuri`,
      ])
.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

.setThumbnail(client.user.displayAvatarURL({dynamic: true}))

.setTimestamp();
const ownerr = new discord.MessageEmbed()
        .setTitle('SMILE: owner nè  ')
        .setColor('#1764ff')
        .addField(`${prefix}2danal`,[
            `${prefix} addrole`,
            `${prefix} removerole`,
            `${prefix} ban`,
            `${prefix} unban`,
            `${prefix} captcha`,
            `${prefix} clear`,
            `${prefix} createint`,
            `${prefix} kick`,
            `${prefix} mute`,
            `${prefix} tempmute`,
            `${prefix} unmute`,
            `${prefix} nickname`,
            `${prefix} resetname`,
            `${prefix} react`,
            `${prefix} report`,
            `${prefix} setleave`,
            `${prefix} setwelcome`,
            `${prefix} slowmode`,
        ])
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setTimestamp();
          createAdvancedSlider(
            message.author.id,
            message.channel,
            [trangdau,botinfo,serverinfo,info,fun,game ,give,actions,image,MUSIC,NSFW,ownerr],
            true,
            true,
            ["◀️", "▶️", "❌", "↩"],
            600000
          );
}}