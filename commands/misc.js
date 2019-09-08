module.exports = {
    name: 'misc',
    execute(message, args) {
        const msg = message.content.toLowerCase().replace(/\s/g, '');
        if (msg.includes('potassiumnitrate') || msg.includes('bomb') || msg.includes('ammoniumperchlorate') || msg.includes('apcp')) {
            message.channel.send('You have been added to the FBI watchlist.');
        } else if (msg.includes('motor')) {
            message.channel.send('whoosh');
        } else if (msg.includes('launch')) {
            message.channel.send('lunch');
        }
    }
}
