const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const discord = require("discord.js")
const client = new discord.Client()
const { Canvas } = require("canvas-constructor")
const canvas = require('canvas');
const db = require('quick.db')
const fetch = require("node-fetch")
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'profile',
      aliases: ['perfil'],
      memberName: 'profile',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message) {
const language = await db.fetch(`language_${message.guild.id}`)
let bl34 = await db.fetch(`blist_${message.author.id}`)
let blreasom = await db.fetch(`blreason_${message.author.id}`)

if(bl34 === '<:enabled:730821706347708437>')
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

const { prefix } = require('../../config.json')
db.add(`cu_${message.author.id}`, 1)
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
const user = message.mentions.users.first()
let rep3 = await db.fetch(`rep_${message.author.id}`)
let credits3 = await db.fetch(`credits_${message.author.id}`)
let vip3 = await db.fetch(`vip_${message.author.id}`)
let married3 = await db.fetch(`marry4_${message.author.id}`)
let hanaabout3 = await db.fetch(`about_${message.author.id}`)
let hanastaff3 = await db.fetch(`hanastaff5_${message.author.id}`)
let hanavipicon3 = await db.fetch(`hanavip5_${message.author.id}`) 
let hanadev3 = await  db.fetch(`hanadev5_${message.author.id}`)
let hanabh3 = await db.fetch(`hanabh5_${message.author.id}`)
let hanamarry3 = await db.fetch(`hanamarry5_${message.author.id}`)
let hp3 = await  db.fetch(`hanap5_${message.author.id}`)
let cu3 = await db.fetch(`cu_${message.author.id}`)
if(hp3 === null) hp3 = ''
if(hanamarry3 === null) hanamarry3 = ''
if(hanadev3 === null) hanadev3 = ''
if(hanavipicon3 === null) hanavipicon3 = ''
if(hanastaff3 === null) hanastaff3 = ''
if(hanabh3 === null) hanabh3 = ''
if(vip3 === null) vip3 = 'Not Active'
if(married3 === null) married3 = 'Alone'
if(credits3 === null) credits3 = 0
if(rep3 === null) rep3 = 0
if(hanaabout3 === null) hanaabout3 = 'I\'m using Hana! You can change this using ht!aboutme'
if(language === 1){
if(!args[0]) {
if(message.author.id === message.member.user.bot) db.set(`bot_${message.author.id}`, '<:bot:538163542260580352>')


let bot = await db.fetch(`bot_${message.author.id}`)
if(bot === null) bot = ''
if(message.author.id === message.guild.owner.id) db.set(`gowner_${message.author.id}`, ':crown:')
if(message.author.id != message.guild.owner.id) db.set(`gowner_${message.author.id}`, '')
let gowner3 = await db.fetch(`gowner_${message.author.id}`)
if(message.member.user.presence.status === "offline") db.set(`status_${message.author.id}`, '<:offline:727684258663235596>')
if(message.member.user.presence.status === "idle") db.set(`status_${message.author.id}`, '<:idle:727686689602142279>')
let stats3 = await db.fetch(`status_${message.author.id}`)
if(stats3 === null) stats3 =  '<:offline:727684258663235596>'
let bl = await db.fetch(`blist_${message.author.id}`)
if(bl === null) bl = '<:disabled:729074769621811200>'
let gemblems = db.fetch(`gemblem_${message.author.id}`)
let gemblem = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems === null) gemblems = ''
let gguild42 = await db.fetch(`gguild_${message.author.id}`)
if(gguild42 === null) gguild42 = ''
const layout = await canvas.loadImage('https://i.imgur.com/5XJF0pO.png')
const background = await canvas.loadImage('https://olliehoff.co.uk/wp-content/uploads/2015/12/Fallout_Desktop_2560x1440.png')
let dev = ''
const creditslogo = await canvas.loadImage('https://images.tcdn.com.br/img/editor/up/469103/cifrao.png')
if(hanadev3 === 1){
dev = await canvas.loadImage('https://cdn.glitch.com/2a652bc7-ce3d-43dd-b2a9-13c8f64cdb0e%2Fdev.png?v=1595283155434')
}
const fslogo = await canvas.loadImage('https://i.imgur.com/r9aZs1X.png')
const avatar = await canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));  
let backid = await db.fetch(`backid_${message.author.id}`)
if(backid === 1){
const back = await db.fetch(`background_${message.author.id}`)
const img = await canvas.loadImage(`${back}`)
if(backid === 1){
let mage1 = new Canvas(700, 490)
.addImage(img, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(dev, 220, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 400)
.addImage(creditslogo, 560, 400, 25, 25)
.addText(credits3, 590, 419)
.addImage(fslogo, 560, 430, 25, 25)
.addText(gguild42, 590, 449)

.toBuffer()
return message.channel.send({files: [mage1]})
}
}
let canvasimg = new Canvas(700, 490)
.addImage(background, 0, 0, 700, 490)
.addImage(layout, 0, 0) 
.addImage(dev, 220, 85, 30, 30)
.setColor("#2C2F33")
.setShadowColor('rgba(22, 22, 22, 1)')
.setShadowOffsetY(5)
.setShadowBlur(10)
.addCircle(101, 95, 62)
.addCircularImage(avatar, 100, 95, 64)
.setTextFont('18pt Arial Black')
.setColor('#FFFFFF')
.addText(`${message.author.tag}`, 200, 80)
.setTextFont('12pt Arial Black')    
.addText(`${hanaabout3}`, 15, 400)
.toBuffer()
return message.channel.send({files: [canvasimg]})

}
if(!user && args[0].length > 3){
const amount = parseInt(args[0]);
if(isNaN(amount)) {
 return message.say(`<a:erro:729089430685614092> ┃ **Eu não consegui achar esse usuário! Talvez o id providenciado está inválido.**`)
}
if(message.client.users.cache.get(`${args[0]}`) == "undefined" || message.client.users.cache.get(`${args[0]}`) == null) {
return message.say('<a:erro:729089430685614092> ┃ **Eu não consegui achar esse usuário! Talvez o id providenciado está inválido.**')
}
let bot = await db.fetch(`bot_${args[0]}`)
const user = message.mentions.users.first()
let rep3 = await db.fetch(`rep_${args[0]}`)
let credits3 = await db.fetch(`credits_${args[0]}`)
let vip3 = await db.fetch(`vip_${args[0]}`)
let married3 = await db.fetch(`marry4_${args[0]}`)
let hanaabout3 = await db.fetch(`about_${args[0]}`)
let hanastaff3 = await db.fetch(`hanastaff5_${args[0]}`)
let hanavipicon3 = await db.fetch(`hanavip5_${args[0]}`) 
let hanadev3 = await  db.fetch(`hanadev5_${args[0]}`)
let hanabh3 = await db.fetch(`hanabh5_${args[0]}`)
let hanamarry3 = await db.fetch(`hanamarry5_${args[0]}`)
let hp3 = await  db.fetch(`hanap5_${args[0]}`)
let cu3 = await db.fetch(`cu_${args[0]}`)
let bl3 = await db.fetch(`blist_${args[0]}`)
if(bl3 === null) bl3 = '<:disabled:729074769621811200>'
if(bot === null) bot = ''
if(hp3 === null) hp3 = ''
if(hanamarry3 === null) hanamarry3 = ''
if(hanadev3 === null) hanadev3 = ''
if(hanavipicon3 === null) hanavipicon3 = ''
if(hanastaff3 === null) hanastaff3 = ''
if(hanabh3 === null) hanabh3 = ''
if(vip3 === null) vip3 = 'Not Active'
if(married3 === null) married3 = 'Alone'
if(credits3 === null) credits3 = 0
if(rep3 === null) rep3 = 0
if(hanaabout3 === null) hanaabout3 = 'I\'m using Hana! You can change this using ht!aboutme'
if(hanastaff3 === null) hanastaff3 = 'Nothing'

if(args[0] === message.guild.owner.id) db.set(`gowner_${args[0]}`, ':crown:')
if(args[0] != message.guild.owner.id) db.set(`gowner_${args[0]}`, '')
let gowner3 = await db.fetch(`gowner_${args[0]}`)
let stats = db.fetch(`status_${args[0]}`)

if(stats === null) stats =  '<:offline:727684258663235596>'
let gemblems = db.fetch(`gemblem_${args[0]}`)
let gemblem = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems === null) gemblems = ''
if(cu3 === null) cu3 = 0
let gguild432 = await db.fetch(`gguild_${args[0]}`)
if(gguild432 === null) gguild432 = ''

