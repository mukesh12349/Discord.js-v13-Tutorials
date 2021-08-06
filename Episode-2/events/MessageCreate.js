const client = require('../index')

client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild) return

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd)

    if (!command) return;

    await command.run(client, message, args) // Now lets make a command
})
