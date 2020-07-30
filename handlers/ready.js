let { Client, Collection } = require('discord.js')
const { command } = require('./command')

let readyEvent = () => {
    this.client = new Client()
    this.client.on("warn", console.warn)
    this.client.on("error", console.error)

    this.client.on("ready", () => {
        console.log(`[WS] - ${this.client.ws.ping}`)
    })

    this.CommandCollection = new Collection()
    this.events = new Collection()

    this.object = {
        key: require("../config/ready.json"),
        command: require('./command.js'),
        events: require("./event.js")
    }

    this.client.login(this.object.key.token)
    this.object.events.events(this.client, this.events)
    command(this.CommandCollection)
}

readyEvent()