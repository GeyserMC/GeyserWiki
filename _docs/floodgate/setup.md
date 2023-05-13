---
layout: page
title: Floodgate Setup
permalink: /floodgate/setup/
---

## Downloads:

Download Geyser and Floodgate from the [Geyser download page](https://geysermc.org/download).

## Prerequisites

- You must own/manage the server in order to add Floodgate. *If you do not own the server, Floodgate does not allow you to bypass logging into Java servers that require a Mojang Java account*.
- You must either be running Geyser as a [plugin](/geyser/setup/), or be running [Geyser Standalone](/geyser/standalone/). Floodgate does not replace Geyser.
- `floodgate-spigot.jar` cannot be installed on CraftBukkit/Bukkit servers.

## Setting Up
*Any reference to Spigot here also refers to any compatible server software such as Paper. For the proxy setup, backend server implies all the servers that are behind the proxy.*

For BungeeCord/Velocity setups: you only are required to install Floodgate on the BungeeCord or Velocity proxy unless you want to use the Floodgate API on the backend servers - see [below](#installing-floodgate-also-on-spigot-servers-behind-bungeecord-or-velocity) for the installation process.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *Note:* Installing Floodgate on the backend servers will allow Bedrock player skins to display without the Bedrock player having to switch backend servers.

- Download the Floodgate plugin and add it to your plugins folder on your frontend server.
  - Select your platform on the download page linked above and click "Download Floodgate"
  - If you are using Floodgate on Fabric, you will need to download the [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api).
- Change the `auth-type` in the Geyser config to `floodgate`.
- Restart/start up the server.

**ONLY do this step if using Geyser Standalone:**
- *Copy* the `key.pem` file in the Floodgate config folder to the same directory as Geyser Standalone. **DO NOT DISTRIBUTE THIS KEY TO ANYBODY!** This key is what allows for Bedrock accounts to bypass the Java Edition authentication, and if anyone gets ahold of this, they can wreak havoc on your server.

### Installing Floodgate also on Spigot servers behind BungeeCord or Velocity

This is only needed when you want to use the Floodgate API on your backend server(s) behind a proxy.

- Install Floodgate on the proxy and on *all* backend servers as per the [previous instructions](/floodgate/setup/)
- Enable `ip_forward` in your BungeeCord `config.yml` if using BungeeCord. For Velocity, set up "player-info-forwarding".
- Set `bungeecord` to `true` in your `spigot.yml`. When using Velocity, see their [guide](https://docs.papermc.io/velocity/player-information-forwarding), as they have multiple options that require different setups.
- Start the proxy server.
- Edit the Floodgate config on your proxy server and set `send-floodgate-data` to `true`.
- *Copy* the `key.pem` file in the proxy Floodgate config folder to all backend servers' Floodgate config folder. **DO NOT DISTRIBUTE THIS KEY TO ANYBODY!** This key is what allows for Bedrock accounts to bypass the Java Edition authentication, and if anyone gets ahold of this, they can wreak havoc on your server.
- Restart the backend servers and proxy server.

## Changing/disabling the prefix

***Please note: we do not recommend removing the prefix unless you are certain that no one will share a username between a Java and Bedrock player. Duplicated usernames will cause weird situations, like being unable to teleport to one of the players.***

In your Floodgate config, change `username-prefix` to whichever prefix you desire - you can set it to `""` and there will be no prefix.

On some older Paper servers (or any forks that use them), you may need to also shut down your server and delete your `usercache.json` file located in the same folder as your server jar to prevent users who already joined from having the old prefix. See [this issue](/floodgate/issues/#prefix-is-not-changing-on-the-server-after-changing-it-in-the-config) for more information.

## Obtaining UUIDs for Floodgate players
Check your server logs, or use [this](https://uuid.kejona.dev/) page. If this doesn't work, then try this method:

First, you'll need to get the XUID of the player. There are several third-party websites to find this, for example, [this one](https://www.cxkes.me/xbox/xuid) (unaffiliated with Geyser). Make sure to choose "Hexidecimal." You'll need to enter the player's Xbox Gamertag, and, once submitted, and it should display the XUID in the format of `xxxxxxxxxxxxxxxx`. To turn the XUID into a UUID that Java Edition can recognize, you need to put the XUID in this format: `00000000-0000-0000-xxxx-xxxxxxxxxxxx`. If formatted right, Java Edition should accept it as a UUID.

## Using PlaceholderAPI
If you're using the Spigot version of Floodgate, download the Placeholder plugin [here](https://github.com/rtm516/FloodgatePlaceholders/). Using the placeholders shouldn't require additional setup other than having [PlaceholderAPI](https://www.spigotmc.org/resources/6245/) installed. See the section above on installing Floodgate on backend servers if you wish to use this on BungeeCord.

## Using Skript
If you're using the Spigot version of Floodgate, there is an unofficial plugin that adds Skript support [here](https://github.com/Camotoy/floodgate-skript). 
