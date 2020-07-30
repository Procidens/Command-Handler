const { MessageEmbed } = require("discord.js")

module.exports = {
    object: {
        path: "./client/commands/User/avatar.js",
        aliases: ["av"],
        cooldown: 5000,
        search: {
            title: "Avatar",
            desc: "This command gets any mentioned user's avatar.",
            field: "``av``"
        }
    },
    run: async (client, message, args) => {
        this.user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author

        this.embed = new MessageEmbed()
            .setAuthor(this.user.tag, this.user.displayAvatarURL())
            .setColor("RED")
            .setImage(this.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setFooter(`Requested by ${this.user.tag}`, message.author.displayAvatarURL())
        message.channel.send(this.embed).catch(e => { })
    }
}