const { readdirSync } = require('fs')
const { basename } = require("path")
const ms = require('ms')


exports.command = (collection) => {
    this.collection = collection

    this.folders = readdirSync(`${__dirname}/../commands`, { withFileTypes: true }).filter(folder => folder.isDirectory()).map(folder => folder.name)

    this.folders.forEach(folder => {
        this.filesInFolder = readdirSync(`${__dirname}/../commands/${folder}`).filter(fileFilter => fileFilter.endsWith(".js"))

        for (this.files of this.filesInFolder) {
            this.fileDirectory = require(`../commands/${folder}/${this.files}`)
            this.fileDirectoryName = basename(`../commands/${folder}/${this.files}`, ".js")
            this.collection.set(this.fileDirectoryName.toLowerCase(), this.fileDirectory)

        }
    })
}


exports.execute = (client, message, collection, cooldownCollection, msgString, string) => {
    this.checker = collection.get(string) || collection.find(cmd => cmd.object.aliases.includes(string))
    if (!this.checker.object.cooldown || !this.checker.object.path || !this.checker.object.aliases || !this.checker.object.search) return console.error(`[COMMAND HANDLER ERROR] - ${message.content}: Missing Aliases/Path/Search Object/Cooldown`)

    cooldownCollection.set(`${message.guild.id}_${message.author.id}`, this.checker.object.path)
    this.checker.run(client, message, msgString, collection)

    setTimeout(() => {
        cooldownCollection.delete(`${message.guild.id}_${message.author.id}`)
    }, 5000)
}

exports.cooldownTrue = (message, commandCollection, cooldownCollection) => {
    this.commandName = cooldownCollection.get(`${message.guild.id}_${message.author.id}`)
    this.cooldownLength;
    this.commandNameFilter = commandCollection.filter(s => {
        this.cooldownLength = s.object.cooldown
        return s.object.path === this.commandName
    })

    this.msLength = ms(parseInt(this.cooldownLength), { long: true })
    return message.reply(`Take a hike!`).catch(e => { })
}