const embedprofile12 = new MessageEmbed()
.setTitle(`${bot} ${gowner3} Perfil de ${message.client.users.cache.get(`${args[0]}`).username}`)
.setThumbnail(`${message.client.users.cache.get(`${args[0]}`).displayAvatarURL({dynamic: true})}`)
.setColor('RANDOM')
.setDescription(`<:info:729075450315407507> Nome: \`${message.client.users.cache.get(`${args[0]}`).tag}\`
<a:x_girandinho:729075987521863690> Créditos: \`${credits3}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:hana_data:729075187793788968> Reps: \`${rep3}\`
<:hana_arrow:729074687145017435> Status do casamento: \`${married3}\`
<:vip:729076045843529828> Hana Premium: \`${vip3}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:blacklisted:729074968104534116> Blacklisted: ${bl3}
<:hypesquad:729075047565885561> Servidor Favorito: ${gemblems} ${gguild432}
<:settings:729077133472694323> Comandos utilizados: \`${cu3}\`
<:hana_emblems:729076141239042058> Emblemas: ${hanastaff3} ${hanabh3} ${hanavipicon3} ${hanadev3} ${hanamarry3} ${hp3}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
\`\`\`${hanaabout3}\`\`\`\  `)
return message.say(embedprofile12)
if(message.guild.members.cache.filter(member => member.user.bot)) return db.set(`bot_${args[0]}`, '<:bot_tag:727867192435277845>')
if(message.guild.members.cache.filter(member => !member.user.bot)) db.set(`bot_${args[0]}`, '')
}
let hanastaff = await db.fetch(`hanastaff5_${user.id}`)
let rep = await db.fetch(`rep_${user.id}`)
let credits345 = await db.fetch(`credits_${user.id}`)
let vip = await db.fetch(`vip_${user.id}`)
let hanamarry = await db.fetch(`hanamarry5_${user.id}`)
let married = await db.fetch(`marry4_${user.id}`)
let hanaabout = await db.fetch(`about_${user.id}`)
let hanavipicon = await db.fetch(`hanavip5_${user.id}`) 
let hanabh = await db.fetch(`hanabh5_${user.id}`)
let hanadev = await  db.fetch(`hanadev5_${user.id}`)
let hp5 = await  db.fetch(`hanap5_${user.id}`)
if(hp5 === null) hp5 = ''
if(hanadev === null) hanadev = ''
if(hanavipicon === null) hanavipicon = ''
if(hanastaff === null) hanastaff = ''
if(hanamarry === null) hanamarry = ''
if(hanabh === null) hanabh = ''
if(credits345 === null) credits345 = 0
if(rep === null) rep = 0
if(vip === null) vip = 'Not Active'
if(married === null) married = 'Alone'
if(hanaabout === null) hanaabout = 'I\'m using Hana! You can change this using ht!aboutme'
if(user.bot === true) db.set(`bot_${user.id}`, '<:bot:729109597767598110>')
if(user.bot === false) db.set(`bot_${user.id}`, '')
let bot = await db.fetch(`bot_${user.id}`)
if(bot === null) bot = ''
let cu = await db.fetch(`cu_${user.id}`)
let gemblems = db.fetch(`gemblem_${user.id}`)
let gemblem = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems === null) gemblems = ''
if(cu === null) cu = 0
let bl333 = await db.fetch(`blist_${user.id}`)
if(bl333 === null) bl333 = '<:disabled:729074769621811200>'
let gguild43 = await db.fetch(`gguild_${user.id}`)
if(gguild43 === null) gguild43 = ''
if(user.id === message.guild.owner.id) db.set(`gowner_${user.id}`, ':crown:')
if(user.id != message.guild.owner.id) db.set(`gowner_${user.id}`, '')
let gowner33 = await db.fetch(`gowner_${user.id}`)
let bl32 = await db.fetch(`blist_${user.id}`)
let blreasom2 = await db.fetch(`blreason_${user.id}`)
if(bl32 === '<:enabled:730821706347708437>') {
 return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}> , <@${user.id}> está banido!**
