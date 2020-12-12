//all this is required for new commands
module.exports = {
    name: 'hey',
    description: 'Basic hello command.',
    execute(message, args) {
        const messageAuthor = message.author.username;
        //responses array
        const responses = ["What it be, what it do, it's ya boy, Goonbot.", "Howdy!", "Leave me alone please!", "I'm trying to sleep!", "Calm down there grandma.",
            `${messageAuthor} is a loser.`, "Go ride a rollercoaster.", "Talk to me when you're not talking in 240p.", "Go bother @eTp."];

        //random int from length of array
        const rand = Math.floor(Math.random() * (responses.length));
        message.channel.send(responses[rand]);
    }
}