module.exports = {
    object: {
        path: __filename,
        aliases: [],
        cooldown: "0",
        search: {
            title: "Test",
            desc: "Used for Test Commands",
            field: "None"
        }
    },
    run: async (client, message, args) => {
        message.channel.send("Su")
    }
}