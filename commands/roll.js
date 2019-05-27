module.exports = {
    name: 'roll',
    execute(message, args) {
        if (args.length > 0 && !isNaN(args[0]) && args[0].length < 10) {
            var randomNumber = Math.floor(Math.random() * (parseInt(args[0]) + 1));
        } else {
            var randomNumber = Math.floor(Math.random() * 101);
        }
        message.channel.send(`${message.author.toString()} rolls ${randomNumber} point(s)`);
    }
}
