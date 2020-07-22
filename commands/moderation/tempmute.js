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
      name: 'tempmute',
      memberName: 'tempmute',  
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
if (!message.member.hasPermission(['MUTE_MEMBERS'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| You dont\'t have permission to ban, you need to permissions \`MUTE_MEMBERS\` or  to ban members**')
}
    const user = message.mentions.users.first()
    let args = message.content.substring(prefix.length).split(" ");
    let time = args[2];
    let reason = args[3]
let role = message.guild.roles.cache.find(role => role.name === "Muted");
if(!role) {message.guild.roles.create({
  data: {
    name: 'Muted',
    color: 'GREY',
  },
  reason: 'Created role for the use of tempmute command',
})
console.log('I love potatoes')
          }    

      let person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
      let person2  = message.mentions.users.first()
      if(!person) return  message.reply("I can't find this user!")
      if(!time) return message.reply('Specify a time!')
const amount = parseInt(args[2]);
if(isNaN(amount)){
return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
}
      if(!reason) return message.reply('especifique uma razão para mutar este membro!')
              person.roles.add(role.id);
              const muteembed = new MessageEmbed()
          .setTitle('<:muted:730225748115324928> | Muted member')
          .setDescription('<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>')
          .setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
          .addField(`📋 | Muted member:`, `<a:seta:730182633346039848> **${user.tag} - (${person2.id})**`)
          .addField(`👥 | Responsible Moderator:`, `<a:seta:730182633346039848> **${message.author.tag} (ID:${message.author.id})**`)
          .addField(`📜 | Reason:`, `<a:seta:730182633346039848> **${args.slice(3).join(" ")}**`)
          .addField(`⌚ | Duration:`, `<a:seta:730182633346039848> \`${ms(ms(time))}\``)
          .setColor('RANDOM')
const checki = await db.fetch(`configmute_${message.author.id}`)
const checki2 = await db.fetch(`url_${message.author.id}`)
if(checki === 1) muteembed.setImage(`${checki2}`)

              
          const unmuteembed = new MessageEmbed()
          .setTitle('<:unmuted:730226321719951480> | Member Unmuted')
          .addField(`📋 | Unmuted Member:`, `<a:seta:730182633346039848> **${user.tag} (ID: ${person2.id})**`)
          .addField(`👥 | Unmuted by:`, `<a:seta:730182633346039848> **${message.client.user.tag}**`)
          .addField(`📜 | Reason:`, `<a:seta:730182633346039848> **Auto**`)
          .setColor('RANDOM')

const logs = await db.fetch(`log_${message.guild.id}`)
let channelid = await db.fetch(`cid_${message.guild.id}`)   
            
              message.channel.send(muteembed)
if(logs === 1){

message.client.channels.cache.get(channelid).send(muteembed)
}
              setTimeout(function(){
                 
                  person.roles.remove(role.id);
                  console.log(role.id)
if(logs === 1){

message.client.channels.cache.get(channelid).send(unmuteembed)
}
              }, ms(time));
   
            }
        }