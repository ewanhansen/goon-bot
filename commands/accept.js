//all this is required for new commands
module.exports = {
    name: 'accept',
    description: 'Accept members and give them the Goonsquad role.',
    execute(message, args) {
        //check if person using command has the board member or staff role
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have that permission! :x:').then(message.react(':x:'))

        //get user to add, only supports one at a time
        let targetedMember = message.mentions.members.first();

        //check if there is one
        if (!targetedMember) return message.channel.send("You have to mention the person you want to assign the role to!").then((declineMsg) => {
            message.react('❌')
            declineMsg.delete({ timeout: 5000 });
        });

        //check if the user already has the role, if not add it
        if (targetedMember.roles.cache.has('555854429161783298')) {
            message.channel.send(`${targetedMember.user.username} already has that role.`)
            return;
        } else {
            targetedMember.roles.add('555854429161783298');
        }
    }
}
