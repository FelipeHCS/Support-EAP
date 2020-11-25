const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete()

    let embed = new Discord.MessageEmbed()

        .setColor('#4238ff')
        .setTitle('Nossos planos:')
        .addField('Bot EAP Basic','Ban, Kick, Clear e Ticket => R$ 60.00')
        .addField('Bot EAP Medium','Ban, Kick, Clear, Ticket, Anúncio e Sortear => R$95.00 ')
        .addField('Bot EAP Advanced','Ban, Kick, Clear, Ticket, Anúncio, Sortear, Votação e Música(V1.0) => R$ 120.00')
        .addField('Bot EAP Magic','Ban, Kick, Clear, Ticket, Anúncio, Sortear, Votação, Música(V1.0), Anti-flood, Anti-invite => R$ 160.00')
        .addField('Bot EAP Music v1.0','Comandos de músicas => R$ 100.00')
        .addField('Bot EAP Music v2.0','Comandos de músicas => R$ 150.00')
        .addField('Criação de Servidores (Games)','R$ 85.00')
        .addField('Criação de Servidores (Conversa)','R$ 80.00')
        .addField('Meios de pagamentos:','Mercado Pago e Paypal (hilariofelipe616@gmail.com), Banco do Brasil e Banco Inter (Entre em contato com o **@Felipe Hilário**)')

        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed).then(m => m.delete({ timeout: "30000"}));
}
module.exports = {
    name: 'help',
    execute,
}