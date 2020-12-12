//all this is required for new commands
module.exports = {
    name: 'ping',
    description: 'Basic ping command.',
    execute(message, args) {
        //TODO: expand to embed later
        let ping = Date.now() - message.createdTimestamp + " ms ";
        message.channel.send('Pong! Took me ' + ping + 'to get back here.');
    }
}