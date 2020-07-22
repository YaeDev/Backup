const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'panel',
      aliases: ['pl', 'pn'],
      memberName: 'panel',
      group: 'music',
      description: 'Display a panel with: skip, resume, pause and stop.',
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
    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.say('There is no song playing right now!');
    }
const embedplay = new MessageEmbed()
        .setTitle("**COMMANDS**")
        .setDescription("Hana Panel, use commands 5x more faster")
        .setColor("RANDOM")
        .setImage(`${message.guild.musicData.nowPlaying.thumbnail}`)
        .addField(`Commands`, `
        ⏹ ⥤ Leave the current voice channel
        ⏸ ⥤ Pause a music
        ⏯ ⥤ Resume a music
        ⏭ ⥤ Skip a song

Current Stats: Resumed ${message.guild.musicData.nowPlaying.title}`)
const embedpause = new MessageEmbed()

           .setTitle("**COMMANDS**")
        .setDescription("Hana Panel, use commands 5x more faster")
        .setColor("RANDOM")
        .setImage(`${message.guild.musicData.nowPlaying.thumbnail}`)
        .addField(`Commands`, `
        ⏹ ⥤ Leave the current voice channel
        ⏸ ⥤ Pause a music
        ⏯ ⥤ Resume a music
        ⏭ ⥤ Skip a song

Current Stats: **Paused ${message.guild.musicData.nowPlaying.title}**`);

const helpembed = new MessageEmbed()
        .setTitle("**COMMANDS**")
        .setDescription("Hana Panel, use commands 5x more faster")
        .setColor("RANDOM")
        .setImage(`${message.guild.musicData.nowPlaying.thumbnail}`)
        .addField(`Commands`, `
        ⏹ ⥤ Leave the current voice channel
        ⏸ ⥤ Pause a music
        ⏯ ⥤ Resume a music
        ⏭ ⥤ Skip a song

Current Stats: **Playing ${message.guild.musicData.nowPlaying.title}**
        `);

const skip = new MessageEmbed()
        .setTitle("**COMMANDS**")
        .setDescription("Hana Panel, use commands 5x more faster")
        .setColor("RANDOM")
        .setImage(`${message.guild.musicData.nowPlaying.thumbnail}`)
        .addField(`Commands`, `
        ⏹ ⥤ Leave the current voice channel
        ⏸ ⥤ Pause a music
        ⏯ ⥤ Resume a music
        ⏭ ⥤ Skip a song

Current Stats: **Skipped and now playing ${message.guild.musicData.nowPlaying.title}**
        `)

const s = new MessageEmbed()
        .setTitle("**COMMANDS**")
        .setDescription("Hana Panel, use commands 5x more faster")
        .setColor("RANDOM")
        .setImage(`${message.guild.musicData.nowPlaying.thumbnail}`)
        .addField(`Commands`, `
        ⏹ ⥤ Leave the current voice channel
        ⏸ ⥤ Pause a music
        ⏯ ⥤ Resume a music
        ⏭ ⥤ Skip a song
        ▶  ⥤ Play a song

Current Stats: **I left ${message.guild.me.voice.channel.name}**
        `)

        message.channel.send(helpembed).then(msg => {
            msg.react("⏭")
            msg.react( "⏯" )
            msg.react("⏸")
            msg.react("⏹")


            let filtro = (reaction, usuario) => reaction.emoji.name === "⏸" && usuario.id === message.author.id;
            let coletor = msg.createReactionCollector(filtro, {max: 99999})
            coletor.on("collect", cp => {
                message.guild.musicData.songDispatcher.pause();
                msg.edit(embedpause)
                


                     
              
            })
            let filtro2 = (reaction, usuario) => reaction.emoji.name === "⏯" && usuario.id === message.author.id;
            let coletor2 = msg.createReactionCollector(filtro2, {max: 999999})
            coletor2.on("collect", cp =>{
               message.guild.musicData.songDispatcher.resume();
                msg.edit(embedplay)

            })
            let filtro3 = (reaction, usuario) => reaction.emoji.name === "⏭" && usuario.id === message.author.id;
            let coletor3 = msg.createReactionCollector(filtro3, {max: 999999})
            coletor3.on("collect", cp =>{
    message.guild.musicData.songDispatcher.end();
     msg.edit(skip)
            })
            let filtro4 = (reaction, usuario) => reaction.emoji.name === "⏹" && usuario.id === message.author.id;
            let coletor4 = msg.createReactionCollector(filtro4, {max: 99999})
            coletor4.on("collect", cp =>{
	  message.channel.send(s) 
    message.guild.musicData.songDispatcher.end();
    message.guild.musicData.queue.length = 0;

            })

})
  }
}