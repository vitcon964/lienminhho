const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');
module.exports = {
    name: 'instagram',
    category: 'fun',
    aliases: ['ins'],
    execute: async function (client, message,args) {
        if (!args[0]) return message.channel.send('Nhập tên Instagram vô mày!');
     const instagram_id = args.join(' ');
     const url = `https://www.instagram.com/${instagram_id}/?__a=1`
     let res;
     try {
        
         res = await axios.get(url, { headers: { cookie:"ig_did=426BDB48-6B01-4DD1-9105-8FF70D9CD03E; mid=YB88SgALAAFwc83oM9wfrqprS9sv; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; fbsr_124024574287414=zOghzdDow350zoe3J7tlHUVa5ksByxh_ERlRjn_FKF4.eyJ1c2VyX2lkIjoiMTAwMDE4MzU2Nzk2NjIwIiwiY29kZSI6IkFRREdxck1NYnFkNWtRTzItZ0Yxd29aTjYzQXJxT3lpZmlHV0VDOU81U2ljQ1d1aUUxbEUtdkhpbUp6V1luUkZEQ2VHZjBVSHlaVC1KYU00dUl4UkFFaHlFY1JhSDMtTl9FdnBuY2hLZmhwV1BLWGRrZ2VjWktTX19LSmc3VC1KdHNPZjQweU95Q1JPamZIalBuak96a3dhcGtXTG1kMWNqYUsyX0dudnhpTmZ3UzFrODRhLWY3QndERXFwZXY5LW9iTEx1djZLczJNTTBUc3BSTVljTHg2aWpBcFppWUlSdXZfR1BuT1lpUjlvcEdSVHNYYUlCTlRIdXR2TndYVGE2enppTzBnRXdVTDdQcVZfWERBQzVTcGEwUV82NGZOb1Z1NWh0aWlkRnp6UlIwdmhOZFhRQ3c2TTY5OW80WnVXcFVTY3ZIMjlHcmhSOXB1N1VMRVdOZnBfIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJyYkt3TXNPcTlzRVpDSFVDT1JKSXNpcTVkRDBaQVVLeEd5Z3ozOTRJVHp5dlVVZUl2T3QxWkFHQUw2ZzFuZUp2N3BJVDU4Q3RwREpScGlsM3B4bWY2M2lxckVRMlN3Z3U1aDdaQmtjY3huODloRlZudjVYWkJCQXRVcllaQUo0UXlhS3ZUQU9EeFh2YzVzUGVuWGxidHRyTkd5elpBcTFKQ3lRSGo4ajViZmh6cUtGWkJ3RERnWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTYxMjY1OTg3NH0; csrftoken=5JFEdvF19f2PleWM71bUWMdXZyIiqzgA; ds_user_id=35530313493; sessionid=35530313493%3AQBbK5Pc5x65c9a%3A12; shbid=13922; shbts=1612659876.2402306; rur=RVA" } })
          } catch(e) {
         return message.channel.send('Tên có hợp lệ đéo đâu mà tìm!');
     }
     const account = res.data.graphql.user;
     const embed = new MessageEmbed()
                .setColor('RED')
                .setTitle(account.full_name)
                .setURL(`https://www.instagram.com/${instagram_id}/`)
                .setThumbnail(account.profile_pic_url_hd)
                .addField("Thông tin cá nhân", stripIndent`**- Tên người dùng:** ${account.username}
                **- Tên đầy đủ: ** ${account.full_name}
                **- Tiểu sử: ** ${account.biography.lend == 0 ? "đéo có" : account.biography}
                **- Số bài đăng: ** ${account.edge_owner_to_timeline_media.count}
                **- Follower: ** ${account.edge_followed_by.count}
                **- Following: ** ${account.edge_follow.count}
                **- Riêng Tư: ** ${account.is_private ? "Có 🔒" : "Không 🔓"}
                **Được tìm thấy bởi: Bụt Đa Năng**`);

                message.channel.send(embed)
    }
}
