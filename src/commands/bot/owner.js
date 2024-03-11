const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Hossam Elfanaan`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `AW ➢ ELFANAAN`,
            inline: true,
        },
        {
            name: "🌐┆Discord",
            value: `[ARAB WARRIORS](https://discord.gg/Q2snkDW8fy)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
