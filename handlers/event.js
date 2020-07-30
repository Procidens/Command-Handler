const { readdir } = require("fs")
const { basename } = require("path")

exports.events = (client, events) => {
    readdir('./client/events', (err, files) => {
        files.filter(fileFilter => {
            fileFilter.startsWith("ready")
            fileFilter.endsWith(".js")
        })
        if (err) throw new Error(`[EVENT ERROR] - ${err}`)
        files.forEach(file => {
            this.file = {
                name: basename(`./client/events/${file}`, ".js"),
                path: `./client/events/${file}`,
            }
            events.set(this.file.name, this.file.path)
            const requiredFile = require(`../events/${file}`)
            client.on(this.file.name, requiredFile.bind(null, client))
        })
    })
}