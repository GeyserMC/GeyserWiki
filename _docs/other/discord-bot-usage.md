---
title: Discord Bot Usage
---

Our discord bot provides some very useful toos to debug/issue track your server. We will go in-depth on how to use the bot commands and its tools.

## Server Logs

If you are having console errors or Geyser isn't functioning/starting up, server logs are very useful to find the root cause of why Geyser is not running. You can safely share your server logs with [mclogs](https://mclo.gs) as it will remove all IP addresses and other sensitive information from the logs. 

If you paste the logs URL into our Discord, our bot will analyze the error and will give a fix if there is one present like seen below. You can also paste the `latest.log` file into Discord.

![Example of an error](https://cdn.discordapp.com/attachments/613194762249437245/1021787041257767042/Naamloos.png)

## OCR

OCR or Optical Character Recognition is something that our discord bot can process, which means if you upload a picture/image into our discord that contains an error like seen below the bot might be able to help you out with our issue.

![Example of an error](https://cdn.discordapp.com/attachments/613194762249437245/1021784112878600263/unknown.png)

## Ping Server

If you are not sure if your server is reachable from the outside you can use our ping tool. Using the ping command in #bot-spam; /ping "serverip" as seen below, The bot will check if your server is online/reachable. When you are not running your server on default port: java 25565 and bedrock 19132 you will need to specify the port like /ping "serverip:serverport".

If the bot returns `Unable to find Java/Bedrock server at the requested address`, your server either is not running/setup properly or your firewall is blocking the connection. More info on how to setup Geyser can be found on the [Geyser Setup page](/geyser/setup/).

![Example of the ping command](https://cdn.discordapp.com/attachments/613194762249437245/1021790089367535697/unknown.png)

## Provider List

Some hosting providers have unique setup methods for Geyser. If you do not know how to setup Geyser on your provider you can either checkout the [Geyser Host Provider List](/geyser/supported-hosting-providers/) manually, or use our bot command `/provider "providername"` as seen below.

![Example of the provider command](https://cdn.discordapp.com/attachments/613194762249437245/1021791367585857587/unknown.png)

## Download Command

Sends the download link of the chosen program/plugin. `/download "Geyser"` or `/download "ViaVersion"` and so on.

## Leaderboard Command

Provides a link to the Geyser Bot XP leaderboards.

## Rank Command

You can give yourself two types of roles on our discord, "GeyserNews" and "Testers". You can use the command `/rank "chosen rank"` to give one to yourself.

## Queue Command

Displays Current global api skin queue upload times.