:notepad_spiral: **| Motivo:** \`${blreasom2}\``)
}
const embedprofile = new MessageEmbed()
.setTitle(`${gowner33} ${bot} Perfil de ${user.username}`)
.setThumbnail(`${user.displayAvatarURL({dynamic: true})}`)
.setColor('RANDOM')
.setDescription(`<:info:729075450315407507> Nome: \`${user.tag}\`
<a:x_girandinho:729075987521863690> Créditos: \`${credits345}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:hana_data:729075187793788968> Reps: \`${rep}\`
<:hana_arrow:729074687145017435> Status do casamento: \`${married}\`
<:vip:729076045843529828> Hana Premium: \`${vip}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:hana_emblems:729076141239042058> Blacklisted: ${bl333}
<:hana_emblems:729076141239042058> Servidor Favorito: ${gemblems} ${gguild43}
<:hana_emblems:729076141239042058> Comandos utilizados: \`${cu}\`
<:hana_emblems:729076141239042058> Emblemas: ${hanastaff} ${hanabh} ${hanavipicon} ${hanadev} ${hanamarry} ${hp5}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
\`\`\`${hanaabout3}\`\`\`\  `)
return message.channel.send(embedprofile)


  
}

if(message.author.id === message.guild.owner.id) db.set(`gowner_${message.author.id}`, ':crown:')
if(message.author.id != message.guild.owner.id) db.set(`gowner_${message.author.id}`, '')
let gowner3 = await db.fetch(`gowner_${message.author.id}`)
let bl = await db.fetch(`blist_${message.author.id}`)
if(bl === null) bl = '<:disabled:729074769621811200>'
let gemblems = await db.fetch(`gemblem_${message.author.id}`)
let gemblem = await db.fetch(`gemblem_${message.guild.id}`)
let gguild = await db.fetch(`gguild_${message.author.id}`)
if(gguild === null) gguild = ''
if(gemblems === null) gemblems = ''
const embedprofile1 = new MessageEmbed()
.setTitle(`${gowner3} ${message.author.username}'s profile`)
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setColor('RANDOM')
.setDescription(`<:info:729075450315407507> Name: \`${message.author.tag}\`
<a:x_girandinho:729075987521863690> Credits: \`${credits3}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:hana_data:729075187793788968> Reps: \`${rep3}\`
<:hana_arrow:729074687145017435> Marry Stats: \`${married3}\`
<:vip:729076045843529828> Hana Premium: \`${vip3}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:blacklisted:729074968104534116> Blacklisted: ${bl}
<:hypesquad:729075047565885561> Favorite Server: ${gemblems} ${gguild}
<:settings:729077133472694323> Commands Used: \`${cu3}\`
<:hana_emblems:729076141239042058> Emblems: ${hanastaff3} ${hanabh3} ${hanavipicon3} ${hanadev3} ${hanamarry3} ${hp3}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
\`\`\`${hanaabout3}\`\`\`\  `)

