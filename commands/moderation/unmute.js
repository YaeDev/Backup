const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('../../config.json')
const db = require('quick.db')

module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'unmute',
      aliases: ['dessilenciar'],
      memberName: 'unmute',  
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
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const user = message.mentions.users.first()
        var person = message.guild.member(
          message.mentions.users.first() || message.guild.members.cache.get(args[1])
        );
        if (!person) return message.reply("I can't find the user called " + args[1]);
        let role = message.guild.roles.cache.find(role => role.name === "Muted");
           
if (!message.member.hasPermission(['MUTE_MEMBERS'])) {
	console.log('This member cant');
return message.say('<a:erro:729089430685614092> **| You dont\'t have permission to ban, you need to permissions \`MUTE_MEMBERS\` or  to ban members**')
}



if(user.id === message.client.user.id) return message.say('<a:erro:729089430685614092> **| You can\'t mute me!**')
          const muteembed = new MessageEmbed()
          .setTitle('<:muted:730225748115324928> | Unmuted Member')
          .setDescription('<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>')
          .setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
          .addField(`📋 | Unmuted member:`, `<a:seta:730182633346039848> **${user.tag} - (${person.id})**`)
          .addField(`👥 | Responsible Moderator:`, `<a:seta:730182633346039848> **${message.author.tag} (ID:${message.author.id})**`)
          .setColor('RANDOM')
const checki = await db.fetch(`configmute_${message.author.id}`)
const checki2 = await db.fetch(`url_${message.author.id}`)
if(checki === 1) muteembed.setImage(`${checki2}`)

                  
                       message.channel.send(muteembed).then(msg => {
msg.delete({timeout: 30000})
})
                      
                        person.roles.remove(role.id);
const logs = await db.fetch(`log_${message.guild.id}`)
let channelid = await db.fetch(`cid_${message.guild.id}`)

 if(logs === 1){

message.client.channels.cache.get(channelid).send(muteembed)
}                 
                  
                
                
                }
              }