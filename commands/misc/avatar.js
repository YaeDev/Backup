const Discord = require("discord.js");
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'avatar',
      memberName: 'avatar',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message){
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
const user = message.mentions.users.first()
const embed = new  MessageEmbed()
.setTitle(`** ${user.username}**'s avatar`)
.setColor("RANDOM") //can specifiy color of embed here
.setImage(`${user.displayAvatarURL({dynamic: true, size: 512})}`)
.addField(`Download`, `Click [here](${user.displayAvatarURL()}) to download the image`)

.setFooter(`GIF: If the final of the link got .webp, just change it to .gif` , user.displayAvatarURL({dynamic: true}))

message.channel.send(`<@${message.author.id}>`, embed)
}
}
