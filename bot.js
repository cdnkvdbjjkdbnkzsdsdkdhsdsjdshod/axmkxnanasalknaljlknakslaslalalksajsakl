const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = "$";
var fs = require('fs');
client.on('message', message => {
    if (message.content === 'zg') {
    	message.reply('pong');
  	}
});

//.

const ms = require("ms");

const moment = require('moment');




///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////اذا جاك ايرور وقت تشغيل البوت وقالك الجيسون فيه غلط///////////////////////////
//////////////////////////////////////ولقيته فاضي////////////////////////////////////////////////////
///////////////////////////////////////حله بسيط//////////////////////////////////////////////////////
////////////////////////روح عند اي ملف جيسون موجوده و اضغط ctrl + z///////////////////////////////
////////////////////بتلقى الي كان مكتوب رجع خلاص سوي حفظ للملف ctrl + s///////////////////////////
//////////////////////غير كذا اي ايرور يصير للجيسون خليه لي انا بحله////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////iyvu


const developers = ["456641975932813345"]
const adminprefix = "!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

hero.on('message', async message => {
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':eight_pointed_black_star: » ليس لديك البرمشن المطلوب  ');
  if(!message.guild.member(hero.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      if(!c) return;
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});


client.on('message', message => {
   let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "search")) {
let Embed = new Discord.RichEmbed()
        .setColor(0x36393e);
    if (!args[0]) {
        Embed.setFooter(`**للأستعمال : ${prefix}search [ Letter ].**`);
        return message.channel.send(Embed); 
    }

    if (args[0].length <= 1) {
        Embed.setFooter(`للأستعمال : ${prefix}search [ Letter ].`);
        return message.channel.send(Embed); 
    }
    let array = []; 
    let number = 0; 
    message.guild.members.map(m => { 
        if (m.user.username.toUpperCase().includes(args[0].toUpperCase())) { 
            number++; 
            array.push(`${number}. ${m.user.username}`); 
        }
    });
    Embed.setAuthor(`:eight_pointed_black_star: » نتائج البحث عن : "${args[0]}"`);
    Embed.setDescription(`\`\`\`${array.slice(0, 30).join(`\n`)}\`\`\``);

    message.channel.send(Embed);
   
   }
}); 

client.on('message',async message => {
  if(message.content.startsWith(prefix + "roles")) {
        message.channel.send(`${message.guild.roles.size} Roles in the server\n`+'**```\n'+message.guild.roles.map(r =>`- ${r.name}  ( ${r.members.size} members )`).join('\n')+'```**').then(msg => {
            msg.delete(9000);
            message.delete(9000);
        });
  }
});

  client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "invite")) {
    if(!args) return message.reply(':eight_pointed_black_star: » حدد اسم دعوة');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`:eight_pointed_black_star: » لم اقدر على ايجاد ${args}`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - صاحب الدعوة',inv.inviter,true)
      .addField('# - روم الدعوة',inv.channel,true)
      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});

client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith(prefix+'mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send(":eight_pointed_black_star: » يجب كتابة ايدي السيرفر ");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField(":eight_pointed_black_star: » أيدي السيرفر",`${args}`,true)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`S Bot.`)
                .setTimestamp()
    message.channel.send(embed)      
}})

hero.on('message', async message => {
  if(message.content.startsWith(prefix + "bc")) {
    if(message.author.id === hero.user.id) return;
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;

    var args = message.content.split(' ').slice(1).join(' ');
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':eight_pointed_black_star: » انت لا تملك الخصائص اللازمة , يجب توفر خاصية `التحكم بأعدادات السيرفر`');
    if(!args) return message.channel.send(':eight_pointed_black_star: » انت لم تقم بكتابة الرسالة');

    try {
      // By: iAmHeRo¹⁵ ☤#1705
      var i = message.guild.memberCount;
      args = args.replace('[sender]', message.author);
      args = args.replace('[server]', message.guild.name);
      message.channel.send(':information_source: » جاري ارسال الرسالة .. __يرجى الانتظار__');
      setTimeout(() => {
        message.channel.send(`:white_check_mark: » تم ارسال البرودكاست .. تم الارسال لـ ${i} شخص`);
      }, message.guild.members.size * 1000);
      message.guild.members.forEach(m => {
        var bcEmbeed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(':eight_pointed_black_star: » السيرفر', `[** __${message.guild.name}__ **]`,true)
        .addField(':eight_pointed_black_star: » المرسل', `[** __${message.author.username}__ **]`,true)
        .addField(':eight_pointed_black_star: » الرسالة', args.replace('[user]' , m))
        .setFooter(`${hero.user.username} :: ${new Date().toLocaleString()}`, hero.user.avatarURL)
        .setColor('BLACK');
        m.send(bcEmbeed).catch(e => i--);
      });
      // message.channel.send(`[** __Error Detected__ **] : ${e} , ${m}`)
    } catch(e) {
      if(e) {
        return message.channel.send(`[** __Error Detected__ **] : ${e}`);
      }
    }
  }
});


