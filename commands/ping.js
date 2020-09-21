//all this is required for new commands
module.exports = {
    name: 'ping',
    description: 'Basic ping command.',
    execute(message, args) {
        //command code would go here
        message.channel.send('Pong, bitch.');
    }
}