if(!args[0]){
return message.say(embedprofile1)}
if(!user && args[0].length > 3){
const amount = parseInt(args[0]);
if(isNaN(amount)) {
 return message.say(`<a:erro:729089430685614092> ┃ **I couldn\'t find any user with this ID! Maybe the ID you provided is invalid.**`)
}
if(message.client.users.cache.get(`${args[0]}`) == "undefined" || message.client.users.cache.get(`${args[0]}`) == null) {
return message.say('<a:erro:729089430685614092> ┃ **I couldn\'t find any user with this ID! Maybe the ID you provided is invalid.**')
}
let rep4 = await db.fetch(`rep_${args[0]}`)
let credits4 = await db.fetch(`credits_${args[0]}`)
let vip4 = await db.fetch(`vip_${args[0]}`)
let married4 = await db.fetch(`marry4_${args[0]}`)
let hanaabout4 = await db.fetch(`about_${args[0]}`)
let hanastaff4 = await db.fetch(`hanastaff5_${args[0]}`)
let hanavipicon4 = await db.fetch(`hanavip5_${args[0]}`) 
let hanadev4 = await  db.fetch(`hanadev5_${args[0]}`)
let hanabh4 = await db.fetch(`hanabh5_${args[0]}`)
let hanamarry4 = await db.fetch(`hanamarry5_${args[0]}`)
let hp4 = await  db.fetch(`hanap5_${args[0]}`)
if(hp4 === null) hp4 = ''
if(hanamarry4 === null) hanamarry4 = ''
if(hanadev4 === null) hanadev4 = ''
if(hanavipicon4 === null) hanavipicon4 = ''
if(hanastaff4 === null) hanastaff4 = ''
if(hanabh4 === null) hanabh4 = ''
if(vip4 === null) vip4 = 'Not Active'
if(married4 === null) married4 = 'Alone'
if(credits4 === null) credits4 = 0
if(rep4 === null) rep4 = 0
if(hanaabout4 === null) hanaabout4 = 'I\'m using Hana! You can change this using ht!aboutme'
if(hanastaff4 === null) hanastaff4 = 'Nothing'
let bot = await db.fetch(`bot_${args[0]}`)
if(args[0] === message.guild.owner.id) db.set(`gowner_${args[0]}`, ':crown:')
if(args[0] != message.guild.owner.id) db.set(`gowner_${args[0]}`, '')
let gowner3 = await db.fetch(`gowner_${args[0]}`)
let cu = await db.fetch(`cu_${args[0]}`)
let gemblems3 = db.fetch(`gemblem_${args[0]}`)
let gemblem = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems === null) gemblems = ''
if(cu === null) cu = 0
let gguild4 = await db.fetch(`gguild_${args[0]}`)
if(gguild4 === null) gguild4 = ''
let bl4 = await db.fetch(`blist_${args[0]}`)
if(bl4 === null) bl4 = '<:disabled:729074769621811200>'

