const { Command } = require('discord.js-commando');

module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      aliases: ['sair'],
      group: 'music',
      memberName: 'leave',
      guildOnly: true,
      description: 'Leaves voice channel if in one'
    });
  }

async  run(message) {
const db = require('quick.db')
db.add(`cu_${message.author.id}`, 1)
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('Join a channel and try again');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.reply('There is no song playing right now!');
    }
    if (!message.guild.musicData.queue)
      return message.say('There are no songs in queue');
 
    message.channel.send('Are you sure? React `👋` to confirm').then(msg =>{
      msg.react('👋')

let filtro = (reaction, usuario) => reaction.emoji.name === "👋" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

coletor.on("collect", cp => {
	  message.channel.send('Goodbye! See you later!') 
    message.guild.musicData.songDispatcher.end();
    message.guild.musicData.queue.length = 0;
    return;
});
    })



  }
};
 //made by CTK WARRIOR