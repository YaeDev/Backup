const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'emblem',
      aliases: ['fav-server'],
      memberName: 'emblem',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message, client) {
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
const main = db.fetch(`main_${message.client.user.id}`)
if(main === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, all my commands is in maintence!**`)}
const main2 = db.fetch(`mainfun_${message.client.user.id}`)
if(main2 === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, the module \`FUN\` is in maintence!**`)}


if(language === 1){ 

 const { prefix } = require('../../config.json')
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
const amount = parseInt(args.slice(1).join(" "));
if(isNaN(amount)) {
 return message.say(`Não consigo nenhum servidor com o ID: \`${args.slice(1).join(" ")}\`...`)
}
if(message.client.guilds.cache.get(`${args[0]}`) == "undefined" || message.client.guilds.cache.get(`${args[1]}`) == null) return message.say('<a:erro:720379774882545724> ┃ **Eu não consigo achar esse servidor! Talvez eu não esteja nele ou o id providenciado está inválido.**')
let gemblem2 = await db.fetch(`gemblem_${message.client.guilds.cache.get(`${args[1]}`).id}`)
if(gemblem2 === null || gemblem2 === 'undefined') return message.say('<a:erro:720379774882545724> ┃ **Esse servidor não possui um emblema!**')
db.add(`cu_${message.author.id}`, 1)
db.set(`gemblem_${message.author.id}`, gemblem2)
db.set(`gemblemsid_${message.author.id}`, 2)
db.set(`gguild_${message.author.id}`, `(${message.client.guilds.cache.get(`${args[1]}`).name})`)

return message.say(`O seu servidor favorito foi alterado para o servidor ${message.client.guilds.cache.get(`${args.slice(1).join(" ")}`).name} com sucesso!`)


}

//English
 const { prefix } = require('../../config.json')
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
const amount = parseInt(args.slice(1).join(" "));

if(isNaN(amount)) {
 return message.say(`I can't find any guild with the ID: \`${args.slice(1).join(" ")}\`...`)
}
if(message.client.guilds.cache.get(`${args[0]}`) == "undefined" || message.client.guilds.cache.get(`${args[1]}`) == null) return message.say('<a:erro:720379774882545724> ┃ **Invalid guild id has been given or I\'m not in this guild.**')
let gemblem2 = await db.fetch(`gemblem_${message.client.guilds.cache.get(`${args[1]}`).id}`)
if(gemblem2 === null || gemblem2 === 'undefined') return message.say('<a:erro:720379774882545724> ┃ **The selected guild doesn\'t have an emblem!**')
db.add(`cu_${message.author.id}`, 1)



message.say(`Your favorite guild has been changed to **${message.client.guilds.cache.get(`${args.slice(1).join(" ")}`).name}**! `)
db.set(`gemblem_${message.author.id}`, gemblem2)
db.set(`gemblemsid_${message.author.id}`, 2)
db.set(`gguild_${message.author.id}`, `(${message.client.guilds.cache.get(`${args[1]}`).name})`)

}
}