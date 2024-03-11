const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Support server")
                .setURL(client.config.discord.serverInvite)
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `❓・Support`,
        desc: `Make your server even better with Bot!`,
        image: "https://cdn.discordapp.com/attachments/1210932652895633478/1216595014969458719/standard_2.gif?ex=6600f566&is=65ee8066&hm=453c7bb79e05dca1d4cffee91875404be0d7fb26792fe131bd2d15d49f4b986f&",
        url: client.config.discord.serverInvite,
        components: [row],
        type: 'editreply'
    }, interaction)
}

 
