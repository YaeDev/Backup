const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'config-mod',
      memberName: 'config',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }
async run(message, client){
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
const main = db.fetch(`main_${message.client.user.id}`)
if(main === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, all my commands is in maintence!**`)}
const main2 = db.fetch(`mainmod_${message.client.user.id}`)
if(main2 === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, the module \`MODERATION\` is in maintence!**`)}
const del = await db.fetch(`del_${message.guild.id}`)
if(del === 1) {
message.delete()}
const { prefix } = require('../../config.json')
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

let cmd = await db.fetch(`delete_${message.guild.id}`)
if(cmd === null) cmd = '<:disabled:729074769621811200>'
let cmd2 = await db.fetch(`delstats_${message.guild.id}`)
if(cmd2 === null) cmd2 = 'Desativado'
let channelid = await db.fetch(`cid_${message.guild.id}`)
if(channelid === null) channelid = 'Not Set'
if (!message.member.hasPermission(['MANAGE_GUILD', 'ADMINISTRATOR'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| You dont\'t have permission to ban, you need to permissions \`MANAGE_SERVER\` to use this command**')
}
if (!message.guild.me.hasPermission('ADD_REACTIONS')) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| I need to permissions \`ADD_REACTIONS\` to use this command**')
}
if(args.slice(0).join(" ").includes ('channel')){
const channel = message.mentions.channels.first()
db.set(`log_${message.guild.id}`, 1)
db.set(`cid_${message.guild.id}`, `${channel.id}`)
return message.channel.send(`New channel set to <#${channel.id}>!`)
}
const embedmod = new MessageEmbed()
.setTitle('<:hana_staff:729076201276178493> | Punishment Config ')
.setDescription(`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
**<:trashcan:730222088702656522> | Delete mod command:** ${cmd} - ${cmd2}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
**⚠ | Log Channel - <#${channelid}>
To set a channel use ht!config-mod channel <channel mention>**`)
let channelid2 = await db.fetch(`cid_${message.guild.id}`)
if(channelid2 === null) channelid2 = 'Not Set'
const embedmod2 = new MessageEmbed()
.setTitle('<:hana_staff:729076201276178493> | Punishment Config ')
.setDescription(`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
**<:trashcan:730222088702656522> | Delete mod command:** ${cmd} - ${cmd2}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
**⚠ | Log Channel - <#${channelid2}>
To set a channel use ht!config-mod channel <channel mention>**`)
message.say(embedmod).then(msg => {
msg.react('🗑')
msg.delete({timeout: 30000})
let filtro = (reaction, usuario) => reaction.emoji.name === "🗑" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 2})

coletor.on("collect", cp => {
if(cmd2 === 'Desativado'){
db.set(`del_${message.guild.id}`, 1)
db.set(`delete_${message.guild.id}`, '<:enabled:730821706347708437>') 
db.set(`delstats_${message.guild.id}`, 'Ativado')

message.say('**<a:hana_certo:699014500594090115> | Delete mod command has been enabled!**').then(msg => {msg.delete({timeout: 10000})}) 

}
if(cmd2 !== 'Desativado'){
db.set(`del_${message.guild.id}`, 0)
db.set(`delete_${message.guild.id}`, '<:disabled:729074769621811200>') 
db.set(`delstats_${message.guild.id}`, 'Desativado')

message.say('**<a:hana_certo:699014500594090115> | Delete mod command has been disabled!**').then(msg => {msg.delete({timeout: 10000})}) 

}

})
})

}
}