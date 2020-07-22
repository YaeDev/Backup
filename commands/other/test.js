
const db = require('quick.db')
const { Command } = require('discord.js-commando');
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'teste',
      aliases: ['test'],
      memberName: 'prossfile',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message) {
const Money = require('../../../models/money.js')
message.channel.send('Undefined com Null \:)')
}
}