const { execute, cooldownTrue, command } = require('../handlers/command')
const { Collection } = require('discord.js')

const collection = new Collection()
const cooldown = new Collection()
command(collection)

module.exports = (client, message) => {
    this.message = message
    let prefix = '$'


    if (!message.content.startsWith(prefix)) return
    let messageString = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = messageString.shift().toLowerCase();

    this.checker = collection.get(command) || collection.find(s => s.object.aliases.includes(command))


    if (this.message.author.bot || !this.checker || message.channel.type === 'dm') return
    this.cooldownCommand = cooldown.get(`${message.guild.id}_${message.author.id}`)

    if (cooldown.has(`${message.guild.id}_${message.author.id}`)) {
        if (this.cooldownCommand.toLowerCase() === this.checker.object.path.toLowerCase()) return cooldownTrue(message, collection, cooldown)

    }

    execute(client, message, collection, cooldown, messageString, command)
} 