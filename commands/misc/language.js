const db = require('quick.db')
const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
//MADE BY CTK
module.exports = class async extends Command {
  constructor(client) {
    super(client, {
      name: 'language',
      aliases: ['lang', 'idioma'],
      group: 'music',
      memberName: 'lang',
      guildOnly: true,
      description: 'Loop the current playing song'
    });
  }
async run (message) {
db.add(`cu_${message.author.id}`, 1)
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
const embedlanguage =  new MessageEmbed()
.setTitle(`Select one language/Selecione uma língua`)
.setColor('RANDOM')
.setDescription(`
**:flag_us: ┃ English/Inglês**
**:flag_br: ┃ Português Brasileiro/Brazilian Portuguese**`)
const embedbr = new MessageEmbed()
.setTitle(':flag_br: ┃ Meu idioma agora será português. Observação: O ht!p ficou em inglês por problemas na tradução, use ht!ptp para o play em português')
.setDescription('Status sobre a tradução para este idioma: 65%, Não finalizado | Not Finished Yet')
const embedus = new MessageEmbed()
.setTitle(':flag_us: ┃ My language is now English!')

message.say(embedlanguage).then(msg => {
msg.react('729090890001547314')
msg.react('729091055164850267')

        let filtro12 = (reaction, usuario) => reaction.emoji.name === "flag_en" && usuario.id === message.author.id;
        let coletor12 = msg.createReactionCollector(filtro12, {max: 1, time: 60000})

coletor12.on("collect", cp => {
     msg.edit(embedus)
     db.set(`hanalang_${message.guild.id}`, 0)
     db.set(`language_${message.guild.id}`, 0)

})
   let filtro2 = (reaction, usuario) => reaction.emoji.name === "hana_br" && usuario.id === message.author.id
   let coletor2 = msg.createReactionCollector(filtro2, {max: 1, time: 60000})

coletor2.on("collect", cp => {
  msg.edit(embedbr)
db.set(`hanalang_${message.guild.id}`, 1)
db.set(`language_${message.guild.id}`, 1)
})
})

}
}