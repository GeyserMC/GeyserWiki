---
layout: page
title: Linking
permalink: /floodgate/linking/
---

## What is Global Linking?
Instructions and information about how to link can also be found here: [https://link.geysermc.org/](https://link.geysermc.org/)

Before we introduced Global Linking, you always had to link your Java and Bedrock account on every individual server you visited (that has Floodgate). Global Linking is here to fix that problem. Link once, join everywhere.<br>

Keep in mind: While having your accounts linked, you will use the Java account's location, inventory data, and achievements etc. regardless of which platform you sign in from (therefore, "synchronising" the player data). The player data from the Bedrock account will not be accessible until you unlink again. As a result, you should transfer everything (ender chest contents, items, armor) to the Java account before linking to not "lose" your Bedrock progress. If you forgot to do this, you can unlink, transfer everything over, and link again.

Global Linking is part of the [Global Api](https://wiki.geysermc.org/floodgate/features/#what-is-the-global-api) and uses the GlobalLinkServer to link your account. To be able to link your account you have to do the following:
1. Join the GlobalLinkServer with both your Java and Bedrock account  
   (IP: `link.geysermc.org`, Java port: `25565`, Bedrock port: `19132`)
2. Start the linking process by typing `/linkaccount` on your Java **or** Bedrock account
3. You'll get a message with a random number that you have to enter on the account that you did not start the linking process on.
4. Enter the random number on the other account by typing `/linkaccount <code>`
5. You should get kicked from the server on both your Bedrock and Java account with the message that it had successfully linked your accounts.

To unlink your globally linked accounts, join the GlobalLinkServer (as described above for linking) on either Java or Bedrock, and use the `/unlinkaccount` command. 

Global Linking should be enabled by default on every server running Floodgate 2.0, but in the case that you disabled it, you can enable it again by opening your Floodgate config and make sure that the `player-link` section looks similar to this:
```yml
# Configuration for player linking
player-link:
  # Whether to enable the linking system. Turning this off will prevent
  # players from using the linking feature even if they are already linked.
  enabled: true
  # Whether to use global linking. Global linking uses a central server to request link
  # accounts, allowing people to link once, join everywhere (on servers with global linking).
  use-global-linking: true
```
([see the default config](https://github.com/GeyserMC/Floodgate/blob/master/core/src/main/resources/config.yml))

Once you saved the config and restarted your server you should be using Global Linking.

If you don't want to use Global Linking, you can disable `enable-global-linking` in the Floodgate config.

## Local Linking
You can also set up a local linking database on your server. Local linking can work with Global Linking at the same time. Link entries in your local database will override entries in the Global Linking Server.

Note that you only have to follow these steps on your proxy (BungeeCord or Velocity), if you have one.

1. Download one of the linking databases extensions [here](https://ci.opencollab.dev/job/GeyserMC/job/Floodgate/job/master/).
   If you need help picking the right one: choose `mysql` if you already have a database or want to have a multi-proxy setup. For anything else choose `sqlite`. The full name should be `floodgate-*type*-database.jar`.
2. Copy the database extension jar you just downloaded *into* the floodgate 2.0 plugin folder (e.g. `/plugins/floodgate/`).
3. Enable `enable-own-linking` in the `player-link` section of Floodgate.
4. Set `type` in the `player-link` section to your database type (currently either `mysql` or `sqlite`). (If you used Floodgate 1.0 and had linking enabled back then; the database type was `sqlite`).
5. Restart your server

If you have selected `mysql` a new data folder for the database should be generated inside the Floodgate data folder. You can enter your database credentials in there. After you did that restart your server once more.

That should be it. You can then link your accounts by following the instructions you get when typing `/linkaccount`.
