//Token Bot Discord
let token = 'MTA4NzczMTg2NDQ3MjY1Mzg0NA.GHPduE.5W_KrhFI-dSn23Du1XZyGk6AkiQYXJCn4PLuds'

//Id Channel Discord
let channelid = '1087259966798307328'

//Id Bot Discord
let botid = '1087731864472653844'

//Ip Server Minecraft
var ipsv = '103.90.227.207:25565'

//Password Bot Minecraft
let pswd = 'v82718'

//Version Bot Minecraft
let mcvrsn = '758'


//Veri Simple Code Lmfao
const mineflayer = require('mineflayer')
const { Client, Events, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js')
const chalk = require('chalk')
const crypto = require('crypto')
const minecraftData = require('minecraft-data')
const mcData = minecraftData('1.19.2')
require('minecraft-protocol')
const Vec3 = require('vec3').Vec3
let rdint = Math.floor(Math.random() * 10) + 3
var rdign = crypto.randomBytes(rdint).toString('base64url').replace(/[^\w ]/g, '')
var rdign2 = crypto.randomBytes(rdint).toString('base64url').replace(/[^\w ]/g, '')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] })
client.commands = new Collection()

var ctrbot1 = {
    host: ipsv,
    username: rdign,
    version: mcvrsn
}

const bot = mineflayer.createBot(ctrbot1)
bot.commands = new Map();
RadiumBot(bot)

function RadiumBot(bot) {

    bot.on('spawn', (username, message) => {
        const Joined = new EmbedBuilder()
            .setDescription('Bot is enable using name:\n' + bot.username)
            .setTitle('Bot Joined✅')
            .setColor('Green')
            .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
            .setTimestamp()
        client.channels.cache.get(channelid).send({ embeds: [Joined]})
        console.log(chalk.white.bgGreenBright('Bot Joined') + '\n' + bot.username)
        bot.chat('login ' + pswd)
    })

    client.once(Events.ClientReady, c => {
        console.log(`Ready! Logged in as ${c.user.tag}`);
    })

    bot.on('end', (reason) => {
        const Disconnected = new EmbedBuilder()
            .setTitle('Disconnected💀')
            .setDescription('Bot disconnected by ' + reason)
            .setColor('DarkRed')
            .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
            .setTimestamp()
        client.channels.cache.get(channelid).send({ embeds: [Disconnected]})
        console.log('Bot disconnected by ' + reason.toString())
        if (reason === reason || reason === null) {
            setTimeout(Reload, 100)
            const Reconnect = new EmbedBuilder()
                .setTitle('Bot trying to reconnect☕')
                .setColor('DarkOrange')
                .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
                .setTimestamp()
            client.channels.cache.get(channelid).send({ embeds: [Reconnect] })
            // console.log(chalk.white.bgGreenBright('Reconnect Succes') + '\n' + bot.username)
        }
        // đây không phải bugs, chắc chắn không phải bugs!
        // else {
        //     console.log(chalk.blackBright.bgRed('Bot trying to Reconnect'))
        //     const bot = mineflayer.createBot({
        //         host: ipsv,
        //         username: rdign,
        //         version: '1.19.2'
        //     },
        //     console.log(chalk.bgGreen('Reconnect Success')))
        // }
    })

    bot.on('chat', async (username, msg) => {
        console.log(`${username}: ${msg}`)
        const Livechat = new EmbedBuilder()
            .setDescription(`${username}: ${msg}`)
            .setColor('Blurple')
            .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
            .setTimestamp()
        await client.channels.cache.get(channelid).send({ embeds: [Livechat] })
        // await client.channels.cache.get(channelid).send(`${username}: ${msg}`)
    })

    client.on('messageCreate', async (client) => {
        if (!client.guild) return
        if (client.author.bot || client.author.id === botid) return
        if (client.channel.id !== channelid) return
        await client.react('🤑')
        await bot.chat(`[${client.author.tag}] ${client.content} | Code by Hosuly |`)
        console.log(`[${client.author.tag}] ${client.content} | Code by Hosuly |`)
    })

    bot.on('error', console.log)

    function Reload() {
        if (rdint === rdint) rdint = Math.floor(Math.random() * 10) + 3
        if (ctrbot1.username == rdign) var rdign3 = crypto.randomBytes(rdint).toString('base64url').replace(/[^\w ]/g, '')

        var ctrbot3 = {
            host: ipsv,
            username: rdign3,
            version: mcvrsn
        }         
           
        bot = mineflayer.createBot(ctrbot3)
        RadiumBot(bot)
        const Reconnected = new EmbedBuilder()
            .setTitle('Reconnected Success✅')
            .setDescription(bot.username)
            .setColor('Green')
            .setAuthor({ name: 'Code by Hosuly', iconURL: 'https://avatars.githubusercontent.com/u/74451306?v=4', url: 'https://github.com/Hosuly' })
            .setTimestamp()
        client.channels.cache.get(channelid).send({ embeds: [Reconnected] })
        console.log(chalk.white.bgGreenBright('Reconnect Succes') + '\n' + bot.username)
    }
}

client.login(token)

// ❤️ I love Lucid ❤️ //