const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'marry',
      aliases: ['casar'],
      memberName: 'marry',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
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

const main = db.fetch(`main_${message.client.user.id}`)
if(main === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, all my commands is in maintence!**`)}
const main2 = db.fetch(`mainfun_${message.client.user.id}`)
if(main2 === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, the module \`FUN\` is in maintence!**`)}

db.add(`cu_${message.author.id}`, 1)
const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const path = require('path');
const { prefix } = require('../../config.json')
const client = new CommandoClient({
    commandPrefix: prefix,
    owner: '700805591094001692',
    disableEveryone: true,
    unknownCommandResponse: false
});
const user = message.mentions.users.first()
const embederror2 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Mencione alguém para você se casar!`)
.setColor('RED')
if(!user){
if(language === 1) {
 return message.say(embederror2)
} else {
const embederror23 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Mention someone to get married!`)
.setColor('RED')
return message.say(embederror23)
}


}
let bl32 = await db.fetch(`blist_${user.id}`)
let blreasom2 = await db.fetch(`blreason_${user.id}`)
if(bl32 === '<:enabled:730821706347708437>')
if(language === 1) {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}> , <@${user.id}> está banido!**
:notepad_spiral: **| Motivo:** \`${blreasom2}\``)
} else {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}>, <@${user.id}> is banned!**
:notepad_spiral: **| Reason:** \`${blreasom2}\``)
}
if(language === 1){

const embederror23 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não pode se casar comigo!`)
.setColor('RED')
if(user.id === '710137790897062059') return message.channel.send(embederror23)
const embederror = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não pode casar com você mesmo!`)
.setColor('RED')
if(message.author.id === user.id) {
return message.say(embederror)
}
const embederror3 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ ${user.username} não pode se casar com você! Ele(a) precisa de no mínimo 5000 créditos!`)
.setColor('RED')
const embederror4 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não pode se casar com ${user.username}! Você precisa de no mínimo 5000 créditos!`)
.setColor('RED')
let credits = db.fetch(`credits_${message.author.id}`)
let credits4 = db.fetch(`credits_${user.id}`)
if(credits4 < 5000  ){
return message.channel.send(embederror3)
}
if(credits < 5000  ){
return message.channel.send(embederror4)
}
let married =   db.fetch(`marry4_${message.author.id}`)
let married3 = db.fetch(`marry4_${user.id}`)
const embedmarry = new MessageEmbed()
.setTitle(`<a:verified:699016377574490243> | ${user.username}, você quer se casar com ${message.author.username}?`)
if(married3 === null) db.set(`marry4_${user.id}`, 'Alone')
if(married === null) db.set(`marry4_${message.author.id}`, 'Alone')
if(married === 'Alone' ) {
 return message.channel.send(embedmarry).then(msg =>{
msg.react('699016377574490243')

   let filtro6 = (reaction, usuario) => reaction.emoji.name === "verified" && usuario.id === user.id
   let coletor6 = msg.createReactionCollector(filtro6, {max: 1, time: 60000})

coletor6.on("collect", cp => {
  const embed = new MessageEmbed()
  .setTitle('<a:hana_tada:729079503317368904> ┃ Parabéns! Felicidades ao casal!')
msg.delete()
message.channel.send(embed)
db.subtract(`credits_${user.id}`, 5000)
db.subtract(`credits_${message.author.id}`, 5000)
db.set(`marry4_${message.author.id}`, `${user.tag}`) 
db.set(`marryid_${message.author.id}`, user.id) 
db.set(`marryid2_${user.id}`, message.author.id)
db.set(`marry4_${user.id}`, `${message.author.tag}`)
db.set(`hanamarry5_${user.id}`, ':ring:')
db.set(`hanamarry5_${message.author.id}`, ':ring:')
})
 })
} else {
return message.channel.send('O comando não pode ser continuado, talvez você ou ele/ela ja estejam casados...')
}
}
const embederror23 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Mention someone to get married!`)
.setColor('RED')
if(!user) return message.say(embederror23)
const embederror = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ You cannot get married with yourself!`)
.setColor('RED')
const embederror5 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ You cannot get married with me!`)
.setColor('RED')
if(user.id === '710137790897062059') return message.say(embederror5)
if(message.author.id === user.id) {
return message.say(embederror)
}
let married =   db.fetch(`marry4_${message.author.id}`)
let married3 = db.fetch(`marry4_${user.id}`)
const embederror3 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ ${user.username} can't get married with you! He/She needs at minimum 5000 credits!`)
.setColor('RED')
const embederror4 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não pode se casar com ${user.username}! You need at minimum 5000 credits!`)
.setColor('RED')
let credits = db.fetch(`credits_${message.author.id}`)
let credits4 = db.fetch(`credits_${user.id}`)
if(credits4 < 5000  ){
return message.channel.send(embederror3)
}
if(credits < 5000  ){
return message.channel.send(embederror4)
}
const embedmarry = new MessageEmbed()
.setTitle(`<a:verified:699016377574490243> | ${user.username}, do you want to get married with ${message.author.username}?`)
if(married === 'Alone') {
 return message.channel.send(embedmarry).then(msg =>{
msg.react('699016377574490243')

   let filtro6 = (reaction, usuario) => reaction.emoji.name === "verified" && usuario.id === user.id
   let coletor6 = msg.createReactionCollector(filtro6, {max: 1, time: 180000})

coletor6.on("collect", cp => {
const embed = new MessageEmbed()
  .setTitle('<a:hana_tada:729079503317368904> ┃ Congratulations! Now you two are married!')
msg.delete()
message.channel.send(embed)

db.set(`marryid2_${user.id}`, message.author.id)
db.subtract(`credits_${user.id}`, 5000)
db.subtract(`credits_${message.author.id}`, 5000)
db.set(`marry4_${message.author.id}`, `${user.tag}`) 
db.set(`marryid_${message.author.id}`, user.id) 
db.set(`marry4_${user.id}`, `${message.author.tag}`)
db.set(`hanamarry5_${user.id}`, ':ring:')
db.set(`hanamarry5_${message.author.id}`, ':ring:')
})
 })
} else {
message.channel.send('You can\'t continue this command! Maybe you or he/she is already married...')
}
}
}