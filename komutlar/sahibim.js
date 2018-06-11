const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('Sahibim Ibrahim Hakkı Debgici ve Necdet Efe Çelikdir!');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sahibim',
  description: 'Botu geliştiren kişiyi gösterir',
  usage: 'sahibim'
};
