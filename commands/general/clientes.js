const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete();

    let embed0 = new Discord.MessageEmbed()

        .setColor('#4238ff')
        .setTitle('Nossos clientes:')
        .setThumbnail('https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/08/13162940/bot_para_que_serve.jpg')
        .addField('2020001','@Israel Hilário')
        .addField('2020002','@Tavares')
        .addField('2020003','@Magorinai')
        .addField('2020004','@Siegfried')
        .addField('2020005','@PPL')
        .addField('2020006','@FutBot')
        .addField('2020007','@Equipe AP10')
        .addField('2020008','@DJ Marra')
        .addField('2020009','@Samson')
        .addField('2020010','@Alysson Henrique')
        .addField('2020011','@Boltz')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed0)
}
module.exports = {
    name: 'clientes',
    execute,
}