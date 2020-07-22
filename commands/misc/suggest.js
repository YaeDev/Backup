const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const { prefix } = require('../../config.json')
const { CommandoClient } = require('discord.js-commando')
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'suggest',
      aliases: ['sgt', 'sg'],
      memberName: 'suggest',
      group: 'hana',
      description: 'Send a suggestion to our support server',
      guildOnly: false
    });
  }

 async run(message, client) {
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
const embederror = new MessageEmbed()
.setTitle(`Error`)
.setDescription(`This command can only be used in [Hana Support](https://discord.gg/V6qNyxd)`)
.setColor('RED')


const args = message.content.slice(prefix.length).trim().split(/ +/g);

const embedpause = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Suggestion sent to Hana Support!')
.setDescription(`
From: ${message.author.tag}
Suggestion: ${args.slice(1).join(" ")}`)
const ownerid = '700805591094001692'


    message.say(embedpause)




const embedapprove = new MessageEmbed()
.setTitle('Suggestion Approved!')
.setDescription('Your suggestion has been approved by Hiro 🍀#0016')
.setColor('GREEN')

const embeddeny = new MessageEmbed()
.setTitle('Suggestion Denied...')
.setDescription('Your suggestion has been denied by Hiro 🍀#0016')
.setColor('RED')

const embedserver = new MessageEmbed()
.setTitle('New Suggestion!')
.setDescription(`
From: ${message.author.tag}
Suggestion: ${args.slice(1).join(" ")}`)
db.set(`messageid_${message.author.id}`, `${message.channel.id}`)
db.set(`messageaid_${message.author.id}`, `${message.author.id}`)
const messageaid = db.fetch(`messageaid_${message.author.id}`)
message.client.channels.cache.get('718619399619215440').send(embedserver).then(msg => {
msg.react('✅')
msg.react('❌')

            let filtro = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.guild.owner.id;
            let coletor = msg.createReactionCollector(filtro, {max: 1})
            coletor.on("collect", cp => {
              
              message.client.channels.cache.get("718619399619215440").send(`Suggestion by <@${message.author.id}> has been denied by <@${message.guild.owner.id}>`)
            
                


                     
              
            })
            let filtro2 = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.guild.owner.id;
            let coletor2 = msg.createReactionCollector(filtro2, {max: 1})
            coletor2.on("collect", cp =>{
                            embedserver.setColor('#ff0000')
               message.guild.channels.cache.get("718619399619215440").send(`Suggestion by <@${message.author.id}> has been approved by <@${message.guild.owner.id}>`)
            })
})
  

  }                          

}

