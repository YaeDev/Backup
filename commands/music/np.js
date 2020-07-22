
const db = require('quick.db')

const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const queue = new Map(); 
const client = new Discord.Client();
//MADE BY CTK
module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'np',
      group: 'music',
      memberName: 'np',
      guildOnly: true,
      description: 'Shows the music who is playing'
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
  db.add(`cu_${message.author.id}`, 1)
  if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.say('There is no song playing right now!');
    }
if(
typeof message.guild.musicData.nowPlaying.duration === 'undefined' || message.guild.musicData.nowPlaying.duration === null )
{
 return message.say('No song are playing!')
}

const serverQueue = queue.get(message.guild.id);
 var embed = new MessageEmbed()
 .setThumbnail(message.guild.musicData.nowPlaying.thumbnail)
 .setColor('RANDOM')
 .setTitle("**<a:hana_disco:729076950085271622> NOW PLAYING**")
 .addField(`Current Playing:`, `${message.guild.musicData.nowPlaying.title}`)
 .addField(`Duration`, `${message.guild.musicData.nowPlaying.duration}`)  
.addField(`Connected in:`, `${message.guild.me.voice.channel.name}`)
 
 message.channel.send(embed)
}
}
