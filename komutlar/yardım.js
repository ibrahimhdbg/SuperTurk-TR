const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `st!banned = Dene ve Gör! \nst!avatarım = Avatarınınızı Gösterir. \nst!herkesebendençay = Herkese Çay Alırsınız. \nst!koş = Koşarsınız.\nst!çayiç = Çay İçersiniz. \nst!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nst!çayaşekerat = Çaya Şeker Atarsınız. \nst!yumruhst!at = Yumruk Atarsınız. \nst!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nst!sunucuresmi = BOT Sunucunun Resmini Atar. \nst!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nst!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Sunucu Yetkilisi Komutları**", `st!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nst!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nst!unban = İstediğiniz Kişinin Yasağını Açar. \nst!sustur = İstediğiniz Kişiyi Susturur. st!MUTEDst! \nst!oylama = Oylama Açar. \nst!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "st!yardım = BOT Komutlarını Atar. \nst!twitch = Botu Sponsor Twitch Kanallarını Gösterir. \nst!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nst!sahibim = Botu Geliştiren Kişiyi Gösterir \nst!ping = BOT Gecikme Süresini Söyler. \nst!davet = BOT Davet Linkini Atar. \nst!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı Komutları:**", " **Güvenlik Amacı İle Yapımcı Komutları Gösterilmiyor** ")
  .setFooter('**Beni Kullandığın İçin Teşekkürler**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