const embedprofile123 = new MessageEmbed()
.setTitle(`${bot}${gowner3} ${message.client.users.cache.get(`${args[0]}`).username}\'s Profile`)
.setThumbnail(`${message.client.users.cache.get(`${args[0]}`).displayAvatarURL({dynamic: true})}`)
.setColor('RANDOM')
.setDescription(`<:info:729075450315407507> Name: \`${message.client.users.cache.get(`${args[0]}`).tag}\`
<a:x_girandinho:729075987521863690> Credits: \`${credits4}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:hana_data:729075187793788968> Reps: \`${rep4}\`
<:hana_arrow:729074687145017435> Married Status: \`${married4}\`
<:vip:729076045843529828> Hana Premium: \`${vip4}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:blacklisted:729074968104534116> Blacklisted: ${bl4}
<:hypesquad:729075047565885561> Favorite Server: ${gemblems3} ${gguild4}
<:settings:729077133472694323> Commands used: \`${cu}\`
<:hana_emblems:729076141239042058> Emblemas: ${hanastaff4} ${hanabh4} ${hanavipicon4} ${hanadev4} ${hanamarry4} ${hp4}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
\`\`\`${hanaabout4}\`\`\`\  `)

return message.say(embedprofile123)
}

let hanastaff = await db.fetch(`hanastaff5_${user.id}`)
let rep = await db.fetch(`rep_${user.id}`)
let credits = await db.fetch(`credits_${user.id}`)
let vip = await db.fetch(`vip_${user.id}`)
let hanamarry = await db.fetch(`hanamarry5_${user.id}`)
let married = await db.fetch(`marry4_${user.id}`)
let hanaabout = await db.fetch(`about_${user.id}`)
let hanavipicon = await db.fetch(`hanavip5_${user.id}`) 
let hanabh = await db.fetch(`hanabh5_${user.id}`)
let hanadev = await  db.fetch(`hanadev5_${user.id}`)
let hp = await  db.fetch(`hanap5_${user.id}`)
if(hp === null) hp = ''
if(hanadev === null) hanadev = ''
if(hanavipicon === null) hanavipicon = ''
if(hanastaff === null) hanastaff = ''
if(hanamarry === null) hanamarry = ''
if(hanabh === null) hanabh = ''
if(credits === null) credits = 0
if(rep === null) rep = 0
if(vip === null) vip = 'Not Active'
if(married === null) married = 'Alone'
if(hanaabout === null) hanaabout = 'I\'m using Hana! You can change this using ht!aboutme'
if(user.bot === true) db.set(`bot_${user.id}`, '<:bot:729109597767598110>')
if(user.bot === false) db.set(`bot_${user.id}`, '')
let bot = await db.fetch(`bot_${user.id}`)
if(bot === null) bot = ''
let cu = await db.fetch(`cu_${user.id}`)
let gemblems3 = db.fetch(`gemblem_${user.id}`)
let gemblem3 = db.fetch(`gemblem_${message.guild.id}`)
if(gemblems3 === null) gemblems3 = ''
if(cu === null) cu = 0
let bl3 = await db.fetch(`blist_${args[0]}`)
if(bl3 === null) bl3 = '<:disabled:729074769621811200>'
let gguild3 = await db.fetch(`gguild_${user.id}`)
if(gguild3 === null) gguild3 = ''
if(user.id === message.guild.owner.id) db.set(`gowner_${user.id}`, ':crown:')
if(user.id != message.guild.owner.id) db.set(`gowner_${user.id}`, '')

