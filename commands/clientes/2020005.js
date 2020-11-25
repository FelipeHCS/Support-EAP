const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete()

    let embed = new Discord.MessageEmbed()

        .setColor('#4238ff')
        .setTitle('**@PPL**')
        .setThumbnail('https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2018/08/13162940/bot_para_que_serve.jpg')
        .addField('Status bot','Online')
        .addField('Próxima Pausa',' -----')
        .addField('Hospedagem:','Gratuíta')
        .addField('Fim do suporte','01/07/2020')
        .addField('Estado', 'Pago')
        .addField('Versão','2.0')
        .addField('Modelo:','Personalizado')
        .addField('**Atenção**','Vimos que seu bot está em uma hospedagem grátis e ele pode ficar offline por 7 à 10 dias, para alterar, vá até <#735869600301842472> e solicite a troca da hospedagem.')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed).then(m => m.delete({ timeout: "30000"}));
}
module.exports = {
    name: '2020005',
    execute,
}