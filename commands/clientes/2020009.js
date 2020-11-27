const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete()

    let embed = new Discord.MessageEmbed()

        .setColor('#4238ff')
        .setTitle('**@Samson**')
        .setThumbnail('https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/08/13162940/bot_para_que_serve.jpg')
        .addField('Status bot','Offline')
        .addField('Próxima Pausa',' -----')
        .addField('Hospedagem:','HR')
        .addField('Fim do suporte','07/12/2020')
        .addField('Estado', 'Pago')
        .addField('Versão','2.0')
        .addField('Modelo:','Personalizado')
        .addField('Comentários:','Seu bot está na hospedagem gratuita que funciona com créditos que são renovados todo inicio de mês, ficando offline entre 7 dias. Caso queira passar para hospedagem paga, chame a equipe do suporte')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed).then(m => m.delete({ timeout: "30000"}));
}
module.exports = {
    name: '2020009',
    execute,
}