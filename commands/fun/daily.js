const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();

module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'daily',
      aliases: ['diário'],
      memberName: 'daily',
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
let timeout = 8.64e+7
let amount = Math.floor(Math.random() * 16000) + 1
let daily = await db.fetch(`daily_${message.author.id}`);
let time = ms(timeout - (Date.now() - daily));
let vip = await db.fetch(`vip_${message.author.id}`)

if(language === 1){
const embeddailyv = new MessageEmbed()
.setTitle('Tudo certo!')
.setColor('GREEN')
.setDescription(`No daily de hoje, você ganhou \`${amount}\` créditos!`)
.addField(`Membros Premium:`,  `\`\`\`js
Parabéns por ser um membro Hana Premium! A quantidade de créditos foi multiplicada por dois e você recebeu mais ${amount}! \`\`\``)
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
   return message.channel.send(`Espere mais **${time.hours}h ${time.minutes}m ${time.seconds}s** para coletar seu daily!`)
    } else {
if(vip === 'Active') db.add(`credits_${message.author.id}`, amount)
if(vip === 'Active') db.add(`credits_${message.author.id}`, amount)
if(vip === 'Active') db.set(`daily_${message.author.id}`, Date.now())
if(vip === 'Active') {
return message.say(embeddailyv)}

db.add(`credits_${message.author.id}`, amount) 
db.set(`daily_${message.author.id}`, Date.now())
const embedrep = new MessageEmbed()
.setTitle('Tudo certo!')
.setColor('GREEN')
.setDescription(`No daily de hoje, você ganhou \`${amount}\` créditos!`)
.addField(`Membros Premium:`,  `\`\`\`js
Membros Hana Premium podem multiplicar seus créditos no daily, você poderia ganhar mais ${amount} se fosse premium! \`\`\``)
return message.channel.send(embedrep)
  }
}

//English

const embedrepvip = new MessageEmbed()
.setTitle('Yay! It worked!')
.setDescription(`You won \`${amount}\` crdits in this day!`)
.addField(`Premium Members:`,  `\`\`\`js
Congratulations for being a Premium Member! You won more ${amount}!\`\`\``)
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
   message.channel.send(`Something went wrong, you need to wait **${time.hours}h ${time.minutes}m ${time.seconds}s** to get another daily!`)
    } else {

if(vip === 'Active') db.add(`credits_${message.author.id}`, amount)
if(vip === 'Active') db.add(`credits_${message.author.id}`, amount)
if(vip === 'Active') db.set(`daily_${message.author.id}`, Date.now())
if(vip === 'Active'){
return message.channel.send(embedrepvip)}

const embedrep = new MessageEmbed()
.setTitle('Yay! It worked!')
.setDescription(`You won \`${amount}\` crdits in this day!`)
.addField(`Premium Members:`,  `\`\`\`js
If you are a premium member you can multiplicate your daily credits by 2!\`\`\``)
message.channel.send(embedrep)


db.add(`credits_${message.author.id}`, amount)
db.set(`daily_${message.author.id}`, Date.now())
  }
}
}