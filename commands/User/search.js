const { MessageEmbed } = require("discord.js")

module.exports = {
    object: {
        aliases: ["sch", "cmdinfo"],
        path: "./client/commands/User/search.js",
        cooldown: "5000",
        search: {}
    },
    run: async (client, message, args, collection) => {

        console.log(args)
        this.collection = collection.get(args[0].toLowerCase()) || collection.find(cmd => cmd.object.aliases.includes(args[0].toLowerCase()))
        if (!this.collection) return message.channel.send("I couldn't find a command with that tag!")
        this.embed = new MessageEmbed()
            .setColor("RED")
            .setAuthor("Command Search")
            .setTitle(this.collection.object.search.title)
            .setDescription(this.collection.object.search.desc)
            .addField("Aliases", this.collection.object.search.field, true)
        message.channel.send(this.embed)
    }
}