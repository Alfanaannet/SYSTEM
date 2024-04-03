const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📻・Radio information`,
        desc: `All info about the radio in this guild`,
        fields: [{
            name: "👤┆Channel Listeners",
            value: `${interaction.member.voice.channel.members.size} listeners`,
            inline: true
        },
        {
            name: "📺┆Connected channel",
            value: `${interaction.member.voice.channel} (${interaction.member.voice.channel.name})`,
            inline: true
        },
        {
            name: "🎶┆Radio Station",
            value: `[ُEg Radio],
            inline: true
        },
        ],
       type: 'editreply'
    }, interaction)
}

 
