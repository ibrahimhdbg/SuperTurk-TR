const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('Slo2Faz = twitch.tv/treasfuntr');
  message.reply('SloInFaz = twitch.tv/sloinfaz');
  message.reply('Oykuminu = twitch.tv/oykuminu');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'twitch',
  description: 'Botun Sponsor Twitch Kanallarını Gösterir',
  usage: 'twitch'
};
