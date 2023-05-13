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

The permission node is `floodgate.command.fwhitelist`.

## What is the Global Api?
The Global Api is an API that is available for every server. It currently includes: [Global Linking](#what-is-global-linking), [skin uploading](#what-is-skin-uploading), getting a xuid by gamertag, and getting a gamertag by xuid.
We don't store anything else than you can access by the Global Api, except for some non-identifiable metrics. The source code of the Global Api is available [here](https://github.com/GeyserMC/global_api) and the source code of the Global Linking server is available [here](https://github.com/GeyserMC/GlobalLinkServer).


## What is skin uploading?
Skins of Bedrock player should be visible to Java players on servers with Floodgate 2.0 installed.  
If they aren't, it's most likely that the skin uploading queue has grown too large and can take a while to upload your skin.

Skin uploading is also a part of the [Global Api](#what-is-the-global-api). It is responsible for converting Bedrock skins to Java skins and uploading them to Mojang servers make them show up on Java Edition.

We're using MineSkin internally. MineSkin is running on accounts donated by the community. So if you want to support MineSkin and make the upload times faster, feel free to look at [this page](https://mineskin.org/account) for more info.

![Example skin upload](https://cdn.discordapp.com/attachments/613168850925649981/815969801763160104/unknown.png)
