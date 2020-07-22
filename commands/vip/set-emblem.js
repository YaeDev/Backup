const { Command } = require('discord.js-commando');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'set-emblem',
      aliases: ['gemblem'],
      memberName: 'set-emblem',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }

 async run(message) {
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
const { prefix } = require('../../config.json')
const emblem = await db.fetch(`vipid_${message.guild.id}`)
const lang = await db.fetch(`language_${message.guild.id}`)
if(lang === 1){
if(emblem != 1){
return message.say('<a:erro:720379774882545724> ┃ Seu servidor não está no serviço Hana Premium For Servers!')
}
if(message.author.id != message.guild.owner.id){
return message.say('<a:erro:720379774882545724> ┃ Apenas a posse do servidor pode alterar o emblema')}
const args = message.content.slice(prefix.length).trim().split(/ +/g);
if(!args[1]){
return message.say('<a:erro:720379774882545724> ┃ Coloque um argumento!')
}

db.set(`gemblem_${message.guild.id}`, `${args.slice(1).join(" ")}`)
db.set(`gemblemsid_${message.guild.id}`, 1)
return message.channel.send(`O novo emblema/frase deste servidor foi setado para: ${args.slice(1).join(" ")}`)


}
if(emblem != 1){
return message.say('<a:erro:720379774882545724> ┃ Your guild aren\'t in Hana Premium For Servers!')
}
const args = message.content.slice(prefix.length).trim().split(/ +/g);
if(message.author.id != message.guild.owner.id){
return message.say('<a:erro:720379774882545724> ┃ Only the guild owner can change the emblem')}
if(!args[1]){
return message.say('<a:erro:720379774882545724> ┃ Provide an argument!')
}


message.channel.send(`The new guild emblem/sentence now is: ${args.slice(1).join(" ")}`)
db.set(`gemblem_${message.guild.id}`, `${args.slice(1).join(" ")}`)
db.set(`gemblemsid_${message.guild.id}`, 1)
 }
}