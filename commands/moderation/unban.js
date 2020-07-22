const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('../../config.json')
const ms = require('ms')
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'unban',
      memberName: 'unban',  
      group: 'misc',
      description: 'Bane um membro',
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
    let args = message.content.substring(prefix.length).split(" ");
    if (!message.member.hasPermission(['ADMINISTRATOR', 'BAN_MEMBERS'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| You dont\'t have permission to unban, you need to permissions \`BAN_MEMBERS\` or `ADMINISTRATOR` to unban members**')
}
    let bannedMember = await message.client.users.fetch(`${args[1]}`)
    if(!bannedMember) return message.channel.send("Provide an ID!")
    let reason = 'Responsible Moderator:'
let reason1 = args.slice(2).join(" ")
    if(!reason) reason = "Resposible Moderator: " + message.author.tag
 if(!reason1) reason1 = "No Reason Provided"

const unembed = new MessageEmbed()
.setTitle('<a:verificado:730181068979961889> | User Unbanned')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
<:info:729075450315407507> | User Unbanned:

<a:seta:730182633346039848> ${message.client.users.cache.get(`${args[1]}`).tag} | (${message.client.users.cache.get(`${args[1]}`).id})

<:info:729075450315407507> | Responsible Moderator:

<a:seta:730182633346039848> ${message.author.tag} | (${message.author.id})

<:file:730182942051139595> | Reason:

<a:seta:730182633346039848> ${reason1}`)
    try {
        message.guild.members.unban(bannedMember, {reason: 'Tempmute'})
        message.channel.send(unembed)
    } catch(e) {
        console.log(e.message)
    }


}
}