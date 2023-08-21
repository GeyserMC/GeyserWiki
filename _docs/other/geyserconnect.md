---
title: GeyserConnect
---

GeyserConnect is a extension for Geyser that allows you to join multiple servers using a single GeyserMC proxy.

## Setup
(For GeyserConnect to work you need an open UDP port, by default it's `19132`.)
1. Download the latest Geyser build from the [downloads page](https://geysermc.org/download#standalone)
2. Download the latest build from [Github Actions](https://github.com/GeyserMC/GeyserConnect/actions)
3. Extract the downloaded ZIP file, and put the extracted JAR file into the `extensions` folder in you're GeyserMC standalone installation.
4. Start Geyser standalone as you do with a normal Geyser install. EG: `java -Xms1024M -jar Geyser.jar` (More info on [Creating a Startup Script](/geyser/creating-a-startup-script/))
5. Shutdown the standalone Geyser instance, and make you're desired changes to the GeyserConnect configuration in `GeyserConnect` in the `extensions` folder.
6. Connect to it to make sure its all working.

## DNS
There are [DNS](https://github.com/GeyserMC/GeyserConnect/tree/master/bind9) (using bind9) configs in the repo if you would like to use them.

## Config
See [here](https://github.com/GeyserMC/GeyserConnect/blob/master/src/main/resources/config.yml).