let gowner343 = await db.fetch(`gowner_${user.id}`)
let bl32 = await db.fetch(`blist_${user.id}`)
let blreasom2 = await db.fetch(`blreason_${user.id}`)  
if(bl32 === '<:enabled:730821706347708437>') {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}>, <@${user.id}> is banned!**
:notepad_spiral: **| Reason:** \`${blreasom2}\``)
}
const embedprofile = new MessageEmbed()
.setTitle(`${gowner343} ${bot} Perfil de ${user.username}`)
.setThumbnail(`${user.displayAvatarURL({dynamic: true})}`)
.setColor('RANDOM')
.setDescription(`<:info:729075450315407507> Name: \`${user.tag}\`
<a:x_girandinho:729075987521863690> Credits: \`${credits}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:hana_data:729075187793788968> Reps: \`${rep}\`
<:hana_arrow:729074687145017435> Married Status: \`${married}\`
<:vip:729076045843529828> Hana Premium: \`${vip}\`
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
<:blacklisted:729074968104534116> Blacklisted: ${bl3}
<:hypesquad:729075047565885561> Favorite Server: ${gemblems3} ${gguild3}
<:settings:729077133472694323> Commands used: \`${cu}\`
<:hana_emblems:729076141239042058> Emblemas: ${hanastaff} ${hanabh} ${hanavipicon} ${hanadev} ${hanamarry} ${hp}
<:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527><:hana_line:729071940538597527>
\`\`\`${hanaabout}\`\`\`\  `)
return message.channel.send(embedprofile)

}}  
  





