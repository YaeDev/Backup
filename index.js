//UPTIME CALLBACK
const http = require('http');
const express = require('express');
const app = express();
var server = http.createServer(app);
const Discord = require('discord.js');
const db = require('quick.db')
const { prefix, token } = require('./config.json');





const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const path = require('path');


Structures.extend('Guild', Guild => {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
  }
  return MusicGuild;
});


const client = new CommandoClient({
    commandPrefix: prefix,
    owner: '700805591094001692',
    disableEveryone: true,
    unknownCommandResponse: false
});

client.registry
  .registerDefaultTypes()
  .registerGroups([['music', 'Music Command Group']])
  .registerGroups([['misc', 'Other commands']])
  .registerGroups([['hana', 'Hana Support Commands']])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: true,
    prefix: false,
    commandState: false,
    unknownCommand: false,
    help: false,
    ping: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));
const marry = 'No one'
const aboutme = 'Im using Hana!I'
 console.log('Ready!');
  setInterval(async () => {
    let textList = [
      `📣 Pro Tip: Use ping, prefix and other commands in my dm!`,
    ];  
    var text = textList[Math.floor(Math.random() * textList.length)];
    client.user.setActivity(text, { 
            name: 'Watching my guilds!',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"});
  }, 15000);
  setInterval(async () => {

var textlist2 = [
      `💠 ${client.guilds.cache.size} guilds!`,
      `👥 ${client.users.cache.size} users!`,
]  
    var text = textlist2[Math.floor(Math.random() * textlist2.length)];
    client.user.setActivity(text, { 
            type: "WATCHING",});
}, 40000);
  setInterval(async () => {

var textlist2 = [
      `🎯 Version 2.5.8A!`,
      `🎨 Design by ${client.users.cache.get('595053305529499662').tag}!`,
]  
    var text = textlist2[Math.floor(Math.random() * textlist2.length)];
    client.user.setActivity(text, { 
            type: "PLAYING",});
}, 52000);
  setInterval(async () => {

var textlist2 = [
      `🎯 Version 2.5.8A!`,
]  
    var text = textlist2[Math.floor(Math.random() * textlist2.length)];
    client.user.setActivity(text, { 
            type: "PLAYING",});
}, 117000);


client.on("guildCreate", async guild => { // milliseconds
client.channels.cache.get('734577186182267070').send(`
🎉┇ Entrei em um novo servidor!
<:info:729075450315407507> ┇ Nome: ${guild.name}
<:update_member:733366682562723840> ┇ Membros: ${guild.members.cache.size}
<:owner:733110769658364015> ┇ Dono: <@${guild.owner.id}> - (${guild.owner.id})
`)
})

client.on("guildDelete", async guild => { // milliseconds
client.channels.cache.get('734577186182267070').send(`
😭 ┇ Sai de um servidor!
<:info:729075450315407507> ┇ Nome: ${guild.name}
<:update_member:733366682562723840> ┇ Membros: ${guild.members.cache.size}
<:owner:733110769658364015> ┇ Dono: <@${guild.owner.id}> - (${guild.owner.id})
`)
})


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  // coamdno ping
  if(comando === "ping") {
const language = await db.fetch(`language_${message.guild.id}`)
if(language === 1){
const m = await message.channel.send("🏓 Ping?");
let days = Math.floor(client.uptime / 86400000); 
let hours = Math.floor(client.uptime / 3600000) % 24; 
let minutes = Math.floor(client.uptime / 60000) % 60; 
let seconds = Math.floor(client.uptime / 1000) % 60; 
const embed = new MessageEmbed()
.setTitle(`🏓 Ping-Pong!`) 
.setColor('RANDOM')
.addField(`⚡ Latência:`,  `${m.createdTimestamp - message.createdTimestamp}ms.`)
.addField(`📢 Latência (API):`, `${Math.round(client.ws.ping)}ms`)
.addField(`⌚ Uptime`, `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`)
return m.edit(`<@${message.author.id}>`, embed)

}
let days = Math.floor(client.uptime / 86400000); 
let hours = Math.floor(client.uptime / 3600000) % 24; 
let minutes = Math.floor(client.uptime / 60000) % 60; 
let seconds = Math.floor(client.uptime / 1000) % 60; 
const m = await message.channel.send("🏓 Ping?");
const embed = new MessageEmbed()
.setTitle(`🏓 Ping-Pong!`) 
.setColor('RANDOM')
.addField(`⚡ Lantecy:`,  `${m.createdTimestamp - message.createdTimestamp}ms.`)
.addField(`📢 Latency (API):`, `${Math.round(client.ws.ping)}ms`)
.addField(`⌚ Uptime`, `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
m.edit(`<@${message.author.id}>`, embed)
  }
})

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  // coamdno ping
const user = message.mentions.users.first()

  if(comando === "stats") {
const res = bot.shard.fetchClientValues('guilds.cache.size');
console.log(res);
  }})
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  // coamdno ping
const user = message.mentions.users.first()

  if(comando === "add-money") {
if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
if(!user){
return message.say('Please mention the user you want to add money')
}
message.channel.send(`Sucessfully added \`${args[1]}\` to <@${user.id}> balance!`)
db.add(`credits_${user.id}`, args[1])
  }
})
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  // coamdno ping
const user = message.mentions.users.first()

  if(comando === "remove-money") {
if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
if(!user){
return message.say('Please mention the user you want to add money')
}
message.channel.send(`Sucessfully removed \`${args[1]}\` from <@${user.id}> balance!`)
db.subtract(`credits_${user.id}`, args[1])
  }
})

                                         
  client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  // coamdno ping