const hero = new Discord.Client();
client.on('message',async message => {
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
  };
  if(message.content.startsWith(prefix + "bot")) {
    const millis = new Date().getTime() - client.user.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAT = millis / 1000 / 60 / 60 / 24;
    var iMs = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`${client.user.username} معلومات عن بوت`)
    .setColor('#36393e')
    .addField('» امر البوت', prefix, true)
    .addField('» الرامات المستخدمة', `${(process.memoryUsage().rss / 1048576).toFixed()} ميجا بايت`,true)
    .addField('» سرعة البوت', `${Math.round(client.ping)} ملي سكند`,true)
    .addField('» اصدار التشغيل', `${process.version}`,true)
    .addField('» اصدار الدسكورد',`v${Discord.version}`, true)
    .addField('» تم تشغيل البوت منذ', `${timeCon(process.uptime())}`, true)
    .addField('» السيرفرات', client.guilds.size,true)
    .addField('» المستخدمين', client.users.size,true)
    .addField('» صانع البوت', `${client.users.get('323885452207587329').tag} ${client.users.get('456641975932813345').tag} ${client.users.get('406143689984049152').tag} ${client.users.get('298732816995319809').tag}\n منذ ${createdAT.toFixed(0)} يومّا`,true)
    .setFooter(`${client.user.username} :: ${new Date().toLocaleString()}`);
    message.channel.send(iMs);
  }
});

client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '${prefix}color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`:eight_pointed_black_star: » لا يوجد لون بهذا الأسم`)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`:eight_pointed_black_star: » تم تغيير لونك بنجاح`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
        client.on('message', message => {
                        let args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'cc')) {
    if(!args) return message.channel.send(':eight_pointed_black_star: » اختر عدد الالوان');
             if (!message.member.hasPermission('MANAGE_ROLES')) returnmessage.channel.sendMessage(':eight_pointed_black_star: » ليس لديك البرمشن المطلوب'); 
              message.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            message.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on("message", message => {
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":eight_pointed_black_star: » ليس لديك البرمشن المطلوب");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .setColor("RANDOM")
.setDescription(`**
:eight_pointed_black_star: » مالك السيرفر \` ${message.guild.owner.user.username} \`                                        
:eight_pointed_black_star: » عدد الأغضاء\` ${message.guild.memberCount}\`
:eight_pointed_black_star: » عدد الرومات \`${message.guild.channels.size}\`
\`#\`${message.guild.channels.filter(m => m.type === 'text').size} \`🔈\`${message.guild.channels.filter(m => m.type === 'voice').size}
:eight_pointed_black_star: » عدد الرومات ${message.guild.roles.size}
**  `)
        message.channel.send({embed:embed})
    }
});

//.

