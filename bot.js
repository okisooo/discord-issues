const Discord = require('discord.js');
const config = require('./config.json');
const axios = require('axios');
const bot = new Discord.Client();

let lastChecked;

bot.on('ready', () => {
  console.log(`Bot is ready as: ${bot.user.tag}`);
  lastChecked = new Date();
  setInterval(checkIssues, 1000 * 60 * 30); // check every 30 minutes.
});

async function checkIssues() {
  for (const repository of config.repositories) {
    const response = await axios.get(`https://api.github.com/repos/${repository.owner}/${repository.repo}/issues?since=${lastChecked.toISOString()}`, {
      headers: {
        'Authorization': `token ${config.githubToken}`
      }
    });
    const issues = response.data;

    for (const issue of issues) {
      const embed = {
        type: "rich",
        title: issue.title,
        description: issue.body,
        color: 0xffffff,
        url: issue.html_url,
        footer: {
          text: `Issue updated by ${issue.user.login}`
        },
        timestamp: issue.updated_at
      };

      const channel = bot.channels.cache.get(config.channelID);
      channel.send({ embeds: [embed] });
    }
  }

  lastChecked = new Date();
}

bot.login(config.discordToken);