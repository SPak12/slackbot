module.exports = {
    name: 'thething',
    execute(message, msg) {
        message.channel.send(`${message.author.toString()} rolls 100 point(s)`)
    }
}
