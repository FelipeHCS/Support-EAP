const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete()

    let embed = new Discord.MessageEmbed()

        .setColor('#4238ff')
        .setTitle('**@**')
        .setThumbnail('https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/08/13162940/bot_para_que_serve.jpg')
        .addField('Status bot','')
        .addField('Próxima Pausa',' -----')
        .addField('Hospedagem:','')
        .addField('Fim do suporte','')
        .addField('Estado', '')
        .addField('Versão','')
        .addField('Modelo:','')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed).then(m => m.delete({ timeout: "30000"}));
}
module.exports = {
    name: '2020017',
    execute,
}