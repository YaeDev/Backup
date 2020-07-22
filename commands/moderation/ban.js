const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'ban',
      memberName: 'ban',  
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
if (!message.member.hasPermission(['ADMINISTRATOR', 'BAN_MEMBERS'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| You dont\'t have permission to ban, you need to permissions \`BAN_MEMBERS\` or `ADMINISTRATOR` to ban members**')
}
if (!message.guild.me.hasPermission(['ADMINISTRATOR', 'BAN_MEMBERS'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| I need to permissions \`BAN_MEMBERS\` or `ADMINISTRATOR` to ban members**')
}
const user = message.mentions.users.first()
if(!user) return message.say('<a:erro:729089430685614092> **| You need to mention someone!**')

var membro = message.mentions.members.first() || message.guild.members.get(args[0]);



if(user.id === message.client.user.id) return message.say('<a:erro:729089430685614092> **| You can\'t ban me!**')
const embedconf = new MessageEmbed()
.setTitle('<a:verificado:730181068979961889> | Confirm')
.setDescription(`
<:info:729075450315407507> | User:

<a:seta:730182633346039848> ${user.tag} | (${user.id})

<:file:730182942051139595> | Reason:

<a:seta:730182633346039848> ${args.slice(2).join(" ")}`)
const logs = await db.fetch(`log_${message.guild.id}`)
const channellog = await db.fetch(`cid_${message.guild.id}`)

const embed = new MessageEmbed()
.setTitle('<a:verificado:730181068979961889> | User Banned')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
<:info:729075450315407507> | User:

<a:seta:730182633346039848> ${user.tag} | (${user.id})

<:info:729075450315407507> | Responsible Moderator:

<a:seta:730182633346039848> ${message.author.tag} | (${message.author.id})

<:file:730182942051139595> | Reason:

<a:seta:730182633346039848> ${args.slice(2).join(" ")}`)
const checki = await db.fetch(`configban_${message.author.id}`)
const checki2 = await db.fetch(`urlban_${message.author.id}`)
if(checki === 1) embed.setImage(`${checki2}`)
let channelid = await db.fetch(`cid_${message.guild.id}`)
message.channel.send(embedconf).then(msg => {
msg.react('✅')

let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

coletor.on("collect", cp => {
    msg.delete()
    membro.ban()

 if(logs === 1){

message.guild.channels.cache.get(channelid).send(embed)
}  
    message.channel.send(embed)
});
})

}
}