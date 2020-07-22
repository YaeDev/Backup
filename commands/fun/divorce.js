const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json')
const Discord = require('discord.js')
const client = new Discord.Client()
const db  = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'divorce',
      aliases: ['divorciar'],
      memberName: 'divorce',
      group: 'misc',
      description: 'Alternative help command',
      guildOnly: false
    });
  }

async  run(message) {
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
  const { prefix } = require('../../config.json')

if(language === 1){
let married = await db.fetch(`marry4_${message.author.id}`)
let married2 = await db.fetch(`marryid_${message.author.id}`)
let married3 = await db.fetch(`marryid2_${message.author.id}`)
if(married === 'Alone') {
return message.say('Você não está casado')}
db.set(`marry4_${message.author.id}`, `Alone`) 
db.set(`hanamarry5_${married2}`, '')
db.set(`marry4_${married2}`, 'Alone')  
db.set(`hanamarry5_${message.author.id}`, '')
db.set(`marry4_${married3}`, 'Alone')
db.set(`hanamarry5_${married3}`, '')
const embed = new MessageEmbed()
.setTitle(':ring: ┃ Divórcio efetuado com êxito...')
return message.channel.send(embed)
}


let married = await db.fetch(`marry4_${message.author.id}`)
let married2 = await db.fetch(`marryid_${message.author.id}`)
let married3 = await db.fetch(`marryid2_${message.author.id}`)
if(married === 'Alone') {
return message.say('You aren\'t married!')}
const embed = new MessageEmbed()
.setTitle(':ring: ┃ You got sucessfully divorced...')
message.channel.send(embed)
db.set(`marry4_${message.author.id}`, 'Alone') 
db.set(`hanamarry5_${married2}`, '')
db.set(`marry4_${married2}`, 'Alone')  
db.set(`hanamarry5_${message.author.id}`, '')
db.set(`marry4_${married3}`, 'Alone')
db.set(`hanamarry5_${married3}`, '')
}
}
