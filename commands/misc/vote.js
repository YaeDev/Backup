const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'vote',
      aliases: ['dbl', 'bpd'],
      memberName: 'vote',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
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
const embed = new MessageEmbed()
.setTitle('Vote')
.setDescription(` If you like my commands and you want to help me you can simple vote!

<:hana_arrow:729074687145017435> Bot list sites:`)
.addField(`Discord Bot List`, `<a:dblspin:729077025108918313> [Click here to vote in DBL](https://top.gg/bot/710137790897062059/vote)`)
.addField(`Bots para discord`, `<:botsparadiscord:729077071468298310> [Click here to vote in BPD](https://botsparadiscord.com/bots/710137790897062059/votar)`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/722279340427051018/20200615_233958_0000.png')
.setFooter(`Command executed by ${message.author.username}`, message.member.user.displayAvatarURL)
.setColor('RANDOM')
message.channel.send(embed)
  }
};
