---
title: FAQ
---

# FAQ

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
