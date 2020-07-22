const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
//MADE BY CTK
module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'hug',
      group: 'misc',
      memberName: 'hug',
      guildOnly: true,
      description: 'Hug someone!'
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
const rando_imgs = [
'https://i.imgur.com/VgP2ONn.gif',
'https://i.imgur.com/snm8S1B.gif',
'https://i.imgur.com/34Ldmbz.gif',
'https://i.imgur.com/RPYNm9o.gif',
'https://i.imgur.com/hA9ZNoR.gif',
'https://cdn.myanimelist.net/s/common/uploaded_files/1461073447-335af6bf0909c799149e1596b7170475.gif',
'https://cdn.myanimelist.net/s/common/uploaded_files/1460988091-6e86cd666a30fcc1128c585c82a20cdd.gif',
'https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif',
'https://66.media.tumblr.com/2a3ec53a742008eb61979af6b7148e8d/tumblr_mt1cllxlBr1s2tbc6o1_500.gif',
'https://giffiles.alphacoders.com/133/133135.gif',
'https://data.whicdn.com/images/213476418/original.gif',
'https://media1.tenor.com/images/8055f0ab4e377e35f5884dfe3e3fec52/tenor.gif',
'https://66.media.tumblr.com/668e4508190fb9f62ea9b5eb1d112531/tumblr_mw41ntelfK1s6ghcbo1_500.gif',
'https://media.tumblr.com/tumblr_lqs0rikYtY1qb8bw4.gif',
'https://media1.tenor.com/images/28f2ca567941fbbee2e4c29d63bec2da/tenor.gif',
]
const user = message.mentions.users.first()

if(language === 1){


  const embedhug = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Abraço!')
  .setDescription(`<:hug:729108328302772264> <@${message.author.id}> abraçou <@${user.id}>! <:hug:729108328302772264>`)
  .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
  .setFooter('Retribua o abraço clicando em 🔃!')
  

  const embedhug2 = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Abraço!')
  .setDescription(`<:hug:729108328302772264> <@${user.id}> abraçou <@${message.author.id}>! <:hug:729108328302772264>`)
  .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
return message.channel.send(`<@${message.author.id}>`, embedhug).then(msg =>{
msg.react('🔃')
let filtro2 = (reaction, usuario) => reaction.emoji.name === "🔃" && usuario.id === user.id;
        let coletor2 = msg.createReactionCollector(filtro2, {max: 1})

coletor2.on("collect", cp => {
    msg.edit(embedhug2)
    return;
});
})
}

                                                              

  const embedhug = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Hug')
  .setDescription(`<:hug:729108328302772264> <@${message.author.id}> hugged <@${user.id}> <:hug:729108328302772264>`)
  .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
  .setFooter('Return the hug clicking on 🔃!')
  

  const embedhug2 = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Hug')
  .setDescription(`<:hug:729108328302772264> <@${user.id}> hugged <@${message.author.id}> <:hug:729108328302772264>`)
  .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
  .setFooter(`Return the hug clicking on 🔃!`)
message.channel.send(`<@${message.author.id}>`, embedhug).then(msg =>{
msg.react('🔃')

let filtro = (reaction, usuario) => reaction.emoji.name === "🔃" && usuario.id === user.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

coletor.on("collect", cp => {
    msg.edit(embedhug2)
    return;
});
}
                                                               


                                                               )
  }
}
