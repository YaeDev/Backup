const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const db = require('quick.db')

module.exports = class PlayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'ptplay',
      aliases: ['tocar', 'ptp'],
      memberName: 'ptplay',
      group: 'music',
      description: 'Play any song or playlist from youtube',
      guildOnly: false,
      throttling: {
        usages: 2,
        duration: 5
      },
      args: [
        {
          key: 'query',
          prompt: 'Qual música ou playlist você quer ouvir?',
          type: 'string',
          validate: query => query.length > 0 && query.length < 200
        }
    ]
    });
  }
  

  async run(message, { query }) {
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
let youtubeAPI = 'AIzaSyC5WSWnwkQMhLT_meJ6LZ8ISUfY83tW_F4'
const rando_imgs = [
'AIzaSyCUQHhOG7K7qzVSVGcTpeTYnVGBoZUienU',
'AIzaSyBdv7dGrbzwwtrd2CyIHTxdJNVTELtP3vE',
'AIzaSyC5WSWnwkQMhLT_meJ6LZ8ISUfY83tW_F4',
'AIzaSyAU-bqLq7s-cRnpx9vJftJbQwWykwiZXf4',
'AIzaSyCKq6JzewgPMXCrCzJN6ViVqCraTSRihVw',
'AIzaSyAMyEXKhw2VmK2lifDiS0niG41OftentrU',
'AIzaSyDL3jmmGU_6lnRj9fxIBzakCjtDgtCH63I',
'AIzaSyAALubfr1xldCOOaRR8xmIPmGoowIQxiAs',
]
youtubeAPI = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
const youtube = new Youtube(youtubeAPI);

const embedvc = new MessageEmbed()
  .setColor('RED')
  .setTitle('<a:erro:720379774882545724> Error')
  .setDescription(`You need to be in my voice channel to run a command! `)
    // initial checking

    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.say(
        '<a:no:698990098905169951> Entre em um canal de voz antes que selecionar uma música!'
      );
    // end initial check
    if (message.guild.triviaData.isTriviaRunning == true)
      return message.say('Please try after the trivia has ended');
    // This if statement checks if the user entered a youtube playlist url
    if (
      query.match(
        /^(?!.*\?.*\bv=)https:\/\/www\.youtube\.com\/.*\?.*\blist=.*$/
      )
    ) {
      try {
        const playlist = await youtube.getPlaylist(query);
        const videosObj = await playlist.getVideos(30); // remove the 10 if you removed the queue limit conditions below
        //const videos = Object.entries(videosObj);
        for (let i = 0; i < videosObj.length; i++) {
          const video = await videosObj[i].fetch();

          const url = `https://www.youtube.com/watch?v=${video.raw.id}`;
          const title = video.raw.snippet.title;
          let duration = this.formatDuration(video.duration);
          const thumbnail = video.thumbnails.high.url;
          if (duration == '00:00') duration = 'Live Stream';
          const song = {
            url,
            title,
            duration,
            thumbnail,
            voiceChannel
          };
          // this can be uncommented if you choose to limit the queue
          // if (message.guild.musicData.queue.length < 10) {
          //
          message.guild.musicData.queue.push(song);
          // } else {
          //   return message.say(
          //     `I can't play the full playlist because there will be more than 10 songs in queue`
          //   );
          // }
        }
        if (message.guild.musicData.isPlaying == false) {
          message.guild.musicData.isPlaying = true;
          return this.playSong(message.guild.musicData.queue, message);
        } else if (message.guild.musicData.isPlaying == true) {
          return message.say(`<a:windows_loading:715751950318305282> Adding.`).then(msg => {
            setTimeout(function() {
              msg.edit(`<a:windows_loading:715751950318305282> Adicionando..`);
            }, 3000);
            setTimeout(function() {
              msg.edit(`<a:windows_loading:715751950318305282> Adicionando...`);
            }, 3000);
            setTimeout(function() {
              msg.edit(`<a:certo:699014500594090115> Sucessfully added your playlist to the queue!`);
            }, 3000);
          });
        }
      } catch (err) {
        console.error(err);
        return message.say(
          '<a:erro:720379774882545724> A playlist é invalida ou um url inválido foi colocado!'
        );
      }
    }

    // This if statement checks if the user entered a youtube url, it can be any kind of youtube url
    if (query.match(/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/)) {
      const url = query;
      try {
        query = query
          .replace(/(>|<)/gi, '')
          .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        const id = query[2].split(/[^0-9a-z_\-]/i)[0];
        const video = await youtube.getVideoByID(id);
        // // can be uncommented if you don't want the bot to play live streams
        // if (video.raw.snippet.liveBroadcastContent === 'live') {
        //   return message.say("I don't support live streams!");
        // }
        // // can be uncommented if you don't want the bot to play videos longer than 1 hour
        // if (video.duration.hours !== 0) {
        //   return message.say('I cannot play videos longer than 1 hour');
        // }
        const title = video.title;
        let duration = this.formatDuration(video.duration);
        const thumbnail = video.thumbnails.high.url;
        if (duration == '00:00') duration = 'Live Stream';
        const song = {
          url,
          title,
          duration,
          thumbnail,
          voiceChannel
        };
        // // can be uncommented if you want to limit the queue
        // if (message.guild.musicData.queue.length > 10) {
        //   return message.say(
        //     'There are too many songs in the queue already, skip or wait a bit'
        //   );
        // }
        message.guild.musicData.queue.push(song);
        if (
          message.guild.musicData.isPlaying == false ||
          typeof message.guild.musicData.isPlaying == 'undefined'
        ) {
          message.guild.musicData.isPlaying = true;
          return this.playSong(message.guild.musicData.queue, message);
        } else if (message.guild.musicData.isPlaying == true) {
          return message.say(`<a:windows_loading:715751950318305282> Adding.`).then(msg => {
            setTimeout(function() {
              msg.edit(`<a:windows_loading:715751950318305282> Adding..`);
            }, 3000);
            setTimeout(function() {
              msg.edit(`<a:windows_loading:715751950318305282> Adding...`);
            }, 3000);
            setTimeout(function() {
              msg.edit(`<a:certo:699014500594090115> Sucessfully added **${song.title}** to the queue!`);
            }, 3000);
          });
        }
      } catch (err) {
        console.error(err);
        return message.say(':no: Alguma coisa deu errado :/');
      }
    }
    try {
      const videos = await youtube.searchVideos(query, 5);
      if (videos.length < 5) {
        return message.say(
          `<a:erro:720379774882545724> Eu não encontrei nenhum resultado para sua pesquisa...`
        );
      }
      const vidLinkArr = [];
      for (let i = 0; i < videos.length; i++) {
        vidLinkArr.push(`${i + 1}: ${videos[i].link}`);
      }
      const vidNameArr = [];
      for (let i = 0; i < videos.length; i++) {
        vidNameArr.push(`${i + 1}: ${videos[i].title}`);
      }
      vidNameArr.push('exit');

      const embed2 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<a:no:698990098905169951> Fim do tempo! ')
        .setDescription(
          '<a:windows_loading:715751950318305282> O tempo de selecionar a música acabou, lembre de sempre colocar um número valido de 1 a 5, de acordo com os títulos!'
        )
        .setFooter('Hana, por Hiro');
      var songEmbed = await message.say(` <a:windows_loading:715751950318305282> Pesquisando.`).then(msg => {
        setTimeout(function() {
          msg.edit(`<a:windows_loading:715751950318305282> Pesquisando..`);
        }, 3000);
        setTimeout(function() {
          msg.edit(`<a:windows_loading:715751950318305282> Pesquisando...`);
        }, 3000);
        setTimeout(function() {
          msg.edit(`**Escolha uma música, colocando um numero de 1 a 5**

**Som 1:** ${vidNameArr[0]}
**Som 2:** ${vidNameArr[1]}
**Som 3:** ${vidNameArr[2]}
**Som 4:** ${vidNameArr[3]}
**Som 5:** ${vidNameArr[4]}
**Sair da seleção:**  Esperar 30 segundos`)
        }, 4000)
        setTimeout(function() {
          msg.edit('<a:windows_loading:715751950318305282> Deletando.');
        }, 34000)

        setTimeout(function() {
          msg.edit('<a:windows_loading:715751950318305282> Deletando..');
        }, 35000)

        setTimeout(function() {
          msg.delete();
        }, 36000);
  
});
      try {
        var response = await message.channel.awaitMessages(
          msg =>
            (msg.content > 0 && msg.content < 6) || msg.content === 'scancel',
          {
            max: 1,
            time: 36000,
            errors: ['time']
          }
        );

        var videoIndex = parseInt(response.first().content);
      } catch (err) {
        console.error(err);
        if (songEmbed) {
          songEmbed.delete();
        }
        return message.say(embed2);
      }
      if (response.first().content === 'scancel') return songEmbed.delete();
      try {
        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        // // can be uncommented if you don't want the bot to play live streams
        // if (video.raw.snippet.liveBroadcastContent === 'live') {
        //   songEmbed.delete();
        //   return message.say("I don't support live streams!");
        // }

        // // can be uncommented if you don't want the bot to play videos longer than 1 hour
        // if (video.duration.hours !== 0) {
        //   songEmbed.delete();
        //   return message.say('I cannot play videos longer than 1 hour');
        // }
      } catch (err) {
        console.error(err);
        if (songEmbed) {
          songEmbed.delete();
        }
        return message.say(
          '<a:erro:720379774882545724> Ocorreu um erro ao tentar pegar o ID do vídeo no youtube, contate nossa equipe.'
        );
      }
      const url = `https://www.youtube.com/watch?v=${video.raw.id}`;
      const title = video.title;
      let duration = this.formatDuration(video.duration);
      const thumbnail = video.thumbnails.high.url;
      if (duration == '00:00') duration = 'Live Stream';
      const song = {
        url,
        title,
        duration,
        thumbnail,
        voiceChannel
      };
      // // can be uncommented if you don't want to limit the queue
      // if (message.guild.musicData.queue.length > 10) {
      //   songEmbed.delete();
      //   return message.say(
      //     'There are too many songs in the queue already, skip or wait a bit'
      //   );
      // }

      message.guild.musicData.queue.push(song);
      if (message.guild.musicData.isPlaying == false) {
        message.guild.musicData.isPlaying = true;
        if (songEmbed) {
          songEmbed.delete();
        }

        this.playSong(message.guild.musicData.queue, message);
      } else if (message.guild.musicData.isPlaying == true) {
        message.channel.send(`A música **${song.title}** foi adicionada na fila!`)
      };
    } catch (err) {
      console.error(err);
      if (songEmbed) {
        songEmbed.delete();
      }
      return message.say(
        '<a:erro:720379774882545724> Ocorreu um erro durante a pesquisa, tente novamente ou contate nossa equipe.'
      );
    }
  }
  playSong(queue, message) {
    queue[0].voiceChannel
      .join()
      .then(connection => {
        const dispatcher = connection
          .play(
            ytdl(queue[0].url, {
              quality: 'highestaudio',
              highWaterMark: 1024 * 1024 * 10
            })
          )
          .on('start', () => {
            message.guild.musicData.songDispatcher = dispatcher;
            dispatcher.setVolume(message.guild.musicData.volume);
            const videoEmbed = new MessageEmbed()
              .setThumbnail(queue[0].thumbnail)
              .setColor('#e9f931')
              .addField('Tocando:', queue[0].title)
              .addField('Duração:', queue[0].duration)
            if (queue[1]) videoEmbed.addField('Próximo som na fila:', queue[1].title);
            message.say(videoEmbed);
            message.guild.musicData.nowPlaying = queue[0];
            return queue.shift();
          })
          .on('finish', () => {
            if (queue.length >= 1) {
              return this.playSong(queue, message);
            } else {
              message.guild.musicData.isPlaying = false;
              message.guild.musicData.nowPlaying = null;
              return message.guild.me.voice.channel.leave();
              
            }
          })
          .on('error', e => {
            message.say('<a:no:698990098905169951> Um problema foi detectado em meus códigos, contate o suporte imediatamente!');
            console.error(e);
            message.guild.musicData.queue.length = 0;
            message.guild.musicData.isPlaying = false;
            message.guild.musicData.nowPlaying = null;
            return message.guild.me.voice.channel.leave();
          });
      })
      .catch(e => {

        return message.guild.me.voice.channel.leave();
      });
  }

  formatDuration(durationObj) {
    const duration = `${durationObj.hours ? durationObj.hours + ':' : ''}${
      durationObj.minutes ? durationObj.minutes : '00'
    }:${
      durationObj.seconds < 10
        ? '0' + durationObj.seconds
        : durationObj.seconds
        ? durationObj.seconds
        : '00'
    }`;
    return duration;
  }

};
