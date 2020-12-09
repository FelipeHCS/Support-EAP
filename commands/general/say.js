const Discord = require("discord.js")
const execute = async (bot, message, args) => {
    message.delete();

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não tem permissão para utilizar este comando").then(m => m.delete(5000));

    let per1 = "Em qual canal será enviada a resposta? (Mencione com #)";
    let per2 = "Qual o conteúdo da mensagem";
    let per3 = "Qual o título da mensagem?";

    let canal;
    message.channel.send(per1);
    let p1 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
        max: 1,
        time: 60000
    })

    p1.on("collect", async (msg) => {
        canal = msg.mentions.channels.first()
        message.channel.send(per2);
        let p2 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
            max: 1,
            time: 60000
        });

        p2.on("collect", async () => {
            message.channel.send(per3);
            let p3 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
                max: 1,
                time: 60000
            });
            p3.on("collect", async () => {
                let resp = p2.collected.first().content
                let piru = await message.guild.channels.cache.get(canal.id).send(embed)
            })
        })
    })
}
module.exports = {
    name: "say",
    execute,
}