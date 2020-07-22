const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'coinflip',
      memberName: 'coinflip',  
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
const rando_imgs = [
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
]
db.set(`coinflip_${message.author.id}`, `${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`)
const coinflip = await db.fetch(`coinflip_${message.author.id}`)
const { prefix } = require('../../config.json')
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
if(!args[1]){ 
return message.say('<:coin:730807208778006618> **| '+ rando_imgs[Math.floor(Math.random() * rando_imgs.length)] + '!**')
}

const user = message.mentions.users.first()
const embederror2 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Mention someone to make a bet!`)
.setColor('RED')
if(!user) return message.say(embederror2)
const embederror = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ You cannot bet yourself!`)
.setColor('RED')
const embederror5 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ You cannot bet me!`)
.setColor('RED')
if(user.id === message.client.user.id) return message.say(embederror5)
if(message.author.id === user.id) {
return message.say(embederror)
}
let married =   db.fetch(`marry4_${message.author.id}`)
let married3 = db.fetch(`marry4_${user.id}`)
const embederror3 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ ${user.username} doesn't have this amount!`)
.setColor('RED')
const embederror4 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ You don't have this amount!`)
.setColor('RED')
let credits = db.fetch(`credits_${message.author.id}`)
let credits4 = db.fetch(`credits_${user.id}`)
if(credits4 < args[2]  ){
return message.channel.send(embederror3)
}
if(args[2] > credits  ){
return message.channel.send(embederror4)
}
message.channel.send(`<@${message.author.id}> made a coinflip challenge to you! Please <@${user.id}>, react on ✅ to join the bet, the bet is ${args[2]} credits.

If the coin fall and got face, <@${message.author.id}> won ${args[2]} credits, if the coin fall and got crown, <@${user.id}> won ${args[2]} credits`).then(msg => {
msg.react('✅')

let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === user.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

coletor.on("collect", cp => {
db.subtract(`credits_${message.author.id}`, args[2])
db.subtract(`credits_${user.id}`, args[2])
    msg.delete()
    if(coinflip === `Crown`) {
db.add(`credits_${user.id}`, args[2])
db.add(`credits_${user.id}`, args[2])
return message.say(`<@${user.id}> won ${args[2]} credits, The coin falled in ${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`)

}
    if(coinflip === `Face`) {
db.add(`credits_${message.author.id}`, args[2])
db.add(`credits_${message.author.id}`, args[2])
return message.say(`<@${message.author.id}> won ${args[2]} credits, The coin falled in ${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`)

}
})
})
}}