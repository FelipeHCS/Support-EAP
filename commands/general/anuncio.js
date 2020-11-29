const Discord = require("discord.js");
const execute = async (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:flag_br: | Você não possui permissão. \n :flag_us: | You do not have permission.`)
    
    message.channel.send(`:flag_br: | Digite # e mencione o canal para o envio! \n :flag_us: |Type # and mention the channel for sending!`).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first ()
                if (!canal){
                    message.reply(`:flag_br: | Mencione um canal! \n :flag_us: | Mention a channel!`)
                }else{
                    message.channel.send(`:flag_br: | Qual o título? \n :flag_us: | What's the title? `).then(msg2 => {
                        let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                        .on('collect', c=> {
                             title = c.content

                            message.channel.send(`:flag_br: | Qual a mensagem desse anúncio? \n :flag_us: | What is the message of this ad? `).then(msg3 => {
                                let ck = message.channel.createMessageCollector(x=> x.author.id == message.author.id, {max: 1})
                                .on('collect', c => {
                                     desc = c.content

                                    message.channel.send(`:flag_br: | Anúncio enviado ao canal ${canal} com Sucesso. \n :flag_us: | Ad successfully sent to ${canal} `)

                                    let embed = new Discord.MessageEmbed()

                                    .setColor('#594fa9')
                                    .setFooter(message.author.tag, message.author.avatarURL())
                                    .setTitle(title)
                                    .setDescription(desc)

                                    canal.send(`@everyone`,embed)
                                })
                            })
                        })
                    })
                }
            })
        })
    }
module.exports = {
    name: "anuncio",
    execute,
}