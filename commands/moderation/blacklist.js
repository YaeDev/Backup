const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'blacklist',
      memberName: 'bl',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }
async run(message, client){
const lang = db.fetch(`language_${message.guild.id}`)
if(message.author.id != '700805591094001692'){
if(lang === 1){
return message.say('Você não tem permissão para usar este comaando!')
}
return message.say('You don\'t have permission to use this command!')}
const { prefix } = require('../../config.json')
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

if(db.fetch(`blid_${args[1]}`) === 1){
db.set(`blreason_${message.client.users.cache.get(args[1]).id}`, 'Nothing')
db.set(`blist_${message.client.users.cache.get(args[1]).id}`, '<:disabled:729074769621811200>')
db.set(`blid_${args[1]}`, 0)
return message.say(`O usuário \`${message.client.users.cache.get(args[1]).tag}\` foi removido da blacklist`)
}
db.set(`blreason_${message.client.users.cache.get(args[1]).id}`, args.slice(2).join(" "))
if(!args[2]) db.set(`blreason_${message.client.users.cache.get(args[1]).id}`, 'The moderator didn\'t provide a reason')
db.set(`blist_${args[1]}`, '<:enabled:730821706347708437>')
db.set(`blid_${args[1]}`, 1)
return message.say('O usuário `' + message.client.users.cache.get(args[1]).tag + '` foi colocado na blacklist com o motivo: ' + args.slice(2).join(" "))
}
}