const Discord = require("discord.js");
const dotenv = require("dotenv"); //Arquivos de pastas.
const fs = require("fs"); //Serve para ler os conteúdos.
const path = require("path"); //Puxar pastas.

dotenv.config();

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.queues = new Map();

const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".js"));

const folders = fs.readdirSync(path.join(__dirname, "/commands"))
for (var folder of folders) {
    const files = fs.readdirSync(path.join(__dirname, "/commands", folder)).filter((filename) => /^.*\.(t|j)s$/.test(filename))
    for (var filename of files) {
        const command = require(`./commands/${folder}/${filename}`);
        bot.commands.set(command.name, command);
    }
}

for (const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}
console.log(bot.commands);

bot.on('ready', () => { //Iniciando o comando de Status do Bot.
    let activities = [ //Iniciando as atividades do Bot.
        `Digite .help `,
        `V2.0 By: Felipe#5995`
    ]
    i = 0;
    setInterval(() => bot.user.setActivity(`${activities[i++ %
        activities.length]}`, {
        type: "PLAYING"
    }), 1000 * 60); //Marcação do tempo para troca de Status

    console.log(`--------------------//inicializando//-----------------\n 
    ${bot.user.username} foi conectado com sucesso e já estamos em ${bot.guilds.cache.size} servidores ( ͡° ͜ʖ ͡°) \n 
    -----------------//iniciado com sucesso//-----------------`)
});

bot.on("guildMemberAdd", async (member) => {

    let role = member.guild.roles.cache.get("727383274523197480") //id do cargo automático
    member.roles.add(role);

    let channel = bot.channels.cache.get("727001878310944838"); // Id do canal.
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === '');

    let embed = new Discord.MessageEmbed()
        .setColor('#50ff00')
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`Boas Vindas!`)
        .setImage('https://media.giphy.com/media/YMprQGX1ymatwG2wat/giphy.gif')
        .setDescription(`${member.user} Boas Vindas ao servidor ${member.guild.name}, agora estamos com ${member.guild.memberCount} no servidor.`)
        .addField('Regras', 'Siga as regras para evitar advertências e banimentos: <#727004679921467487> ')
        .addField('Dúvida?', 'Em caso de dúvidas mencione algum admin: <@&727000699501543424>')
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL());
    await channel.send(embed)

    await member.guild.channels.cache.get("738851038760665158").setName(`🗣 | ${member.guild.memberCount}`)
})
bot.on("guildMemberRemove", async (member) => {

    let channel = bot.channels.cache.get("730839460903649351"); // Id do canal.
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === '');

    let embed = new Discord.MessageEmbed()
        .setColor('#50ff00')
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`Saiu do servidor!`)
        .setImage('https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif')
        .setDescription(`O usuário ${member.user} saiu do servidor, agora estamos com ${member.guild.memberCount} no servidor.`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL());
    await channel.send(embed)
})

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if (message.member.hasPermission("ADMINISTRATOR")) {
    } else if (message.content.includes('https://discord.gg/') || message.content.includes('discord.gg/')) {
        message.delete();
        return message.reply('É proibido enviar convites de outros servidores aqui')
    };
})


bot.on('message', (message) => {
    if (!message.content.toLowerCase().startsWith(process.env.BOT_PREFIX) || message.author.bot || message.channel.type == "dm") return;

    const args = message.content.toLowerCase().slice(process.env.BOT_PREFIX.length).split(" ");
    const command = args.shift();
    try {
        bot.commands.get(command).execute(bot, message, args);
    } catch (e) {
        return message.reply("não reconheço este comando :/");
    }
})

bot.login(process.env.BOT_TOKEN);