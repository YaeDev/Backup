    const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
const ms = require('ms');
const config = require('../../config.json')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'giveaway-start',
      aliases: ['g-start'],
      memberName: 'gstart',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message, client) {
const { prefix } = require('../../config.json')
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: You need to have the manage messages permissions to start giveaways.');
    }

    // Giveaway channel
    let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send(':x: You have to mention a valid channel!');
    }

    // Giveaway duration
    let giveawayDuration = args[2];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: You have to specify a valid duration!');
    }

    // Number of winners
    let giveawayNumberWinners = args[3];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: You have to specify a valid number of winners!');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(4).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send(':x: You have to specify a valid prize!');
    }

    // Start the giveaway
    message.client.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: giveawayNumberWinners,
        // Who hosts this giveaway
        hostedBy: config.hostedBy ? message.author : null,
        // Messages
        messages: {
            giveaway: (config.everyoneMention ? "@everyone\n\n" : "")+"<a:sisters_tada:726205608449146900> **GIVEAWAY** <a:sisters_tada:726205608449146900>",
            giveawayEnded: (config.everyoneMention ? "@everyone\n\n" : "")+"<a:sisters_tada:726205608449146900> **GIVEAWAY ENDED** <a:sisters_tada:726205608449146900>",
            timeRemaining: "Giveaway Ends In: **{duration}**!",
            inviteToParticipate: "To join this giveaway, just react below in the emoji <a:sisters_tada:726205608449146900> ",
            winMessage: "Congratulation to all members who participated, {winners} won **{prize}**!",
            embedFooter: "Giveaways",
            noWinner: "The giveaway has been cancelled due to fault of participants...",
            hostedBy: "Created/Hosted by: {user}",
            winners: "Giveaway Winners",
            endedAt: "Giveaway ended",
            units: {
                seconds: "seconds",
                minutes: "minutes",
                hours: "hours",
                days: "days",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    }
                          )
}}