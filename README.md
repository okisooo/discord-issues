# discord-issues

Discord Bot for GitHub issues!

## Setup

1. Clone this repository.
2. Install the dependencies by running `npm install`.
3. Create a `config.json` file in the root directory with the following structure:

```json
{
  "discordToken": "your-discord-bot-token",
  "githubToken": "your-github-token",
  "channelID": "discord-channel-id",
  "repositories": [
    {
      "owner": "github-username",
      "repo": "repository-name"
    }
  ]
}
```

Replace `"your-discord-bot-token"`, `"your-github-token"`, `"discord-channel-id"`, `"github-username"`, and `"repository-name"` with your actual Discord bot token, GitHub token, the ID of the Discord channel where you want to send the embeds, your GitHub username, and the name of the repository you want to track, respectively. You can add as many repositories as needed!

4. Start the bot by running `node bot.js`.

## Hosting

This bot can be hosted locally or on the cloud. If you want to host it on the cloud, you can use a service like Heroku.

## License

This project is licensed under the terms of the [MIT License](LICENSE).