//all this is required for new commands
module.exports = {
    name: 'disconnect',
    description: 'Basic disconnect command.',
    execute(message, args) {
        const targetedMember = message.mentions.members.first();

        if (!targetedMember || !targetedMember.voice.channel) return;

        message.channel.send(`Get hecked ${targetedMember.nickname}!`)
        targetedMember.voice.kick();
    }
}