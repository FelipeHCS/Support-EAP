const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete()

    let embed = new Discord.MessageEmbed()

        .setColor('#4238ff')
        .setTitle(':flag_br: | Meus comandos \n :flag_us: | My Commands')
        .addField(':flag_br: |.<Seu código> \n :flag_us: | .<Your Code>',':flag_br: | Verifica as informações do seu bot \n :flag_us: | Checks your bot information')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed).then(m => m.delete({ timeout: "30000"}));
}
module.exports = {
    name: 'help',
    execute,
}