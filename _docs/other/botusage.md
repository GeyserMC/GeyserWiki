---
layout: page
title: Discord Bot Usage
permalink: /other/discord-bot-usage/
---

### Our discord bot provides some very useful toos to debug/issue track your server. We will go in-depth on how to use the bot commands and its tools.

## Server Logs

If you are having console errors or Geyser isn't functioning/starting up, server logs are very useful to find the root cause of why Geyser is not running. You can safely share your server logs with this website; [mclogs](https://mclo.gs) as this website will remove all IP-Adresses from the logs. if you paste the logs url into or discord our bot will analyze the error and will give an fix if there is one present like seen below. You can also paste the lastest.log file into discord.

![Example of an error](https://cdn.discordapp.com/attachments/613194762249437245/1021787041257767042/Naamloos.png)


## OCR

OCR or Optical Character Recognition is something that our discord bot can process, which means if you upload a picture/image into our discord that contains an error like seen below the bot might be able to help you out with our issue.

![Example of an error](https://cdn.discordapp.com/attachments/613194762249437245/1021784112878600263/unknown.png)

## Ping Server

If you are not sure if your server is reachable from the outside you can use our ping tool. Using the ping command in #bot-spam; /ping "serverip" as seen below, The bot will check if your server is online/reachable. When you are not running your server on default port: java 25565 and bedrock 19132 you will need to specify the port like /ping "serverip:serverport".
If the bot returns; Unable to find Java/bedrock server at the requested address, Your server either is not running/setup properly or your firewall is blocking the connection. more info on how to setup Geyser can be found here [Geyser Setup](/geyser/setup/)

![Example of the ping command](https://cdn.discordapp.com/attachments/613194762249437245/1021790089367535697/unknown.png)

## Provider List

Some host providers like ApexHosting/Aternos aso.. have different setup for Geyser. If you do not know how to setup Geyser on your provider you can either chechout manually here [Geyser HostProvider List](/geyser/supported-hosting-providers/) or use our bot command /provider "providername" as seen below.

![Example of the provider command](https://cdn.discordapp.com/attachments/613194762249437245/1021791367585857587/unknown.png)

## Download Command

Sends the download link of the chosen program/plugin. /download "Geyser" or /download "ViaVersion" and so on...

## Leaderboard Command

Provides a link to the website Where we are tracking levels top 100. 

## Rank Command

You can give yourself 2 types of role on our discord "GeyserNews" & "Testers". you can use the command /rank "chosen rank"

## Queue Command

Displays Current global api skin queue upload times.

