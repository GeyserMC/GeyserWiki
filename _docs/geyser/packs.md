---
title: Using Resource Packs with Geyser
---

## Introduction

Geyser supports sending Bedrock edition resource packs to connecting Bedrock clients. 
However, Geyser does not convert Java edition resource packs into Bedrock edition ones.

Resource packs offer a range of customization options. Just like on Java, they can be used for a wide variety of things:
- Texture Modifications: Resource packs can change the look of blocks, items, and entities, providing a unique visual experience.
- Sound Changes: Custom sound effects or music tracks can be added to create a more immersive atmosphere.
- UI Enhancements: Resource packs can modify the user interface - a popular example would be providing a dark mode UI option.
... and much more!

## Using resource packs

#### Sending local packs
The easiest way to send resource packs to Bedrock players is by putting the Bedrock edition resource pack, either as a `.zip` or `.mcpack` file, into Geyser's `packs` folder.

Location of the packs folder:
- Fabric/NeoForge: `/config/Geyser-xxx/packs/`
- Other platforms: `/plugins/Geyser-xxx/packs/`

After restarting the server (or reloading Geyser), players that connect will receive all packs that are in that folder.


#### Remote pack urls
As an alternative to sending local packs, you can also send resource packs by sending Bedrock players a link to download the packs from.
This works similarly to Java edition's pack downloading. However, there are a few key limitations:

- The link must be a direct link to the resource pack
- The Content-Length header must specify the exact file size
- The Content-Type application header must be set to `application/zip`.
- Additionally, the resource pack itself must be in an enclosing folder before being zipped.
  Example: Usually, you would place your `manifest.json` file in to the root of the zip, so `mypack.zip/manifest.json`.
  With remote resource packs however, it needs to be inside an enclosing folder, aka `mypack.zip/mypack/manifest.json`.

You can add links to remote packs in the Geyser config under the `remote-pack-urls` section:
```yaml
# A list of links to send to the client to download resource packs from.
# These must be direct links to the resource pack, not a link to a page containing the resource pack.
# If you enter a link here, Geyser will download the resource pack once to check if it's in a valid format.
resource-pack-urls:
  # Example: GeyserOptionalPack
  - "https://ci.opencollab.dev/job/GeyserMC/job/GeyserOptionalPack/job/master/lastSuccessfulBuild/artifact/GeyserOptionalPack.mcpack"
```

Geyser will download your configured remote resource packs once on boot, and warn you if any of these conditions are not met.
It is unfortunately not possible to bypass these, as these are restrictions imposed by the Bedrock client. 

To verify headers manually, curl the website and check the values.
For example:
`curl -i -k -X GET <TODO link>` returns the following:

//aldljfjaef

## Common questions

- **Does Geyser support behavior packs/add-ons?**
No. These would require modifications on the Java server side, which isn't possible when Geyser is used on a proxy. 
However, many things that are possible with add-ons or behavior packs can be done with Geyser's API - such as [custom items](/geyser/custom-items)
or [custom blocks](/geyser/custom-blocks).

- **Does Geyser convert Java edition resource packs?**
Not currently, but it is planned. For now, you would need to manually create a Bedrock edition resource pack equivalent.

- **Can I allow players to choose resource packs themselves?** 
On most Bedrock platforms (except consoles), players are able to download and install resource packs on the client. 
There is also a Geyser extension, [PickPack](https://github.com/onebeastchris/PickPack) that uses the Geyser API to allow all Bedrock players to choose from a set of resource packs.

- **On proxy setups: Are per-backend-server resource packs possible?**
This unfortunately is not possible natively, as Bedrock edition only allows removing and adding packs when connecting initially to the server.
However, with the usage of the transfer packet, it is possible to instruct the Bedrock client to re-connect to the server, and to apply changes then.
For per-server-packs, you can use the [GeyserPackSync](https://github.com/onebeastchris/GeyserPackSync) plugin.

- **Does Geyser have an API to send resource packs**
Yes! See the [Geyser API docs](/geyser/api/) for more info on that. There is a `SessionLoadResourcePacksEvent` to determine which 
packs are sent to each connecting player, or the more general `GeyserDefineResourcePacksEvent` that defines the packs all users receive.
