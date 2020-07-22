const { Command } = require('discord.js-commando');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'clear',
      aliases: ['removeall'],
      memberName: 'clear',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
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
if(language === 1){
var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.say('<a:no:698990098905169951> Entre em um canal de voz antes de executar este comando!');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.say('<a:no:698990098905169951> Não tem nenhuma música sendo tocada!');
    }
    if (!message.guild.musicData.queue)

      return message.say('<a:no:698990098905169951> Não tem nenhuma música esperando na fila!');
    message.guild.musicData.songDispatcher.end();
    message.guild.musicData.queue.length = 0; // clear queue
    return;

}
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.say('Join a channel and try again');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.say('There is no song playing right now!');
    }
    if (!message.guild.musicData.queue)

      return message.say('There are no songs in queue');
    message.guild.musicData.songDispatcher.end();
    message.guild.musicData.queue.length = 0; // clear queue
    return;
  }
};
