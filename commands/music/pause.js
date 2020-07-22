const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pause',
      aliases: ['pause-song', 'hold', 'stop'],
      memberName: 'pause',
      group: 'music',
      description: 'Pause the current playing song',
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
db.add(`cu_${message.author.id}`, 1)
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('Join a channel and try again');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.say('There is no song playing right now!');
    }
if(message.guild.musicData.nowPlaying === null) {
  return message.reply("I'm not playing anything")
}
const embedpause = new MessageEmbed()
   .setThumbnail(message.guild.musicData.nowPlaying.thumbnail)
   .setTitle('<a:mutem:703987260139241572> Pause ')
   .setDescription(`Paused the music **${message.guild.musicData.nowPlaying.title}**`)
    message.say(embedpause);

    message.guild.musicData.songDispatcher.pause();
  }
};
