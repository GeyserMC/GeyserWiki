---
title: Geyser Global API
---

### Geyser Global API

The Global API is a web API, where you can get various info about Geyser (or specifically, Floodgate players) that joined any Geyser + Floodgate server before. This includes:
- Conversion methods from a Bedrock gamertag to Bedrock xuid, and vice-versa. Only provides info for players who are in Geyser's cache. <br>
  If you need them for all players, you can use a third-party API, https://mcprofile.io/endpoints, which also provides info from the Geyser Global API.
- Skin info: Whenever a Bedrock player joins via Floodgate, their skin gets converted & uploaded to mineskin. If you want to grab that converted skin, use the xuid of the Bedrock player in this endpoint to get a texture id, or a base64 encoded "value", which you could use directly in e.g. player heads.

See the [Global API docs](https://api.geysermc.org/docs) for more info, and detailed usage.

### Examples
Here are a few examples of how you could use the Global API.
[GeyserDiscordBot](https://github.com/GeyserMC/GeyserDiscordBot/blob/master/src/main/java/org/geysermc/discordbot/commands/FloodgateUuidCommand.java) 
- GeyserMC's discord bot has a /uuid command to get a floodgate uuid from a bedrock username.
[FabricGeyserPlayerHeads](https://github.com/onebeastchris/fabricgeyserplayerheads/blob/master/src/main/java/net/onebeastofchris/geyserplayerheads/utils/PlayerUtils.java#L57-L75)
- A fabric mod that uses the Global API to get a Bedrock player's skin, and then uses that to create a player head.