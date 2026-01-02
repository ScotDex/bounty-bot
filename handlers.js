const { getStaticInfo } = require('./intelService'); // The JSON loader we discussed

async function routeInteractions(interaction) {
    const { commandName } = interaction;

    if (commandName === 'static') {
        const code = interaction.options.getString('code');
        const response = getStaticInfo(code); // Looks up "U319" in your data
        await interaction.reply(response);
    }
}

module.exports = { routeInteractions };