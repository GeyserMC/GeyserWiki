---
layout: page
title: GeyserConnect
permalink: /other/geyserconnect/
---

GeyserConnect is a extension for Geyser that allows you to join multiple servers using a single GeyserMC proxy.

## Setup
(For GeyserConnect to work you need an open UDP port, by default it's `19132`.)
1. Download the latest build from [Github Actions](https://github.com/GeyserMC/GeyserConnect/actions)
[nighly.link](https://github.com/GeyserMC/GeyserConnect/actions)
3. Extract the downloaded ZIP file, and put the extracted JAR file into the geyser_extensions folder in you're GeyserMC standalone installation.
4. Start Geyser standalone as you do with a normal Geyser install. EG: `java -Xms1024M -jar Geyser.jar` (More info on [Creating a Startup Script](/geyser/creating-a-startup-script/))
5. Shutdown the standalone Geyser instance, and make you're desired changes to the GeyserConnect configuration in `GeyserConnect` in the `geyser_extensions` folder.
6. Connect to it to make sure its all working.

## DNS and Docker
There are both [DNS](https://github.com/GeyserMC/GeyserConnect/tree/master/bind9) (using bind9) and [Docker](https://github.com/GeyserMC/GeyserConnect/tree/master/docker) configs in the repo if you would like to use them.

## Config
* `address` - The IP address that will listen for connections.
* `remote-address` - The IP address to forward players to, this needs to be accessible by the client. Set it to `auto` to grab your public IP automatically.
* `port` - The port that will listen for connections.
* `debug-mode` - If debug messages should be sent through console.
* `max-players` - Maximum amount of players that can connect.
* `motd` - MOTD to display.
* `geyser`
  * `debug-mode` - If debug messages should be sent through the console, has to be enabled in both places to work.
  * `shutdown-time` - The time to wait after the last player disconnects to shutdown the proxy, in seconds. Set to -1 to disable.
* `servers` - A list of servers to show for everyone build from `address`, `port`, `name`, `online` and `bedrock` all optional apart from address.
* `custom-servers`
  * `enabled` - Should custom servers be enabled for users.
  * `max` - Max amount of custom servers per user.
  * `storage-type` - Storage engine for custom servers. Can be `json`, `sqlite`, `mysql`
  * `mysql` - Connection information for the MySQL database if enabled

The default config can be found [here](https://github.com/GeyserMC/GeyserConnect/blob/master/src/main/resources/config.yml).
