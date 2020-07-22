const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class QueueCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'queue',
      aliases: ['song-list', 'q'],
      group: 'music',
      memberName: 'queue',
      guildOnly: true,
      description: 'Display the song queue'
    });
  }

async  run(message) {
const db = require('quick.db')
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
    if (message.guild.triviaData.isTriviaRunning)
      return message.say('Try again after the trivia has ended');
    if (message.guild.musicData.queue.length == 0)
      return message.say('There are no songs in queue!');
    const titleArray = [];
    message.guild.musicData.queue.map(obj => {
      titleArray.push(obj.title);
    });
    var queueEmbed = new MessageEmbed()
      .setColor('#ff7373')
      .setTitle('Music Queue')
      .setDescription(`
Number of songs in the queue: **${message.guild.musicData.queue.length}**
`);
    for (let i = 0; i < titleArray.length; i++) {
      queueEmbed.addField(`Song:`, `${titleArray[i]}`);
    }
    return message.say(queueEmbed);
  }
};
