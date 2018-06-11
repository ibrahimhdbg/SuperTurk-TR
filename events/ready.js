const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`BOT: Aktif, Komutlar yüklendi!`);
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setActivity("st!yardım | st!davet", { type: 'STREAMING' })
  client.user.setActivity("st!yardım | st!davet", function() {
    if (setActivity.content === "$loop") {
      var interval = setInterval (function () {
      }, 1 * 1000);
    }
});
  console.log(`BOT: Oyun ismi ayarlandı!`);
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
