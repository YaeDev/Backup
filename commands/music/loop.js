const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'loop',
      aliases: ['repetir'],
      group: 'music',
      memberName: 'loop',
      guildOnly: true,
      description: 'Loop the current playing song'
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
const embed = new MessageEmbed()
       .setTitle(`Sucessfully Looped song`)
       .addField(`Name:`, `${message.guild.musicData.nowPlaying.title}`)
       .addField(`Duration:`, `${message.guild.musicData.nowPlaying.duration}`)
       .setThumbnail(message.guild.musicData.nowPlaying.thumbnail)
        .setColor('RANDOM')
    if (!message.guild.musicData.isPlaying) {
      return message.say('There is no song playing right now!');
    } else if (
      message.guild.musicData.isPlaying &&
      message.guild.triviaData.isTriviaRunning
    ) {
      return message.say('You cannot loop over a trivia!');
    }
 message.channel.send(`Looping.`)
                .then(msg => {
                       setTimeout(function() {
                    msg.edit(`<a:windows_loading:715751950318305282> Looping..`)
                    }, 3000);
                       setTimeout(function() {
                    msg.edit(`<a:windows_loading:715751950318305282> Looping...`)
                    }, 3540);                       
                       setTimeout(function() {
                    msg.edit(`<@${message.member.id}>`, embed)                    
                    }, 4000);

      
    })
    


    
    message.guild.musicData.queue.unshift(message.guild.musicData.nowPlaying);
    return;
  }
};