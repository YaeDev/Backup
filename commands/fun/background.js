const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
var emblemaserver = '❎'
var marry = "Alone :("
var emblemapartner = '<:hana_partner:721021327061942272>'
var emblemadev = '<:hana_staff:721018953266364547>'
var apelido = 'Not Set'
const emblemaowner = '<:hana_developer:721019012091346945>';
const Discord = require('discord.js')
const client = new Discord.Client()
const bughunter = '<:bughunter:721019880760934400>'
const verified = '<:hana_verifieduser:721019468515377246>'
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'background',
      aliases: ['back'],
      memberName: 'background',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message) {
}
}