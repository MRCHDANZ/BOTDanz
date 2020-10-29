const {
    Client,
    MessageEmbed,
    Collection,
    GuildMember
} = require('discord.js');
const bot = new Client;

const token = 'NzcxMTYyNTMwNDAzMzE5ODc5.X5oHEg.gugOSEmcuzeRewnfnnIj6sPx80U';
var PREFIX = '%';
var version = '1.0.1';
const fs = require('fs');

const Commands = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of files) {
    const command = require(`./commands/${file}`);
    Commands.set(command.name, command)
   
}
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '📢welcome');
    const rule = member.guild.channels.cache.find(ch => ch.name === '✅verif-role');

    if(!channel) return;

    if(member.guild.name === '☕𝗗 𝗔 𝗡 𝗭') {
        channel.send(`𝑯𝒂𝒍𝒍𝒐 ${member}, 𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙙𝙤𝙣'𝙩 𝙘𝙤𝙢𝙚 𝙛𝙤𝙧𝙜𝙚𝙩 ${rule}!`);
    }
});


  bot.on('ready' , () => {
    console.log('Danz Online!');

    bot.user.setActivity('MRCHDANZ Channel', {
        type: "WATCHING"
    }).catch(console.error);
    
});

bot.on('message' , message => {
    let args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0]) {

    case 'ping':
        Commands.get('ping').execute(message, args);
        break;
    }
})

bot.login(token);