client.on('guildCreate', guild => {
var message = "zg";
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('S Bot Link Click Here .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=465885551329804288&permissions=8&scope=bot')
  .setDescription(`**
  New Server Add S Bot ✅
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
client.channels.get("473778799092301825").sendEmbed(embed)
});

client.on('guildDelete', guild => {
var message = "zg";
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('S Bot Link Click Here .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=465885551329804288&permissions=8&scope=bot')
  .setDescription(`**
  Server Kicked S Bot :cry:
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
client.channels.get("473778799092301825").sendEmbed(embed)
});





client.on('message', message => {
    if(message.content.startsWith(prefix+'help')) {
        
        message.channel.send(':eight_pointed_black_star: » تم أرسال الأوامر في الخاص')
    }
});


client.on('message', message => {
    if(message.content.startsWith(prefix+'help')) {
   const embed = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**

        
╭━━━╮╭━━╮╱╱╱╭╮
┃╭━╮┃┃╭╮┃╱╱╭╯╰╮
┃╰━━╮┃╰╯╰┳━┻╮╭╯
╰━━╮┃┃╭━╮┃╭╮┃┃
┃╰━╯┃┃╰━╯┃╰╯┃╰╮
╰━━━╯╰━━━┻━━┻━╯

General's Commands. :earth_asia: 
${prefix}server - معلومات عن سيرفرك :scroll:   
${prefix}id - الأيدي حقك :flashlight: 
${prefix}avatar - صورة بروفايلك الشخصي :frame_photo: 
${prefix}time - الوقت الحالي - السعودية فقط :flag_sa: 
${prefix}voice - معرفة عدد المتواجدين بالصوت :microphone: 
${prefix}allbots - رؤية جميع بوتات السيرفر :robot:
${prefix}ping - رؤية سرعة اتصالك :stopwatch:  
${prefix}mcstats - يعطيك معلومات لأي سيرفر ماين كرافتي :crossed_swords: 
${prefix}search - للبحث عن اسم شخص معك بالسيرفر :battery: 
${prefix}channels - لرؤية رومات السيرفر :urn: 
${prefix}at - لكتابة ما تكتبة في انجاز ماين كرافتي :hole:
${prefix}color - لأختيار لونك في السيرفر :heart: 
${prefix}invite - معلومات عن الدعوة :soccer: 
        **
        `)
      const embed3 = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**
Other's :briefcase:
${prefix}inv - لدعوة البوت :pen_fountain: 
${prefix}sup - الدعم الفني :nut_and_bolt:         
  **      `)
         const embed2 = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**
Admin's Commands. :wrench: 
${prefix}ban - أمر الباند :no_entry:
${prefix}kick - أمر الكيك  :outbox_tray:
${prefix}cc - صنع ألوان :heart:
${prefix}bc - البرودكاست :mega:
${prefix}clear - مسح الشات :hourglass_flowing_sand: 
${prefix}role - لأعطاء رتبة لـ أحد الأعضاء :key: 
${prefix}rerole - لآزالة الرتبة من أحد الاعضاء 
${prefix}temp on - لتفعيل الرومات الموقتة :microphone: 
${prefix}temp off - لـ الالغاء تفعيل الرومات الموقتة 
${prefix}giveaway - قيف اواي :tada:
${prefix}setvoice - لعمل روم بآالمتصلين بالصوت في السيرفر :telephone_receiver: 

  **      `)
    message.author.send(embed).catch(e => message.channel.send(':eight_pointed_black_star: » فشل ارسال الرسالة .. يجب عليك ان لا تقفل خاصك'));
    message.author.send(embed2).catch(e => {return});
    message.author.send(embed3).catch(e => {return;});
}
});

client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':eight_pointed_black_star: » ليس لديك البرمشن المطلوب');
    message.channel.send(`:eight_pointed_black_star: » أرسل اسم الروم الخاص بالقيف أواي`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':eight_pointed_black_star: » لم اجد هذا الروم');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star: » أرسل وقت القيف أواي').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':eight_pointed_black_star: » الوقت بالأرقام فقط ');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star: » أرسل الشيء المراد عمل قيف اواي عليه').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on('message', message => {
    if(message.content.startsWith(prefix+'sup')) {
message.author.send('https://discord.gg/dGkWV7Z')
    }
});

const sql = require("sqlite");
client.on("message", async message => {
    if (message.content.startsWith(prefix + "at")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send(":eight_pointed_black_star: » اكتب محتوي الانجاز");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});





  client.on('message',async message =>{ 
    if(message.content.startsWith(prefix + "channels")) {
        let i = 1;
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL)
        .setDescription(message.guild.channels.map(c => `\`${i++}\` - **${c.name}**`))
        .setFooter(message.guild.channels.size + ' Channels in the server!');
        message.channel.send(embed).then(msg => {
            msg.delete(25000);
            message.delete(25000);
        });
    }
});




