const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1216595356494856372",
    token: "doZMD_NatoLlSNB2EB8hDPX-4On9AMo6wJodeMvJzZuKb6TLKtA4TCS7tPvbi84uB8yX",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 
