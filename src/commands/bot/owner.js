const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `ALFANAAN`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `!itsELFANAAN`,
            inline: true,
        },
        {
            name: "🌐┆Discord",
            value: `[https://discord.gg/its-community-917580196251594815](https://discord.gg/its-community-917580196251594815)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
