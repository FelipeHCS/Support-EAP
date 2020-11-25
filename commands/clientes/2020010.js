const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete()

    let embed = new Discord.MessageEmbed()

        .setColor('#4238ff')
        .setTitle('**@Alysson Henrique**')
        .setThumbnail('https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/08/13162940/bot_para_que_serve.jpg')
        .addField('Status bot','Online')
        .addField('Próxima Pausa',' -----')
        .addField('Hospedagem:','VPS')
        .addField('Fim do suporte','23/12/2020')
        .addField('Estado', 'Pago')
        .addField('Versão','2.0')
        .addField('Modelo:','Personalizado')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed).then(m => m.delete({ timeout: "30000"}));
}
module.exports = {
    name: '2020010',
    execute,
}