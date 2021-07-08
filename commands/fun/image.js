const img = require('images-scraper')

const google = new img({puppeteer : {headless : true,}})
module.exports = {
    name : 'image',
    utilisation: '{prefix}image',
    execute: async function (client, message,args) {
        const query = args.join(" ")
        if(!query) return message.channel.send('nhập tên người cần tìm vào ')

        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);
    }
}