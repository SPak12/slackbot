module.exports = {
    name: 'death',
    execute(message, msg) {
        message.channel.send(`RIP ${message.author.toString()}, who has now ded in piece`)
    }
}
