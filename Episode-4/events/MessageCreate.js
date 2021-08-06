const client = require('../index')

client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild) return

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");

    let command = client.commands.get(cmd)
    //make the const command to let command

    if (!command) command = client.commands.get(client.aliases.get(cmd))
    if (command) {
        await command.run(client, message, args) // Now lets make a command
    } // This should be it lets test it out :D
}) // ahh.. wait before this we need to add aliases to the command
