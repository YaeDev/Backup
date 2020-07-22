const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      aliases: ['add'],
      memberName: 'invite',  
      group: 'misc',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }

async  run(message) {
db.add(`cu_${message.author.id}`, 1)
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
if(language === 1){
const embed = new MessageEmbed()
.setTitle('Convide a Hana para seu servidor!')
.setDescription(` Caso queira me adicionar basta clicar abaixo em um dos sites disponíveis:`)
.addField(`Discord Bot List`, `<a:dblspin:729077025108918313> [Clique aqui para me adicionar usando o site DBL](https://top.gg/bot/710137790897062059)`)
.addField(`Bots para discord`, `<:botsparadiscord:729077071468298310> [Clique aqui para me adicionar usando o site BPD](https://botsparadiscord.com/bots/710137790897062059)`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/721575472906895501/20200614_010253_0000.png')
.setFooter(`Comando executado por: ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
.setColor('RANDOM')
return message.channel.send(embed)
}
const embed = new MessageEmbed()
.setTitle('Invite')
.setDescription(`<a:hana_love:724449381306335283> If you want to add me in your server you can click and be redirected to the invite page:`)
.addField(`Discord Bot List`, `<a:dblspin:729077025108918313> [Click here to add me using DBL website](https://top.gg/bot/710137790897062059)`)
.addField(`Bots para discord`, `<:botsparadiscord:729077071468298310> [Click here to add me using BPD website](https://botsparadiscord.com/bots/710137790897062059)`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/721575472906895501/20200614_010253_0000.png')
.setFooter(`Command executed by ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
.setColor('RANDOM')
message.channel.send(embed)
  }
};
