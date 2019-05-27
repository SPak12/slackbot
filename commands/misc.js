module.exports = {
    name: 'misc',
    execute(message, args) {
        const msg = message.content.toLowerCase();
        if (msg.includes('potassium nitrate') || msg.includes('bomb') || msg.includes('ammonium perchlorate')) {
            message.channel.send('You have been added to the FBI watchlist.');
        } else if (msg.includes('motor')) {
            message.channel.send('whoosh');
        } else if (msg.includes('launch')) {
            message.channel.send('lunch');
        }
    }
}
