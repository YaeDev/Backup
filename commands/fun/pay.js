const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {  
      name: 'pay',
      aliases: ['pagar'],
      memberName: 'pay',
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
const main = db.fetch(`main_${message.client.user.id}`)
if(main === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, all my commands is in maintence!**`)}
const main2 = db.fetch(`mainfun_${message.client.user.id}`)
if(main2 === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, the module \`FUN\` is in maintence!**`)}

  db.add(`cu_${message.author.id}`, 1)
const { prefix } = require('../../config.json')
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
const user = message.mentions.users.first()
if(language === 1){
if(!user) {
return message.say('<a:erro:729089430685614092> ┃ Mencione um usuário!')
}
const amount = parseInt(args[2]);
if(isNaN(amount)){
return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
} else if (amount < 1 || amount > 99999999999999) {
	return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!');
}
if(args[2].includes('a')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('b')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('c')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('d')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('e')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('f')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('g')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('h')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('i')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('j')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('k')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('l')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('m')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('n')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('o')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('p')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('q')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('r')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('s')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('t')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('u')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('v')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('w')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('x')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('y')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('z')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')

if(args[2].includes('A')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('B')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('C')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('D')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('E')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('F')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('G')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('H')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('I')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('J')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('K')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('L')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('M')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('N')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('O')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('P')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('Q')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('R')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('S')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('T')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('U')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('V')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('W')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('X')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('Y')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('Z')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(']')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('}')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('[')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('{')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('?')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(';')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(':')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('.')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(',')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('<')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('>')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('+')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('=')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('`')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('§')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('º')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('°')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('ª')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('~')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('^')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(`'`)) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('"')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')

const credits = await db.fetch(`credits_${message.author.id}`)
const credits2 = await db.fetch(`credits_${user.id}`)
if(args[2] > credits) return message.say(`<a:erro:729089430685614092> ┃ Você não tem \`${args[2]}\`, você tem apenas **${credits}**!`)
const argsCheck = args[2]
return message.channel.send(`Para confirmar sua transação, clique no <a:hana_certo:699014500594090115>:

**Você vai enviar ${args[2]} para ${user.tag}, ficando com ${credits - args[2]}
${user.tag} Receberá ${args[2]}, ficando com ${argsCheck}**`).then(msg => {
msg.react('699014500594090115')

let filtro2 = (reaction, usuario) => reaction.emoji.name === "hana_certo" && usuario.id === message.author.id;
            let coletor2 = msg.createReactionCollector(filtro2, {max: 1})
            coletor2.on("collect", cp => {
              msg.delete()
              db.add(`credits_${user.id}`, args[2])
              db.subtract(`credits_${message.author.id}`, args[2])
              const credits3 = db.fetch(`credits_${user.id}`)
            message.channel.send(`<a:hana_certo:699014500594090115> ┃ Dinheiro enviado com sucesso! Agora, ${user.tag} tem ${credits3} créditos!`)
                


                     
              
            })
})

}
if(!user) {
return message.say('<a:erro:720379774882545724> ┃ Mention someone!')
}
const amount = parseInt(args[2]);
if(isNaN(amount)){
return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
} else if (amount < 1 || amount > 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999) {
	return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!');
}
if(args[2].includes('a')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('b')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('c')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('d')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('e')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('f')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('g')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('h')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('i')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('j')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('k')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('l')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('m')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('n')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('o')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('p')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('q')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('r')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('s')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('t')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('u')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('v')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('w')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('x')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('y')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('z')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')

if(args[2].includes('A')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('B')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('C')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('D')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('E')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('F')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('G')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('H')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('I')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('J')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('K')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('L')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('M')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('N')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('O')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('P')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('Q')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('R')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('S')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('T')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('U')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('V')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('W')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('X')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('Y')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes('Z')) return message.say('<a:erro:720379774882545724> ┃ Insert a valid number!')
if(args[2].includes(']')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('}')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('[')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('{')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('?')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(';')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(':')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('.')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(',')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('<')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('>')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('+')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('=')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('`')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('§')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('º')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('°')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('ª')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('~')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('^')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(`'`)) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('"')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
const credits = await db.fetch(`credits_${message.author.id}`)
const credits2 = await db.fetch(`credits_${user.id}`)
if(args[2] > credits) return message.say(`<a:erro:720379774882545724> ┃ You don't have \`${args[2]}\`, you only have **${credits}**!`)
const argsCheck = args[2]
message.channel.send(`To confirm the transaction, react on <a:hana_certo:699014500594090115>:

**You will send ${args[2]} to ${user.tag}, your new balance will be ${credits - args[2]}
${user.tag} Receberá ${args[2]}, ficando com ${argsCheck}**`).then(msg => {
msg.react('699014500594090115')

let filtro = (reaction, usuario) => reaction.emoji.name === "hana_certo" && usuario.id === message.author.id;
            let coletor = msg.createReactionCollector(filtro, {max: 1})
            coletor.on("collect", cp => {
              msg.delete()
              db.add(`credits_${user.id}`, args[2])
              db.subtract(`credits_${message.author.id}`, args[2])
              const credits3 = db.fetch(`credits_${user.id}`)
            message.channel.send(`<a:hana_certo:699014500594090115> ┃ Credits sucessfully sent! Now, ${user.tag} have ${credits3} credits!`)
                


                     
              
            })
})
  }
}