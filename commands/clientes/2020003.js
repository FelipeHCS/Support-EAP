const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete()

    let embed = new Discord.MessageEmbed()

        .setColor('#4238ff')
        .setThumbnail('https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/08/13162940/bot_para_que_serve.jpg')
        .setTitle('**@Magorinai**')
        .addField('Status bot',`Offline **Consulte o <@&727020279947067392>**`)
        .addField('Próxima Pausa',' -----')
        .addField('Hospedagem:','Inativo! (Contate o Suporte)')
        .addField('Fim do suporte','02/10/2020')
        .addField('Estado', 'Pago')
        .addField('Versão','1.0')
        .addField('Modelo:','Premium')
        .addField('**Atenção**','Vimos que seu bot está inativo, contate o nosso suporte!')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed).then(m => m.delete({ timeout: "30000"}));
}
module.exports = {
    name: '2020003',
    execute,
}