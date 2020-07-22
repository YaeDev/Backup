const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'main',
      memberName: 'main',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }
async run(message, client){
const language = await db.fetch(`language_${message.guild.id}`)
let bl3 = await db.fetch(`blist_${message.author.id}`)
let blreasom = await db.fetch(`blreason_${message.author.id}`)
if(bl3 === '<:enabled:730821706347708437>')
if(language === 1) {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}> , Você está banido!**
:notepad_spiral: **| Motivo:** \`${blreasom}\``)
} else {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}> , You are banned!!**
:notepad_spiral: **| Reason:** \`${blreasom}\``)
}
const del = await db.fetch(`del_${message.guild.id}`)
if(del === 1) {
message.delete()}
let modembed = db.fetch(`modemblem_${message.client.user.id}`)
let funembed = db.fetch(`funemblem_${message.client.user.id}`)
let allembed = db.fetch(`allemblem_${message.client.user.id}`)
let miscembed = db.fetch(`miscemblem_${message.client.user.id}`)
if(miscembed === null) miscembed = '<:dnd:733128296602140712>'
if(allembed === null) allembed = '<:dnd:733128296602140712>'
if(funembed === null) funembed = '<:dnd:733128296602140712>'
if(modembed === null) modembed = '<:dnd:733128296602140712>'
if(language === 1){
const embed = new MessageEmbed()
.setTitle('Painel ○ Manutenção')
.setDescription(`
<a:Sirene:733320049154195497> Todos os comandos: ${allembed} 
❀┃⟿⟿┃Módulos┃⟿⟿┃❀
<a:hana_staff2:733130665201238087> Moderação: ${modembed}
<a:TsukihiLaugh:733130985440411682> Diversão: ${funembed}
<:config:729074945522532412> Diversos: ${miscembed}
❀┃┃⟿⟿┃Cmds┃⟿⟿┃┃❀
<:hana_arrow:729074687145017435> **h!main all**
<:hana_arrow:729074687145017435> **h!main module**
❀┃⟿⟿⟿⟿⟿⟿⟿┃❀
`)
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/733316053660074025/20200716_103432_0000.png')
/// ////
const { prefix } = require('../../config.json')
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
////////
if(!args[1]) return message.say(embed)
////////
if(message.author.id != '700805591094001692'){
return message.say('<a:erro:729089430685614092> ┃ Você não tem permissão para usar este comando! **Apenas o meu desenvolvedor tem acesso!**')}
//////
if(args.slice(1).join(" ").includes('all')){

if(db.fetch(`main_${message.client.user.id}`) === null) {
db.set(`main_${message.client.user.id}`, 1)
return message.channel.send('**<a:verified:699016377574490243> | Todos os meus comandos estão em manutenção!**')
}
if(db.fetch(`main_${message.client.user.id}`) === 1) {
db.set(`main_${message.client.user.id}`, null)
return message.channel.send('**<a:verified:699016377574490243> | Todos os meus comandos foram removidos da manutenção!**')
}

}
/////////
if(args.slice(1).join(" ").includes('module')){
message.say('**<:channel:733109261474725937> | Qual módulo você deseja adicionar/remover na manutenção?**').then(msg => {msg.delete({timeout: 15000})})
        var response = await message.channel.awaitMessages(
          msg =>
            msg.content === 'moderation' || msg.content === 'Moderation' || msg.content === 'Fun' || msg.content === 'fun' || msg.content === 'cancel',
          {
            max: 1,
            time: 15000,
            errors: ['time']
          }
        );
if (response.first().content === 'cancel'){  
response.first().delete()
return message.say('**<a:erro:729089430685614092> | Cancelado!**').then(msg => {msg.delete({timeout: 15000})})
                                          }
if (response.first().content === 'moderation'){
response.first().delete()
if(db.fetch(`mainmod_${message.client.user.id}`) === null) db.set(`mainmod_${message.client.user.id}`, 0) 
if(db.fetch(`mainmod_${message.client.user.id}`) === 0) {
  db.set(`modemblem_${message.client.user.id}`, '<:online:733128261407604789>')
db.set(`mainmod_${message.client.user.id}`, 1)
return message.say('**<a:verified:699016377574490243> | O módulo `MODERATION` foi adicionado para manutenção!**').then(msg => {msg.delete({timeout: 15000})})
}

if(db.fetch(`mainmod_${message.client.user.id}`) === 1) {
db.set(`modemblem_${message.client.user.id}`, '<:dnd:733128296602140712>')
db.set(`mainmod_${message.client.user.id}`, 0)
return message.say('**<a:verified:699016377574490243> | O módulo `MODERATION` foi removido da manutenção!**').then(msg => {msg.delete({timeout: 15000})})
}
}

if (response.first().content === 'fun'){ 
response.first().delete()
if(db.fetch(`mainfun_${message.client.user.id}`) === null) db.set(`mainfun_${message.client.user.id}`, 0)
if(db.fetch(`mainfun_${message.client.user.id}`) === 0) {
  db.set(`funemblem_${message.client.user.id}`, '<:online:733128261407604789>')
db.set(`mainfun_${message.client.user.id}`, 1)
 return message.say('**<a:verified:699016377574490243> | O módulo `FUN` foi adicionado para manutenção!**').then(msg => {msg.delete({timeout: 15000})})
}

if(db.fetch(`mainfun_${message.client.user.id}`) === 1) {
db.set(`mainfun_${message.client.user.id}`, 0)
 return message.say('**<a:verified:699016377574490243> | O módulo `FUN` foi removido da manutenção!**').then(msg => {msg.delete({timeout: 15000})})
}}
if (response.first().content === 'Fun'){ 
response.first().delete()
if(db.fetch(`mainfun_${message.client.user.id}`) === null) db.set(`mainfun_${message.client.user.id}`, 0)
if(db.fetch(`mainfun_${message.client.user.id}`) === 0) {
  db.set(`funemblem_${message.client.user.id}`, '<:online:733128261407604789>')
db.set(`mainfun_${message.client.user.id}`, 1)
 return message.say('**<a:verified:699016377574490243> | O módulo `FUN` foi adicionado para manutenção!**').then(msg => {msg.delete({timeout: 15000})})
}

if(db.fetch(`mainfun_${message.client.user.id}`) === 1) {
db.set(`mainfun_${message.client.user.id}`, 0)
 return message.say('**<a:verified:699016377574490243> | O módulo `FUN` foi removido da manutenção!**').then(msg => {msg.delete({timeout: 15000})})
}}
if (response.first().content === 'Moderation'){ 
response.first().delete()
if(db.fetch(`mainmod_${message.client.user.id}`) === null) db.set(`mainmod_${message.client.user.id}`, 0) 
if(db.fetch(`mainmod_${message.client.user.id}`) === 0) {
  db.set(`modemblem_${message.client.user.id}`, '<:online:733128261407604789>')
db.set(`mainmod_${message.client.user.id}`, 1)
return message.say('**<a:verified:699016377574490243> | O módulo `MODERATION` foi adicionado para manutenção!**').then(msg => {msg.delete({timeout: 15000})})
}

if(db.fetch(`mainmod_${message.client.user.id}`) === 1) {
db.set(`modemblem_${message.client.user.id}`, '<:dnd:733128296602140712>')
db.set(`mainmod_${message.client.user.id}`, 0)
return message.say('**<a:verified:699016377574490243> | O módulo `MODERATION` foi removido da manutenção!**').then(msg => {msg.delete({timeout: 15000})})
}}
}
}
///////
const embed1 = new MessageEmbed()
.setTitle('Maintence Configuration')
.setDescription(`
<a:Sirene:733320049154195497> All commands: ${allembed} 
❀┃⟿⟿┃Modules┃⟿⟿┃❀
<a:hana_staff2:733130665201238087> Moderation: ${modembed}
<a:TsukihiLaugh:733130985440411682> Fun: ${funembed}
<:config:729074945522532412> Misc: ${miscembed}
❀┃┃⟿⟿┃Cmds┃⟿⟿┃┃❀
<:hana_arrow:729074687145017435> **h!main all**
<:hana_arrow:729074687145017435> **h!main module**
❀┃⟿⟿⟿⟿⟿⟿⟿┃❀
`)
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/733316053660074025/20200716_103432_0000.png')
/// ////
const { prefix } = require('../../config.json')
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
////////
if(!args[1]) return message.say(embed1)
////////
if(message.author.id != '700805591094001692'){
return message.say('<a:erro:729089430685614092> ┃ You can\'t use this command! **Only the bot owner can use this command!**')}
//////
if(args.slice(1).join(" ").includes('all')){

if(db.fetch(`main_${message.client.user.id}`) === null) {
db.set(`main_${message.client.user.id}`, 1)
return message.channel.send('**<a:verified:699016377574490243> | All my commands is now in maintence**')
}
if(db.fetch(`main_${message.client.user.id}`) === 1) {
db.set(`main_${message.client.user.id}`, null)
return message.channel.send('**<a:verified:699016377574490243> | All my commands has been removed from the maintence**')
}

}
/////////
if(args.slice(1).join(" ").includes('module')){
message.say('**<:channel:733109261474725937> | What module do you want to enable/disable?**').then(msg => {msg.delete({timeout: 15000})})
        var response = await message.channel.awaitMessages(
          msg =>
            msg.content === 'moderation' || msg.content === 'fun' || msg.content === 'cancel',
          {
            max: 1,
            time: 36000,
            errors: ['time']
          }
        );
if (response.first().content === 'cancel') {
response.first().delete()
return message.say('**<a:erro:729089430685614092> | Cancelled!**').then(msg => {msg.delete({timeout: 15000})})
}
if (response.first().content === 'moderation'){
response.first().delete()
if(db.fetch(`mainmod_${message.client.user.id}`) === null) db.set(`mainmod_${message.client.user.id}`, 0) 
if(db.fetch(`mainmod_${message.client.user.id}`) === 0) {
  db.set(`modemblem_${message.client.user.id}`, '<:online:733128261407604789>')
db.set(`mainmod_${message.client.user.id}`, 1)
return message.say('**<a:verified:699016377574490243> | Sucessfully set moderation module in maintence mode!**').then(msg => {msg.delete({timeout: 15000})})
}

if(db.fetch(`mainmod_${message.client.user.id}`) === 1) {
db.set(`modemblem_${message.client.user.id}`, '<:dnd:733128296602140712>')
db.set(`mainmod_${message.client.user.id}`, 0)
return message.say('**<a:verified:699016377574490243> | Sucessfully set moderation module out of maintence mode!**').then(msg => {msg.delete({timeout: 15000})})
}
}

if (response.first().content === 'fun'){ 
response.first().delete()
if(db.fetch(`mainfun_${message.client.user.id}`) === null) db.set(`mainfun_${message.client.user.id}`, 0)
if(db.fetch(`mainfun_${message.client.user.id}`) === 0) {
  db.set(`funemblem_${message.client.user.id}`, '<:online:733128261407604789>')
db.set(`mainfun_${message.client.user.id}`, 1)
 return message.say('**<a:verified:699016377574490243> | Sucessfully set fun module in maintence mode!**').then(msg => {msg.delete({timeout: 15000})})
}

if(db.fetch(`mainfun_${message.client.user.id}`) === 1) {
db.set(`mainfun_${message.client.user.id}`, 0)
 return message.say('**<a:verified:699016377574490243> | Sucessfully set fun module out of maintence mode!**').then(msg => {msg.delete({timeout: 15000})})
}}
}
}
}


