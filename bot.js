const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
هلا وغلا قدمت اهلاً ووطأت سهلاً نرحب بك بباقة
زهور يسعدني أن أرحب بك أجمل ترحيب وأشكرك على إنضمامك معنا
بين أخواتك وإخوانك متمنياً لك طيب الأقامة مع المتعة
والفائدة وننتظر منك الجديد والمفيد.
                               [ https://discord.gg/VeqgsM7 ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
