const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete()

    let embed = new Discord.MessageEmbed()

        .setColor('#4238ff')
        .setTitle('Nossos planos:')
        .addField('Bot EAP Basic','Ban, Kick, Clear e Ticket => R$ 60.00 \n Link de pagamento: https://mpago.la/2kQGfgH')
        .addField('Bot EAP Medium','Ban, Kick, Clear, Ticket, Anúncio e Sortear => R$95.00 \n Link de pagamento: https://mpago.la/28sQ4fQ ')
        .addField('Bot EAP Advanced','Ban, Kick, Clear, Ticket, Anúncio, Sortear, Votação e Música(V1.0) => R$ 120.00 \n Link de pagamento: https://mpago.la/2HQaVNw')
        .addField('Bot EAP Magic','Ban, Kick, Clear, Ticket, Anúncio, Sortear, Votação, Música(V1.0), Anti-flood, Anti-invite => R$ 160.00 \n Link de pagamento: https://mpago.la/2Z8m7Bo')
        .addField('Bot EAP Music v1.0','Comandos de músicas => R$ 100.00 \n Link de pagamento: https://mpago.la/1qq7u5V')
        .addField('Bot EAP Music v2.0','Comandos de músicas => R$ 150.00 \n Link de pagamento: https://mpago.la/2apUkjR')
        .addField('Criação de Servidores (Games)','R$ 85.00 \n link de pagamento: https://mpago.la/1YyXmRq')
        .addField('Criação de Servidores (Conversa)','R$ 80.00 \n Link de pagamento: https://mpago.la/2b3z6KU')
        .addField('Meios de pagamentos:','Mercado Pago e Paypal (hilariofelipe616@gmail.com), Banco do Brasil e Banco Inter (Entre em contato com o **@Felipe Hilário**)')

        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed).then(m => m.delete({ timeout: "30000"}));
}
module.exports = {
    name: 'planos',
    execute,
}