client.on("message", message => {

	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':eight_pointed_black_star: » لا تملك البرمشن المطلوب');
	if( msg.toLowerCase().startsWith( prefix + 'rerole' ) ){
		if( !args[0] ) return message.reply( ':eight_pointed_black_star: » يرجي وضع اسم الشخص المراد  ازالة الرتبة منهه' );
		if( !args[1] ) return message.reply( ':eight_pointed_black_star: » يرجي وضع الرتبة المراض ازالتها من الشخص' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( ':eight_pointed_black_star: » يرجي وضع اسم الرتبة المراض ازالتها من الشخص' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply(':eight_pointed_black_star: » [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من ');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply(':eight_pointed_black_star: » [ '+role1.name+' ] تم سحب من الكل رتبة');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply(':eight_pointed_black_star: »  [ '+role1.name+' ] تم سحب رتبة');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply(':eight_pointed_black_star: » [ '+role1.name+' ] تم سحب  رتبة');
		} 	
	} else {
		if( !args[0] ) return message.reply( ':eight_pointed_black_star: » يرجى وضع الشخص المراد اعطائها الرتبة' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( ':eight_pointed_black_star: » يرجى وضع الرتبة المراد اعطائها للشخص' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply(':eight_pointed_black_star: » [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء ');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply(':eight_pointed_black_star: » [ '+role1.name+' ] تم اعطاء الكل رتبة');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply(':eight_pointed_black_star: » [ '+role1.name+' ] تم اعطاء البوتات رتبة');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply(':eight_pointed_black_star: »  [ '+role1.name+' ] تم اعطاء الكل رتبة');
		} 
	} 
});
client.on('message', message => {
            if(!message.channel.guild) return;
var args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bcall')){
 if (message.author.id !== '456641975932813345') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '456641975932813345') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', message => {
if(message.content == '<@465885551329804288>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
  




client.on('message', message => {
           var currentTime = new Date(),
           hours = currentTime.getHours() + 0 ,
           minutes = currentTime.getMinutes(),
           seconds = currentTime.getSeconds(),
           years = currentTime.getFullYear(),
           month = currentTime.getMonth() + 1,
           day = currentTime.getDate(),
           week = currentTime.getDay();
      
            

           if (minutes < 10) {
               minutes = "0" + minutes;
           }
           var suffix = "AM";
           if (hours >= 12) {
               suffix = "PM";
               hours = hours - 12;
           }
           if (hours == 0) {
               hours = 12;
           }
               if(message.content.startsWith(prefix+'time')) {
                   const embed = new Discord.RichEmbed()
          .addField(`:eight_pointed_black_star: » الوقت `,` ** 「  ${hours} : ${minutes} : ${suffix} 」**`)
.addField(`:eight_pointed_black_star: » التاريخ`,`**「 ${years} : ${month} : ${day} 」**`)

          
message.channel.send(embed)
}
});   
client.on('message',function(message) {
   if(message.content === prefix + "inv") {
       if(!message.channel.guild) return;
       var mmmmEmbed = new Discord.RichEmbed()
       .setAuthor(client.user.username)
       .setTitle(':eight_pointed_black_star: »  اضغط هنا.')
       .setURL(`https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288`)
       .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL);
       message.channel.send(mmmmEmbed)
   }
});















//,,,,






















client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  var command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
   var textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send(":eight_pointed_black_star: » ضع عدد الرسائل التي تريد مسحه").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send(":eight_pointed_black_star: » عدد الرسائل التي تم مسحها").then(m => m.delete(3000));
        }    
    }
}
});

  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply(':eight_pointed_black_star: » الأمر للسيرفرات');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(":eight_pointed_black_star: » انت لا تملك الصلاحيات المطلوبه");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply(":eight_pointed_black_star: » يجب ان يملك البوت برمشن");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply(":eight_pointed_black_star: » منشن شخص");
  if (!message.guild.member(user)
  .bannable) return message.reply(":eight_pointed_black_star: » يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة");


  message.guild.member(user).ban(7, user);

message.channel.send(`:eight_pointed_black_star: » تم تبنيد ${user.tag} من السيرفر`)

}
});
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply(':eight_pointed_black_star: » الأمر للسيرفرات');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(":eight_pointed_black_star: » انت لا تملك الصلاحيات المطلوبه");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply(":eight_pointed_black_star: » يجب ان يملك البوت برمشن");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply(":eight_pointed_black_star: » منشن شخص");
  if (!message.guild.member(user)
  .bannable) return message.reply(":eight_pointed_black_star: » يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طردة");


  message.guild.member(user).kick(7, user);

