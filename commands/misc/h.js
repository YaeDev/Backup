const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json')
const Discord = require('discord.js')
const client = new Discord.Client()
const db  = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      aliases: ['ajuda', 'h'],
      memberName: 'help',
      group: 'misc',
      description: 'Alternative help command',
      guildOnly: false
    });
  }

async  run(message) {

db.add(`cu_${message.author.id}`, 1)
  const { prefix } = require('../../config.json')
const dmembed = new MessageEmbed()
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
if(language === 1){
const modembed = new MessageEmbed()
.setTitle('Comandos de Moderação')
.setDescription(`
<:hana_arrow:729074687145017435> muteconfig - Coloca uma imagem ou gif (Precisa ser url) na hora de silenciar alguém

<:hana_arrow:729074687145017435> banconfig - Coloca uma imagem ou gif (Precisa ser url) na hora de banir alguém

<:hana_arrow:729074687145017435> mute - Silencia um membro

<:hana_arrow:729074687145017435> tempmute - Silencia temporariamente um membro

<:hana_arrow:729074687145017435> ban - Bane um membro

<:hana_arrow:729074687145017435> unmute - Dessilencia um membro

<:hana_arrow:729074687145017435> config-mod - Abre o painel de configurações para o módulo de moderação`)
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setFooter(`Command executed by ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)

const getstarted = new MessageEmbed()
.setTitle('Para começar')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
<:settings:729077133472694323> **Vamos começar tocando uma música**

<:hana_arrow:729074687145017435> O prefixo original é ht!, porém você pode trocar a qualquer momento usando ht!prefix <novo prefixo>

<:hana_arrow:729074687145017435> **Primeiro você coloca ht!play (ou o prefixo setado) e um url ou um nome de uma música. 5 resultados irão aparecer e só com o número você seleciona um deles **

<:hana_arrow:729074687145017435> Para adicionar uma playlist basta fazer o mesmo procedimento, colocando a url da playlist (Maximo 30 músicas)

<:hana_arrow:729074687145017435> Para pular uma música, pausar, resumir ou fazer o bot sair da call você pode usar o painel ou simplesmente usar os comandos.

<:hana_arrow:729074687145017435> Hana tem também alguns comandos para diversão, como o profile e etc.

<:hana_arrow:729074687145017435> Espero que aproveite e desfrute muito de mim!`)
.setFooter(`Comando executado por: ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724621720392302632/20200622_104749_0000.png')

const embedfun = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Comandos de diversão')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
<:hana_arrow:729074687145017435> abraçar - Abraçe alguém e mostre seu carinho por ela!
<:hana_arrow:729074687145017435> beijar - Beije alguém e mostre seu afeto por ela!
<:hana_arrow:729074687145017435> caf ou cafune - Faça cafuné na cabeça de seu amigo ou amiga!
<:hana_arrow:729074687145017435> perfil - Mostra seu perfil na Hana
<:hana_arrow:729074687145017435> casar - Faça seu casamento na Hana! (Cada um precisa de 5000 créditos!)
<:hana_arrow:729074687145017435> rep ou reputar - Quer mostrar sua gratidão para aquela pessoa que te ajudou? Use esse comando para dar uma reputação a ela!
Lembrando que membros Hana Premium conseguem multiplicar o seu rep!
<:hana_arrow:729074687145017435> pagar ou pay - Doe ou pague uma quantia a uma determinada pessoa!
<:hana_arrow:729074687145017435> sobremim, aboutme, bio - Troque a sua biografia do comando perfil! (Limite de 80 caractéres)
<:hana_arrow:729074687145017435> divorce - Se divorcie de seu parceiro (Precisa estar casado)
<:hana_arrow:729074687145017435> fav-server ou emblem - Coloque o emblema e nome de seu servidor favorito em seu perfil (Para o comando funcionar a Hana precisa estar no servidor desejado e o servidor ser Hana Premium for Servers)
<:hana_arrow:729074687145017435> coinflip - Desafie seu amigo para uma partida de cara ou coroa, se cair cara ou coroa, você ou seu amigo pode ganhar créditos!`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724620526881996881/20200622_104300_0000.png')
.setFooter(`Comando executado por: ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
const embedmisc = new MessageEmbed()
.setTitle('Comandos Diversos')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
<:hana_arrow:729074687145017435> prefix - Sem nenhum argumento você pode ver o prefixo dela em certo servidor, caso você coloque algum argumento será possível trocar o prefixo dela.
<:hana_arrow:729074687145017435> help - O clássico comando de ajuda
<:hana_arrow:729074687145017435> invite - Use esse comando se você quiser me convidar para seu servidor!
<:hana_arrow:729074687145017435> vote - Use esse comando caso você queira me ajudar votando em mim!
`)
.setColor('RANDOM')
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724396071920337007/20200621_195114_0000.png')
const embedvip = new MessageEmbed()
.setTitle('Hana Premium')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
**O que é o Hana Premium?**

<:vip:729076045843529828> Hana Premium é o recente vip que a Hana traz para os membros contendo alguns benefícios:

<:hana_arrow:729074687145017435> Você tem sorteios exclusivos de nitro, créditos no bot e várias outras coisas! (Precisa estar em nosso servidor de suporte)
<:hana_arrow:729074687145017435> Você pode multiplicar os creditos que ganhar no comando daily da Hana, alem de sua reputação dada ao usuário valer por 2!
<:hana_arrow:729074687145017435> Você ganha um insignia exclusiva no seu perfil (ht!perfil)
<:hana_arrow:729074687145017435> Você tem acesso ao suporte premium exclusivo para membros Hana Premium! (Precisa estar em nosso servidor de suporte)
<:hana_arrow:729074687145017435> E muito mais!

**Como eu consigo me tornar um membro Hana Premium?**

<:hana_arrow:729074687145017435> Fazendo uma donate de 19 reais ou mais para a Hana ou em sorteios do meu dono
<:hana_arrow:729074687145017435> Impulsionando meu servidor de suporte uma vez

<:hana_arrow:729074687145017435> Caso você impulsione o servidor 2 vezes, você poderá presentear um amigo seu!

**Hana Premium For Servers (Comandos)**

<:hana_arrow:729074687145017435> set-emblem - Crie ou altere um emblema para os membros do servidor poderem usar! (Precisa ser um emoji)
`)
.setFooter(`Comando executado por: ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/726496480625426493/20200627_145729_0000.png')
const embedmusic = new MessageEmbed()
 .setTitle('Comandos de música')
.setColor('RANDOM')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`
<:hana_arrow:729074687145017435> play - Toque aquela música ou aquela playlist que você ama me utilizando! (Comando em inglês)
<:hana_arrow:729074687145017435> ptplay - Tem a mesma função do comando play porém em português!
<:hana_arrow:729074687145017435> pause ou pausar - Pausa a música que está tocando.
<:hana_arrow:729074687145017435> resume ou resumir - Resume a música que estava tocando.
<:hana_arrow:729074687145017435> leave ou sair - Faz o bot sair do canal de voz, limpar a fila e parar de tocar a música.
<:hana_arrow:729074687145017435> loop - Repete o som que está tocando.
<:hana_arrow:729074687145017435> lyrics ou letra - Disponibiliza a letra da música que você pesquisar.
<:hana_arrow:729074687145017435> panel ou painel - Mostra um painel com os comandos skip, leave, pause e resume e para utilizar o painel basta apenas reagir
<:hana_arrow:729074687145017435> queue ou fila- Mostra as próximas músicas a serem tocadas.
<:hana_arrow:729074687145017435> skip ou pular - Pula para a próxima música na fila.
<:hana_arrow:729074687145017435> volume - Altera a porcentagem do volume da música.
<:hana_arrow:729074687145017435> skipall - Limpa a fila e sai do canal de voz.
<:hana_arrow:729074687145017435> shuffle ou aleatório - Mistura as músicas que estão na fila.
<:hana_arrow:729074687145017435> remove ou remover - Remove um som que estiver na fila.
`)
.setFooter(`Comando executado por: ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724398621549920306/20200621_200119_0000.png')
  const path = require('path') 
const embedpause = new MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:mutem:703987260139241572> Commands')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`<a:hana_disco:729076950085271622> Comandos de música
<:settings:729077133472694323> Comandos diversos
<:wave_doggo:729076923166359614> Para começar
<:Cafun:729076723370426439> Comandos de diversão 
<:vip:729076045843529828> Hana Premium
<:sstaff:729076201276178493> Comandos de moderação

<:hana_arrow:729074687145017435> Caso você queira me ajudar mas não sabe como, pode me ajudar votando e mostrando seu apoio!

<a:dblspin:729077025108918313>[Bots para Discord](https://botsparadiscord.com/bots/710137790897062059/votar)
<:botsparadiscord:729077071468298310> [Discord Bot List](https://top.gg/bot/710137790897062059/vote)

`)
.setFooter(`Comando executado por: ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724405766022365244/20200621_202941_0000.png')
  return  message.say(embedpause).then(msg => {
msg.react('729076045843529828')
msg.react('729076723370426439')
msg.react('729076201276178493')
msg.react('729076923166359614')
msg.react('729077133472694323')
msg.react('729076950085271622')
msg.react('◀')
       let filtro = (reaction, usuario) => reaction.emoji.name === "settings" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 3, time: 60000})

coletor.on("collect", cp => {
     msg.edit(embedmisc)

})
       let filtro233 = (reaction, usuario) => reaction.emoji.name === "sstaff" && usuario.id === message.author.id;
        let coletor233 = msg.createReactionCollector(filtro233, {max: 3, time: 60000})

coletor233.on("collect", cp => {
     msg.edit(modembed)

})
        let filtro12 = (reaction, usuario) => reaction.emoji.name === "vip" && usuario.id === message.author.id;
        let coletor12 = msg.createReactionCollector(filtro12, {max: 3, time: 60000})

coletor12.on("collect", cp => {
     msg.edit(embedvip)

})
   let filtro2 = (reaction, usuario) => reaction.emoji.name === "hana_disco" && usuario.id === message.author.id
   let coletor2 = msg.createReactionCollector(filtro2, {max: 3, time: 60000})

coletor2.on("collect", cp => {
  msg.edit(embedmusic)

})

   let filtro3 = (reaction, usuario) => reaction.emoji.name === "wave_doggo" && usuario.id === message.author.id
   let coletor3 = msg.createReactionCollector(filtro3, {max: 3, time: 60000})

coletor3.on("collect", cp => {
  msg.edit(getstarted)

})
   let filtro5 = (reaction, usuario) => reaction.emoji.name === "Cafun" && usuario.id === message.author.id
   let coletor5 = msg.createReactionCollector(filtro5, {max: 3, time: 60000})

coletor5.on("collect", cp => {
  msg.edit(embedfun)

})

   let filtro6 = (reaction, usuario) => reaction.emoji.name === "◀" && usuario.id === message.author.id
   let coletor6 = msg.createReactionCollector(filtro6, {max: 3, time: 60000})

coletor6.on("collect", cp => {
  msg.edit(embedpause)
})
    })

}
const modembed = new MessageEmbed()
.setTitle('Moderation Commands')
.setDescription(`
<:hana_arrow:729074687145017435> muteconfig - Put an image or gif (Needs to be an url) and it will appear when you mute someone

<:hana_arrow:729074687145017435> banconfig - Put an image or gif (Needs to be an url) and it will appear when you ban someone

<:hana_arrow:729074687145017435> mute - Mute someone

<:hana_arrow:729074687145017435> tempmute - Temporary mute someone

<:hana_arrow:729074687145017435> ban - Ban someone

<:hana_arrow:729074687145017435> unmute - Unmute a member

<:hana_arrow:729074687145017435> config-mod - Opens the configuration panel to moderation module`)
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setFooter(`Command executed by ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
const dwmembed = new MessageEmbed()
.setTitle('All commands!')
.setColor('RANDOM')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription('All my commands, including music, fun and misc commands you can find below:')
.addField(`Music:`, `<:hana_arrow:723930278783090709> play - Play a command using an url or a song name, remember to use a number after the bot search 5 results.
<:hana_arrow:723930278783090709> pause - Pause the current song.
<:hana_arrow:723930278783090709> resume - Resume the current song.
<:hana_arrow:723930278783090709> leave - Make the bot leave the current voice channel and stop all songs (clearing the queue).
<:hana_arrow:723930278783090709> loop - Repeat the current song.
<:hana_arrow:723930278783090709> lyrics - Get the lyrics of any song.
<:hana_arrow:723930278783090709> panel - Display a simple panel with pause, resume, leave and skip command, you can use the commands just reacting.
<:hana_arrow:723930278783090709>np - Shows some informations of the current song.
<:hana_arrow:723930278783090709> queue - Shows the next songs in a embed.
<:hana_arrow:723930278783090709> skip - Skip the current song.
<:hana_arrow:723930278783090709> volume - Change the current volume.
<:hana_arrow:723930278783090709> clear - Clear the queue and leave the current voice channel.
<:hana_arrow:723930278783090709> shuffle - Shuffle the queue.
<:hana_arrow:723930278783090709> remove - Remove a song from the queue.`)
.addField(`Miscellaneous:`,`<:hana_arrow:723930278783090709> prefix - With no args given you can see what is the current prefix in **${message.guild.name}**, with args given you can change the prefix.
<:hana_arrow:723930278783090709> help - Help Command`)
const embedget = new MessageEmbed()
.setTitle('Getting Started')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
<:settings:729077133472694323> **Lets get started playing a music**

<:hana_arrow:729074687145017435> The common prefix is ht!, but you can change using ht!prefix <new prefix>

<:hana_arrow:729074687145017435> **First use (prefix)play and provide an url or a song name, after the bot search, will appear 5 results, use only the number to select a music**
<:hana_arrow:729074687145017435> To add another music you can do the same process.
<:hana_arrow:729074687145017435> To add a playlist to the queue you can put the playlist url (Max songs: 30)

<:hana_arrow:729074687145017435> To skip, pause, resume and leave you can use the panel or the commands leave, resume, pause and skip.

<:hana_arrow:729074687145017435> Hana has miscellaneous commands, like hug or prefix

<:hana_arrow:729074687145017435> Enjoy playing songs with me!`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724621720392302632/20200622_104749_0000.png')
.setFooter(`Command executed by ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
const embedfun = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Fun Commands')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
<:hana_arrow:729074687145017435> hug - Hug someone!
<:hana_arrow:729074687145017435> kiss - Kiss someone!
<:hana_arrow:729074687145017435> pat - Cuddle someone!
<:hana_arrow:729074687145017435> profile - Show your or someone's profile
<:hana_arrow:729074687145017435> rep - Do you want to demonstrate your thank to someone? Give a reputation to this person!
**Hana Premium users can multiplicate your reputation by 2 and give 2 reputations to the user!**
<:hana_arrow:729074687145017435> marry - Marry with someone!
<:hana_arrow:729074687145017435> emblem - Set a emblem to your profile of your favorite server! (The server needs to be Premium and have an emoji)
<:hana_arrow:729074687145017435> divorce - If you don't want your partner, you can divorce...
<:hana_arrow:729074687145017435> coinflip - Bet your friend to a coinflip challenge!`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724620526881996881/20200622_104300_0000.png')
.setFooter(`Command executed by ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
const embedmisc = new MessageEmbed()
.setTitle('Miscellaneous Commands')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
<:hana_arrow:729074687145017435> prefix - With no args given you can see what is the current prefix in **a guild**, with args given you can change the prefix.
<:hana_arrow:729074687145017435> help - Help Command
<:hana_arrow:729074687145017435> invite - Use this command if you want to invite me
<:hana_arrow:729074687145017435> vote - Use this command if you want to vote and help my bot
`)
.setColor('RANDOM')
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724396071920337007/20200621_195114_0000.png')
const embedvip = new MessageEmbed()
.setTitle('Hana Premium')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`
**What's Hana Premium?**

<:vip:729076045843529828> Hana Premium is a new feature that increase some benefits:

<:hana_arrow:729074687145017435> You can have exclusive giveaways of nitro, money, hana credits and more!
<:hana_arrow:729074687145017435> You have a 2x multiplier in daily and rep commands!
<:hana_arrow:729074687145017435> You win a badge in ht!profile command
<:hana_arrow:729074687145017435> You have premium support! (You need to join in our support server)
<:hana_arrow:729074687145017435> And more!

**How do I get Hana Premium?**

<:hana_arrow:729074687145017435> You can win boosting my support server or in my owner giveaways!
<:hana_arrow:729074687145017435> If you boost my support server you need to call the bot owner in dm and he will give the premium to you!
<:hana_arrow:729074687145017435> If you boost 2 times you can gift someone the premium!

**Hana Premium For Servers (Commands)**

<:hana_arrow:729074687145017435> set-emblem - Set your server emblem (Needs to be an emoji)! Members can get this emblem!`)
.setFooter(`Command executed by ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/726496480625426493/20200627_145729_0000.png')
const dmsend = new MessageEmbed()
.setTitle('Dm sucessfully Sent!')
.setColor('RANDOM')
.setThumbnail(`${message.member.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`<a:hana_sucess:724447546235158628> My commands has successfully sent to your dm. If you didn't receive nothing, maybe your dm is disabled...`)
.setFooter(`Command executed by ${message.author.username} ◾ ${message.author.id}`, message.client.user.displayAvatarURL)
const embedmusic = new MessageEmbed()
 .setTitle('Music Commands')
.setColor('RANDOM')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`
<:hana_arrow:729074687145017435> play - Play a command using an url or a song name, remember to use a number after the bot search 5 results.
<:hana_arrow:729074687145017435> pause - Pause the current song.
<:hana_arrow:729074687145017435> resume - Resume the current song.
<:hana_arrow:729074687145017435> leave - Make the bot leave the current voice channel and stop all songs (clearing the queue).
<:hana_arrow:729074687145017435> loop - Repeat the current song.
<:hana_arrow:729074687145017435> lyrics - Get the lyrics of any song.
<:hana_arrow:729074687145017435> panel - Display a simple panel with pause, resume, leave and skip command, you can use the commands just reacting.
<:hana_arrow:729074687145017435> np - Shows some informations of the current song.
<:hana_arrow:729074687145017435> queue - Shows the next songs in a embed.
<:hana_arrow:729074687145017435> skip - Skip the current song.
<:hana_arrow:729074687145017435> volume - Change the current volume.
<:hana_arrow:729074687145017435> clear - Clear the queue and leave the current voice channel.
<:hana_arrow:729074687145017435> shuffle - Shuffle the queue.
<:hana_arrow:729074687145017435> remove - Remove a song from the queue.`)
.setFooter(`Command executed by ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724398621549920306/20200621_200119_0000.png')
  const path = require('path') 
const embedpause = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Commands')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`<a:hana_disco:729076950085271622> Hana music Commands
<:settings:729077133472694323> Miscellaneous Commands
<:wave_doggo:729076923166359614> Get Started
<:Cafun:729076723370426439> Fun commands! 
<:vip:729076045843529828> Hana Vip 
<:sstaff:729076201276178493> Moderation commands

<:hana_arrow:729074687145017435> If you like my commands and want to help me, you can vote using the following sites:

<:botsparadiscord:729077071468298310> [Bots para Discord](https://botsparadiscord.com/bots/710137790897062059/votar)
<a:dblspin:729077025108918313> [Discord Bot List](https://top.gg/bot/710137790897062059/vote)
`)
.setFooter(`Command executed by ${message.author.username}`, `${message.member.user.displayAvatarURL({ dynamic:true })}`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724405766022365244/20200621_202941_0000.png')
    message.say(embedpause).then(msg => {
msg.react('729076723370426439')
msg.react('729076045843529828')
msg.react('729076950085271622')
msg.react('729076923166359614')
msg.react('729077133472694323')
msg.react('729076201276178493')
msg.react('◀')

       let filtro233 = (reaction, usuario) => reaction.emoji.name === "sstaff" && usuario.id === message.author.id;
        let coletor233 = msg.createReactionCollector(filtro233, {max: 3, time: 60000})

coletor233.on("collect", cp => {
     msg.edit(modembed)

})

        let filtro = (reaction, usuario) => reaction.emoji.name === "settings" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 3, time: 60000})

coletor.on("collect", cp => {
     msg.edit(embedmisc)

})
        let filtro12 = (reaction, usuario) => reaction.emoji.name === "vip" && usuario.id === message.author.id;
        let coletor12 = msg.createReactionCollector(filtro12, {max: 3, time: 60000})

coletor12.on("collect", cp => {
     msg.edit(embedvip)

})
   let filtro2 = (reaction, usuario) => reaction.emoji.name === "hana_disco" && usuario.id === message.author.id
   let coletor2 = msg.createReactionCollector(filtro2, {max: 3, time: 60000})

coletor2.on("collect", cp => {
  msg.edit(embedmusic)

})

   let filtro3 = (reaction, usuario) => reaction.emoji.name === "wave_doggo" && usuario.id === message.author.id
   let coletor3 = msg.createReactionCollector(filtro3, {max: 3, time: 60000})

coletor3.on("collect", cp => {
  msg.edit(embedget)

})
   let filtro5 = (reaction, usuario) => reaction.emoji.name === "Cafun" && usuario.id === message.author.id
   let coletor5 = msg.createReactionCollector(filtro5, {max: 3, time: 60000})

coletor5.on("collect", cp => {
  msg.edit(embedfun)

})

   let filtro6 = (reaction, usuario) => reaction.emoji.name === "◀" && usuario.id === message.author.id
   let coletor6 = msg.createReactionCollector(filtro6, {max: 3, time: 60000})

coletor6.on("collect", cp => {
  msg.edit(embedpause)
})
    })
  }
                               
};
