const { Collection, Client, Discord, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES] });
const config = require('./config.json')

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`)
})

client.login(config.token)
