---
layout: page
title: GeyserConnect
permalink: /other/geyserconnect/
---

GeyserConnect is a version of Geyser that allows you to join multiple servers using a single GeyserMC proxy.

## Setup
(For GeyserConnect to work you need an open UDP port, by default it's `19132`.)
1. Download the latest Geyser build from the [downloads page](https://geysermc.org/download#standalone)
2. Download the latest GeyserConnect build from [GitHub Actions](https://github.com/GeyserMC/GeyserConnect/actions) and place it in the extensions folder
3. Start the server
4. Stop the server
5. Edit any configuration settings for Geyser and GeyserConnect
6. Start the server as you do with a normal Geyser install. EG: `java -Xms1024M -jar GeyserConnect.jar` (More info on [Creating a Startup Script](/geyser/creating-a-startup-script/))
7. Connect to it to make sure its all working.

## DNS
There are [DNS](https://github.com/GeyserMC/GeyserConnect/tree/master/bind9) (using bind9) configs in the repo if you would like to use them.

## Config
See [here](https://github.com/GeyserMC/GeyserConnect/blob/master/src/main/resources/config.yml).
