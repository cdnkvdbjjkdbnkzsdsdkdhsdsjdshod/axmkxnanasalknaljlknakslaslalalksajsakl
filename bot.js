const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

// ايفنت الرسالة لو واحد رسل رسالة يحصل التالي
client.on('message', msg => {
// البوت يتحقق لو ان الرسالة تبدأ بكلم ة ping
  if (msg.content === 'ping') {
// يقوم البوت يرد على الشخص بكلمة Pong!
// في فرق بين msg.channel.send() و msg.reply()
// msg.channel.send() يرسل الرسالة من غير ما يمنشن الشخص
// msg.reply() يرسل الرسالة ويمنشن الشخص اللي كتب الرسالة
    msg.reply('Pong!');
// خاتمة if(message.content === 'ping') {
  }
// خاتمة الايفنت
});



client.on('message', message => {
    if (message.author.bot) return;
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bcall')){
 if(!message.author.id === '456641975932813345') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(process.env.BOT_TOKEN);
