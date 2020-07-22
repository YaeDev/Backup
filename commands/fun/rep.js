const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();

module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'rep',
      aliases: ['reputation'],
      memberName: 'rep',
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
const { prefix } = require('../../config.json')
 const user = message.mentions.users.first()
const ms = require('parse-ms')
let timeout = 1.08e+7
let reptime = await db.fetch(`reptime_${message.author.id}`);
let time = ms(timeout - (Date.now() - reptime));
let vip = await db.fetch(`vip_${message.author.id}`)

if(language === 1){
const embederror2 = new MessageEmbed()
.setTitle(`<a:erro:720379774882545724> ┃ Mencione alguém para dar a reputação!`)
.setColor('RED')
if(!user) return message.say(embederror2)
const embederror = new MessageEmbed()
.setTitle(`<a:erro:720379774882545724> ┃ Você não pode dar uma reputação para si mesmo`)
.setColor('RED')
if(message.author.id === user.id) {
return message.say(embederror)
}
const embedrepvip = new MessageEmbed()
.setTitle('Tudo certo!')
.setColor('GREEN')
.setDescription(`A reputação dada para \`${user.username}\` foi efetuada com sucesso!`)
.addField(`Membros Premium:`,  `\`\`\`js
Parabéns por ser um membro Hana Premium! A reputação foi multiplicada por 2 e você deu 2 reputações para ${user.username} \`\`\``)
if(!user) return message.say('Mention someone!')
    if (reptime !== null && timeout - (Date.now() - reptime) > 0) {
        let time = ms(timeout - (Date.now() - reptime));
 return  message.channel.send(`Você precisa esperar mais **${time.hours}h ${time.minutes}m ${time.seconds}s** para dar outra reputação!`)
    } else {

if(vip === 'Active') db.add(`rep_${user.id}`, 2)
if(vip === 'Active') db.set(`reptime_${message.author.id}`, Date.now())
if(vip === 'Active'){
return message.channel.send(embedrepvip)}

db.add(`rep_${user.id}`, 1) 
db.set(`reptime_${message.author.id}`, Date.now())
const embedrep = new MessageEmbed()
.setTitle('Tudo certo!')
.setColor('GREEN')
.setDescription(`A reputação dada para \`${user.username}\` foi efetuada com sucesso!`)
.addField(`Membros Premium:`,  `\`\`\`js
Membros Hana Premium podem multiplicar sua reputação, ou seja, em vez de 1 reputação, são 2 reputações! \`\`\``)
return message.channel.send(embedrep)
  }
}

//English
const embederror2 = new MessageEmbed()
.setTitle(`<a:erro:720379774882545724> ┃ Mention someone to give a reputation!`)
.setColor('RED')
if(!user) return message.say(embederror2)
const embederror = new MessageEmbed()
.setTitle(`<a:erro:720379774882545724> ┃ You can't give yourself a reputation!`)
.setColor('RED')
if(message.author.id === user.id) {
return message.say(embederror)
}
const embedrepvip = new MessageEmbed()
.setTitle('Yay! It worked!')
.addField(`Premium Members:`,  `\`\`\`js
Congratulations for being a Premium Member! You gave 2 reps to the user!\`\`\``)
    if (reptime !== null && timeout - (Date.now() - reptime) > 0) {
        let time = ms(timeout - (Date.now() - reptime));
   message.channel.send(`Something went wrong, you need to wait **${time.hours}h ${time.minutes}m ${time.seconds}s** to give someone a rep!`)
    } else {

if(vip === 'Active') db.add(`rep_${user.id}`, 2)
if(vip === 'Active'){
return message.channel.send(embedrepvip)}

const embedrep = new MessageEmbed()
.setTitle('Yay! It worked!')
.setDescription(`You sucessfully gave \`${user.username}\` a rep!`)
.addField(`Premium Members:`,  `\`\`\`js
If you are a premium member you can boost your rep, giving to the user 2 reputations!\`\`\``)
message.channel.send(embedrep)


db.add(`rep_${user.id}`, 1)
db.set(`reptime_${message.author.id}`, Date.now())
  }
}
}