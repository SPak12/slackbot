const fs = require('fs');
const Discord = require('discord.js');
const prefix = "!";
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//u loser
client.once('ready', () => {
	console.log('slackbot is online!');
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (message.author.bot) return;
	if (message.content.startsWith(prefix)) {
		const args = message.content.slice(prefix.length).split(/ +/);
		var command = args.shift();
		if (command == 'roII') {
			client.commands.get('thething').execute(message, args);
		} else {
			command = command.toLowerCase();
			if (client.commands.has(command)) {
				try {
					client.commands.get(command).execute(message, args);
				} catch (error) {
					console.error(error);
				}
			}
		}
	} else {
		const msg = message.content.toLowerCase().split(/ +/);
		try {
			client.commands.get('misc').execute(message, msg);
		} catch (error) {
			console.error(error);
		}
	}
});

client.login(process.env.BOT_TOKEN);