message.channel.send(`:eight_pointed_black_star: » تم طرد ${user.tag} من السيرفر` )

}
});




 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith(prefix + "avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});






 

        client.on('message', async message => {
			if(message.content.includes('discord.gg')){ 
			    if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
.setDescription(`**  :eight_pointed_black_star: » تمت معاقبتك
  بسبب نشر الروابط  
`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(` S Bot © | 2018.`)
     message.channel.send(embed500)
   
       
    }
})



   



client.on("message", async function(message)  {
if(message.content.startsWith(prefix + "voice")) {
    message.channel.send(`**الاعضاء المتواجدون حاليا : ${message.guild.members.filter(member => member.voiceChannel).size}**`);

    message.channel.send('```\n'+message.guild.members.filter(member => member.voiceChannel).map(m => m.user.tag).join('\n') + '```');

}
});

client.on('message', message => {
     if(!message.channel.guild) return;

                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**لقد وجد البوت ${message.guild.members.filter(m=>m.user.bot).size} بوت في السيرفر :electric_plug: **
${botssize.join('\n')}`)
.setFooter(` S Bot © | 2018.`)
.setTimestamp();
message.channel.send(embed)

}


});


client.on('message', message => {

  if(message.content.startsWith(prefix+'ping')) {
    message.channel.send('**:stopwatch: Pinging...**').then(sent => {
      sent.edit(`**Pong! Took ${sent.createdTimestamp - message.createdTimestamp} ms :stopwatch: **`)
})
}
    

         
     });
const dateFormat = require('dateformat');
client.on('message',async message => {
  if(message.content.startsWith(prefix + "id")) {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
      message.guild.fetchInvites().then(invs => {
    let user = message.author;
    let personalInvites = invs.filter(i => i.inviter.id === user.id);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    const millis = new Date().getTime() - message.author.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const created = millis / 1000 / 60 / 60 / 24;
    const milliss = new Date().getTime() - message.guild.member(message.author).joinedAt.getTime();
    const nows = new Date();
    dateFormat(nows, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const joined = milliss / 1000 / 60 / 60 / 24;
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('#36393e')
    .setThumbnail(message.author.avatarURL)
    .addField('» مضى على دخولك الدسكورد', `${created.toFixed(0)} يومّا`,true)
    .addField('» مضى على دخولك السيرفر', `${joined.toFixed(0)} يومّا`,true)
    .addField('» دعوات',inviteCount,true)
    .setFooter(' S Bot © | 2018.');

    message.channel.send(embed);
  });
  }
});
const temp = {};
client.on('message', async message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!temp[message.guild.id]) temp[message.guild.id] = {
	time: "3000",
	category : 'click here',
	channel : 'click here'
}
      if(message.content.startsWith(prefix+'temp on')){
          if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
  var ggg= message.guild.createChannel('click here', 'category').then(cg => {
   var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
        ch.setParent(cg)
    message.channel.send('**Done ,**')
client.on('message' , message => {
 if(message.content === '${prefix}temp off') {
     if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
cg.delete()
ch.delete()
message.channel.send('**Done ,**')
}
});
const time = temp[message.guild.id].time
client.on('message' , message => {
  if (message.content.startsWith(prefix + "temptime")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newTime= message.content.split(' ').slice(1).join(" ")
    if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
    temp[message.guild.id].time = newTime
    message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
  }
});
    client.on('voiceStateUpdate', (old, neww) => {
    let newUserChannel = neww.voiceChannel
    let oldUserChannel = old.voiceChannel
    temp[message.guild.id].category = cg.id
    temp[message.guild.id].channel = ch.id
    let channel = temp[message.guild.id].channel
    let category = temp[message.guild.id].category
    if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
        neww.guild.createChannel(neww.displayName , 'voice').then(c => {
            c.setParent(category)
  let scan = setTimeout(()=>{
if(!neww.voiceChannel) {
  c.delete();
  client.channels.get(channel).overwritePermissions(neww, {
										CONNECT:true,
							             SPEAK:true
		})
}
  }, temp[neww.guild.id].time);
						 			 c.overwritePermissions(neww, {
										 CONNECT:true,
							             SPEAK:true,
							             MANAGE_CHANNEL:true,
										 MUTE_MEMBERS:true,
										 DEAFEN_MEMBERS:true,
										 MOVE_MEMBERS:true,
										 VIEW_CHANNEL:true
						 })
						               neww.setVoiceChannel(c)

		})
                                        client.channels.get(channel).overwritePermissions(neww, {
										 CONNECT:false,
							             SPEAK:false
		})

	}


})

})
})
}
});

client.login(process.env.BOT_TOKEN)
