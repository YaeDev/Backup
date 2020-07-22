const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'deny',
      memberName: 'deny',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }

 async run(message, client) {
message.delete()
const { prefix } = require('../../config.json')
const args = message.content.slice(prefix.length).trim().split(/ +/g);

const embed1 = new MessageEmbed()
.setTitle('Sugestão Reprovada')
.setDescription(`Sua sugestão foi reprovada por ${message.author.tag}`)
.addField(`Motivo:`, `${args.slice(2).join(" ")}`)
message.channel.send(`<@${message.client.users.cache.get(`${args[1]}`).id}>`, embed1)
message.client.users.cache.get(`${args[1]}`).send(embed1)
 }
}