---
layout: page
title: Features
permalink: /floodgate/features/
---

## Whitelist command

Floodgate 2.0 has a whitelist command, `fwhitelist`, that should be used for adding or removing Floodgate players to whitelist.json. The username prefix doesn't need to be included.
`fwhitelist add Tim203`
`fwhitelist remove Tim203`

You can also specify a UUID: `fwhitelist add 00000000-0000-0000-0009-01f64f65c7c3`

The permission node is `floodgate.command.whitelist`.

## What is the Global Api?
The Global Api is an API that is available for every server. It currently includes: [Global Linking](#what-is-global-linking), [skin uploading](#what-is-skin-uploading), getting a xuid by gamertag, and getting a gamertag by xuid.
We don't store anything else than you can access by the Global Api, except for some non-identifiable metrics. The source code of the Global Api is available [here](https://github.com/GeyserMC/global_api) and the source code of the Global Linking server is available [here](https://github.com/GeyserMC/GlobalLinkServer).

## What is Global Linking?
Instructions and information about how to link can also be found here: https://link.geysermc.org/

Before we introduced Global Linking, you always had to link your Java and Bedrock account on every individual server you visited (that has Floodgate). Global Linking is here to fix that problem. Link once, join everywhere.<br>
Global Linking is part of the [Global Api](#what-is-the-global-api) and uses the GlobalLinkServer to link your account. To be able to link your account you have to do the following:
1. Join the GlobalLinkServer with both your Java and Bedrock account  
   (IP: `link.geysermc.org`, Java port: `25565`, Bedrock port: `19132`)
2. Start the linking process by typing `/linkaccount` on your Java **or** Bedrock account
3. You'll get a message with a random number that you have to enter on the account that you did not start the linking process on.
4. Enter the random number on the other account by typing `/linkaccount <code>`
5. You should get kicked from the server on both your Bedrock and Java account with the message that it had successfully linked your accounts.

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
([see the default config](https://github.com/GeyserMC/Floodgate/blob/master/common/src/main/resources/config.yml))

Once you saved the config and restarted your server you should be using Global Linking.

If you don't want to use Global Linking, you can disable `enable-global-linking` in the Floodgate config.

### Local Linking
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

## What is skin uploading?
Skins of Bedrock player should be visible to Java players on servers with Floodgate 2.0 installed.  
If they aren't, it's most likely that the skin uploading queue has grown too large and can take a while to upload your skin.

Skin uploading is also a part of the [Global Api](#what-is-the-global-api). It is responsible for converting Bedrock skins to Java skins and uploading them to Mojang servers make them show up on Java Edition.

We're using MineSkin internally. MineSkin is running on accounts donated by the community. So if you want to support MineSkin and make the upload times faster, feel free to look at [this page](https://mineskin.org/account) for more info.

![Example skin upload](https://cdn.discordapp.com/attachments/613168850925649981/815969801763160104/unknown.png)
