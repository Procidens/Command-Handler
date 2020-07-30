const { MessageEmbed } = require("discord.js")

module.exports = {
    object: {
        path: "./client/commands/User/botinfo.js",
        aliases: [],
        cooldown: 1000,
        search: {
            title: "Bot Info",
            desc: "Get information regarding the bot",
            field: "No Aliases!"
        },
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle(`${client.user.username} Information`)
            .addFields({
                name: "Prefixes",
                value: "```@HowTo#4394, ;```"
            }, {
                name: "Servers",
                value: `\`\`\`${client.guilds.cache.size} servers\`\`\``,
                inline: true
            }, {
                name: "Members",
                value: `\`\`\`${client.users.cache.filter(s => !s.bot).size} members\`\`\``,
                inline: true
            })

        message.channel.send(embed).catch(e => { })

    }
}