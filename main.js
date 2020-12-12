const { strict } = require('assert');
const Discord = require('discord.js');
const client = new Discord.Client();

//setup for additional js files
const fs = require('fs');
client.commands = new Discord.Collection();
//check for commands in the commands folder and make sure they're .js files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//go through each and and set them up
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//direct command prefix
const prefix = '!';

client.once('ready', () => {
    console.log('Goonbot has connected.');
});

//greeting message and add role
client.on('guildMemberAdd', member => {
    const welcomeChannel = client.channels.cache.get('701250184172142634');
    if (!welcomeChannel) return;

    welcomeChannel.send(`${member} just joined the server. Join us, the waters.... warm.`);
    member.roles.add('701252093402415188');
});

client.on('message', message => {
    //safety check to make sure msg isn't from a bot
    if (message.author.bot) return;

    //get the argument without the prefix (supports multiple args)
    const args = message.content.slice(prefix.length).split(/ +/);

    //convert to lowercase
    const command = args.shift().toLowerCase();

    //added a space here as a lazy way to make it stop including words like 'both'
    if (message.content.includes('bot')) {
        message.channel.send('*bot noises*');
    }

    //safety check after regular detection
    if (!message.content.startsWith(prefix)) return;

    if (command === 'ping') {
        //format for calling advanced commands (seperate files)
        client.commands.get('ping').execute(message, args);
    } else if (command === 'accept') {
        client.commands.get('accept').execute(message, args);
    } else if (command === 'hey') {
        client.commands.get('hey').execute(message, args);
    } else if (command === 'disconnect') {
        client.commands.get('disconnect').execute(message, args);
    }
});

//staff role id: 547209609778298901
//board member role id: 547209413405048852
//goonsquad role id: 555854429161783298
//member role id: 701252093402415188
//this stays at the bottom
client.login('NzA2MTcyMzMxNzQyOTg2Mjkw.Xq2YOw.CJdXuZvTSWG_ITsN3eD6xUwY15k');