const user = message.mentions.users.first()

  if(comando === "setback") {
const { Canvas } = require("canvas-constructor")
const canvas = require('canvas');
db.set(`background_${message.author.id}`, args.slice(0).join(" "))
db.set(`backid_${message.author.id}`, 1)
const back = await db.fetch(`background_${message.author.id}`)
const img = await canvas.loadImage(`${back}`)
const mage = new Canvas(1280, 720)
.addImage(img, 0, 0, 1280, 720)
.toBuffer()
message.channel.send({files: [mage]})
  }
  })                      

                    
  
  



client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "bh") {

if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully added \`${user.username}\` has a **Bug Hunter** member!`)
db.set(`hanabh4_${user.id}`, '<:bughunter:721019880760934400>')

  }
})
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "dev") {

if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
const { Canvas } = require("canvas-constructor")
const canvas = require('canvas');
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully added \`${user.username}\` has a **dev** member!`)
db.set(`vip_${user.id}`, 'Active') 
db.set(`hanavip5_${user.id}`, '<:hana_vip:729071381051998268>') 
db.set(`hanabh5_${user.id}`, '<:bughunter:729076247308664944>')
db.set(`hanastaff5_${user.id}`, '<:hana_staff:729076201276178493>')
db.set(`hanadev5_${user.id}`, 1)
  }
})
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "hp") {
if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully added \`${user.username}\` in **Hana Partner Program!**`)
db.set(`vip_${user.id}`, 'Active') 
db.set(`hanavip5_${user.id}`, '<:hana_vip:726275445313634314>') 
db.set(`hanap5_${user.id}`, '<:hana_partner:721021327061942272>') 
  }
})
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "staff") {
if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully added \`${user.username}\` has a **staff** member!`)
db.set(`vip_${user.id}`, 'Active') 
db.set(`hanavip5_${user.id}`, '<:hana_vip:729071381051998268>') 
db.set(`hanastaff5_${user.id}`, '<:sstaff:729076201276178493>')
  }
})

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "unvip") {

if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully removed \`${user.username}\` has a vip member!`)
db.set(`vip_${user.id}`, 'Not Active')
db.set(`hanavip5_${user.id}`, '')
}


})
// # Verificador-de-Votos

client.login(token);
