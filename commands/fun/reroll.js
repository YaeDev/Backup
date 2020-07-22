    const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
const ms = require('ms');
const config = require('../../config.json')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'giveaway-reroll',
      aliases: ['g-reroll'],
      memberName: 'greroll',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message, client) {
const { prefix } = require('../../config.json')
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
   if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Hana Giveaways")){
        return message.channel.send(':x: You need to have the manage messages permissions to reroll giveaways.');
    }

    // If no message ID or giveaway name is specified
    if(!args[1]){
        return message.channel.send(':x: You have to specify a valid message ID!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway =    // Search with giveaway prize
    message.client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    message.client.giveawaysManager.giveaways.find((g) => g.messageID === args[1]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('Unable to find a giveaway for `'+ args.slice(1).join(' ') +'`.');
    }

    // Reroll the giveaway
    message.client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        // Success message
        message.channel.send('Giveaway rerolled!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send('This giveaway is not ended!');
        } else {
            console.error(e);
            message.channel.send('An error occured...');
        }
    });

};
}
