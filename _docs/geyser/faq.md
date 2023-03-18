---
layout: page
title: FAQ
permalink: /geyser/faq/
---

## How Does it Work?
Geyser works as a translator, translating both the incoming and outgoing packets to a format both the client and server can understand. With this being said, it emulates a Minecraft: Java Edition client, so the server actually thinks you're joining from Java Edition. Regardless of the server or what plugins it has installed, you can join it with Geyser (as long as the server supports the latest vanilla (unmodified) Minecraft version).

## So, how does Redstone work?

Redstone, along with any other mechanics like commands, farms, etc., will work exactly like Java Edition since joining a Java Edition server and Geyser does not modify server behavior.

## Is Geyser paid?

No, Geyser and all related projects are completely free and open-source, licensed under the MIT license.

## What plugins don't work with Geyser?

Geyser should generally work fine with plugins, as we emulate a Java client. There are exceptions, though:

* [TCPShield](https://tcpshield.com/) requires `only-allow-proxy-connections` disabled without a paid plan. However, their "Premium" plan will allow the support of Geyser - please contact their support for help setting this up.

Floodgate can cause issues with plugins as it modifies the login process. *Please note that any offline mode authenticator plugins are only here for documentation; Geyser does not support offline mode usage.*

* [DynamicBungeeAuth](https://www.spigotmc.org/resources/27480/) Currently working on latest version 10.28B+ (10.27B and older versions produces invalid credentials for Bedrock players)
* [FastLogin](https://www.spigotmc.org/resources/14153/) does not let floodgate add player prefix.
* [ExploitFixer](https://www.spigotmc.org/resources/62842/) thinks that Floodgate users are UUID spoofing - disable the `uuidspoof` setting in ExploitFixer's config.
* [JPremium](https://www.spigotmc.org/resources/27766/) alters the UUID of a player, causing Floodgate not to be able to get the Bedrock data from its map.
* [LibHatesMods](https://www.spigotmc.org/resources/78202/) causes authentication to fail with `com.github.steveice10.mc.auth.exception.request.InvalidCredentialsException`
* [ProtocolSupport](https://www.spigotmc.org/resources/7201/) ~~is currently incompatible with Floodgate.~~ Works with Floodgate, but we recommend using [ViaBackwards](https://www.spigotmc.org/resources/27448/) instead.
* [ProtocolSupportBungee](https://www.spigotmc.org/resources/8733/) changes how the login process works and therefore breaks the Floodgate injection code.
* [SayNoToMcLeaks](https://www.spigotmc.org/resources/40906/) prevents Floodgate from finishing its login system.

If you come across any more, please let us know via [Discord](http://discord.gg/geysermc).

## Which plugin version of Geyser do I need?
This is a non-complete list of what platform each plugin version of Geyser is for, and the standalone version can be used for any as it isn't a plugin.
* Geyser-Spigot works with:
  * [Spigot](https://www.spigotmc.org/)
  * [Paper](https://papermc.io/downloads) (recommended)
  * Any other forks of the above
* Geyser-Bungee works with:
  * [BungeeCord](https://www.spigotmc.org/wiki/bungeecord/)
  * [Waterfall](https://papermc.io/downloads#Waterfall)
  * Any other forks of the above
* Geyser-Velocity works with [Velocity](https://www.velocitypowered.com/)
* Geyser-Sponge works with [SpongeVanilla or SpongeForge](https://www.spongepowered.org/)
* Geyser-Fabric works with [Fabric](https://www.fabricmc.net/)

## Which type of Geyser version is better, standalone or plugin?
Because of optimizations that hook into the plugin platforms, plugin versions of Geyser are preferable compared to standalone Geyser. On Spigot, Velocity, and BungeeCord versions of Geyser, direct connections allow for faster loading times, lower latency, and accurate IP addresses without requiring Floodgate. Geyser-Spigot has further optimizations due to having direct world access, including lower memory usage and greater translation accuracy. However, large server networks might prefer standalone Geyser because it can be updated without needing to restart any other proxies or servers, and can offload resource usage onto seperate machines.

## What server versions does Geyser-Spigot support?
The Geyser-Spigot plugin supports any Minecraft server version 1.13.2 or later. Any earlier version is not supported by the plugin - use a proxy version or the standalone build instead.

## If using BungeeCord or another fork, where do I need to put Geyser/Floodgate?
You only need Geyser and/or Floodgate on the BungeeCord server, as long as not using the Floodgate API. In this case, Floodgate is needed on the "backend" servers as well.

## What IP do I need to give Bedrock players?

Generally, the IP that Bedrock players will join with is your Java IP and the defined port in your Geyser config in the `bedrock` section under `port`. For example, if the IP address Java players join with is `test.geysermc.org`, and the `bedrock` `port` is set as 19132, Bedrock players should join with the IP `test.geysermc.org` and port `19132`.

## How can I have Bedrock players load resource packs?

You can add Bedrock resource packs to your Geyser installation in the `packs` folder of wherever the Geyser config is located. Bedrock clients will automatically download and load those resource packs. There is currently no automatic Java-to-Bedrock resource pack conversion, but you can convert any Java resource pack to Bedrock using [this tool](https://rtm516.github.io/ConvertJavaTextureToBedrock/) and add that to your server. The converter currently only works with packs up until 1.17; you will need to use another converter, or, [convert the pack yourself](https://learn.microsoft.com/en-us/minecraft/creator/documents/convertingtexturepacks).

## How can Bedrock players hold items in their offhand?

You can use the command `/geyser offhand`, which will swap the item in their main hand and offhand. There is also a setting you can enable in the config (`emote-offhand-workaround`) to allow Bedrock players to perform an emote in order to switch their main hand and offhand.

## How do I include players in commands when using Floodgate?
If there is a prefix on Floodgate players, you must include the prefix in the name. Floodgate also replaces all spaces in names with underscores, so be sure to replace any spaces with underscores when executing the command. If this does not work, put double quotes around the name.

Example: `/tp ".<bedrock_username>"`

## How do I add players to the whitelist when using Floodgate?
There are three ways you can do this. The first way is to use Floodgate's built-in whitelist command, `/fwhitelist add <bedrock_username>`. The second way is to turn off the whitelist using `/whitelist off`, then get the Geyser player to join, then run `/whitelist add ".<bedrock_username>"`, then turn the whitelist back on using `/whitelist on`. (If using this method for a Bedrock account linked to an existing, whitelisted Java account, there is no need to _also_ whitelist the Bedrock account; you may link the accounts then immediately turn the whitelist back on.) The third way is to add the player's UUID as given by Floodgate to the whitelist.json file and then run `/whitelist reload`.

## How do I find a player's UUID without them joining when using Floodgate?
Use [this page.](https://uuid.kejona.dev/) If this doesn't work, then try this method:
<br><br>
First, you'll need to get the XUID of the player. There are several third-party websites to find this, for example, [this one](https://cxkes.me/xbox/xuid) (unaffiliated with Geyser). Make sure to choose "Hexidecimal." You'll need to enter the player's Xbox Gamertag, and, once submitted, it should display the XUID in the format of `xxxxxxxxxxxxxxxx`. To turn the XUID into a UUID that Java Edition can recognize, you need to put the XUID in this format: `00000000-0000-0000-xxxx-xxxxxxxxxxxx`. If formatted right, Java Edition should accept it as a UUID.

## Can I remove the prefix of Floodgate players?
While you can remove the prefix, it is generally recommended not to remove the prefix to prevent situations where player usernames are the same on both editions (Ex: Bedrock Username: `JohnDoe`, Java Username: `JohnDoe`). While they have different UUIDs, they have the same username, which may cause conflicts with commands that involve a player name. If you want to remove the prefix to use commands, Try adding quotation marks around the name. Example: `/tp ".<bedrock_username>"` Otherwise, the prefix is located in the Floodgate `config.yml` under `username-prefix:`.

## Do I need Floodgate in order to use Geyser?
No; Floodgate is only required if you wish to allow Bedrock clients to join without authenticating to Java servers. Without the Floodgate plugin, Geyser can either authenticate to Mojang in online mode, or join without authentication in an offline mode server (though this is unsupportable and dangerous as anyone can join your server and is against Mojang's EULA).

## Sometimes, when I go really far out, the world starts to experience very odd visual bugs...
This is a Bedrock client issue caused by Bedrock being 32-bit and Java being 64-bit. For more information read [here](https://minecraft.gamepedia.com/Bedrock_Edition_distance_effects).

## Can I use Geyser to allow Java players to connect to my Bedrock server?
No, this is a translation tool to allow Bedrock players to connect to Java servers. It does not work the opposite way.

## Can I use Geyser with Pterodactyl Panel?
Yes, you can use Geyser as a plugin or a mod for your Minecraft server software running on Pterodactyl. There is also an official egg for the standalone version. It supports auto-updating and has all config options easily editable. You can find it [here](https://github.com/GeyserMC/pterodactyl-stuff), download the JSON egg, and import it into your panel. Make sure the Geyser port (using UDP) is exported out to the host & allocated the port to the server.

## Can I use Geyser with Ngrok?
Unfortunately, Ngrok is TCP-only, so you will not be able to use Geyser with Ngrok. As an alternative, you can use [playit.gg](https://playit.gg), which supports both TCP and UDP.

## How do I setup [Cosmic Guard](https://cosmicguard.com/)?
1) You will need access to the host systems terminal. Note: This guide is for Linux systems only!
2) Setup a "Guard" select gaming then Minecraft: Bedrock edition.
3) Click setup for linux and run the guardian installer and start the service.
4) Run "guardian status" and take note of the "Local IP" it starts with "10.31.x.x".
5) Go to the Geyser config.yml and update the Bedrock address to the Local IP which you found above.
6) Restart the mc server and test it out, it should work for both Java and Bedrock.

## Can I connect Geyser to an older server?
If the server has ViaVersion and/or supports the latest Minecraft version, yes. However, we are unable to support older versions of Minecraft due to a limitation in our Java support library.

## Can I connect Geyser to a modded (Forge/Fabric) server?
The short answer: if a vanilla client can join the server, then so can Geyser.

The long answer: currently, there is no way for Geyser to translate the features that most mods add (blocks, items, etc.). Therefore, servers that require mods to be installed clientside are unsupportable through Geyser.

## How can I auto-update Geyser?
Geyser MC Auto Updater ([GitHub page](https://github.com/michaelwatne/geysermcupdater)) is an option at this time to auto-update Geyser through the command line. Note that this project is unaffiliated with Geyser.

GeyserUpdater ([GitHub page](https://github.com/ProjectG-Plugins/GeyserUpdater)/[Spigot page](https://www.spigotmc.org/resources/88555/)) is a Spigot/BungeeCord plugin option for auto-updating. Please note that this plugin is also unaffiliated and unsupported by Geyser, and users should redirect support for the plugin to its [Discord](https://discord.gg/U5MC2tcCz9).

## How can I make DiscordSRV show Floodgate 2.0 or GeyserSkinManager skins?
Replace the `AvatarUrl` line in your DiscordSRV config with this: `AvatarUrl: https://mc-heads.net/avatar/{texture}/{size}.png`

Note: you need to be running DiscordSRV v1.22.0 or newer. Floodgate 2.0 or GeyserSkinRestorer is still required for skins to show up for Java players and for this to work.

Alternatively, if you cannot get the above AvatarUrl to work with DiscordSRV, or you'd like to use it with another plugin that does not support texture ids, you can use the [TydiumCraft Skin API.](https://tydiumcraft.net/docs/skinapi)

## Can I use Buycraft (Tebex) with Geyser?
You sure can! Buycraft supports Java & Bedrock players via the Offline store mode **(Recommended to be used with Floodgate)**

**(Currently, Buycraft does not support special symbols like `*` or `-`, so you'll have to change the Floodgate prefix to `_` or remove it entirely.)**
### Steps to create a store to support both versions
- Buycraft-> Create Webstore
- Select Game-> Minecraft Offline
- Continue-> Click "Create my Webstore"
- Name your server & Select currency-> Continue
- Select Game Server-> Continue
- Download the plugin version that best suits your server.
- Execute the secret command from your server's console

Your store is now set up to support Bedrock & Java players.

**(Please note, if you are using a prefix with Floodgate, Bedrock players will have to enter the prefix.)**

## Can I use CraftingStore with Geyser?
As mentioned above, bedrock players must include the prefix in their name.
### Steps to make the store work for Geyser
1. Go to the [admin page](https://craftingstore.net/admin)
2. Expand settings on the left
3. Click webshop
4. Make sure 'Require premium accounts' is Off
5. Then, if you are using floodgate in each package, make sure it uses the player's name in any commands, not their UUID

![](https://i.imgur.com/PM7nNSm.png)


## What languages does Geyser support?
We aim to support any of the bedrock languages; see [here](https://translate.geysermc.org/) for our Crowdin page, and below is a list of all the language codes. We also can add support for more languages, and please request them in the Discord server if you are willing to translate them. (Enabled clientside via https://www.curseforge.com/minecraft/mc-addons/translations-for-minecraft)

### Bedrock languages

|Name                        |Code |
|----------------------------|-----|
|Bulgarian                   |bg_bg|
|Czech                       |cs_cz|
|Danish                      |da_dk|
|German                      |de_de|
|Greek                       |el_gr|
|British English             |en_gb|
|American English            |en_us|
|Spanish                     |es_es|
|Mexican Spanish             |es_mx|
|Finnish                     |fi_fi|
|Canadian French             |fr_ca|
|French                      |fr_fr|
|Hungarian                   |hu_hu|
|Indonesian                  |id_id|
|Italian                     |it_it|
|Japanese                    |ja_jp|
|Korean                      |ko_kr|
|Dutch                       |nl_nl|
|Norwegian Bokmål            |nb_no|
|Polish                      |pl_pl|
|Brazilian Portuguese        |pt_br|
|Portuguese                  |pt_pt|
|Russian                     |ru_ru|
|Slovak                      |sk_sk|
|Swedish                     |sv_se|
|Turkish                     |tr_tr|
|Ukrainian                   |uk_ua|
|Chinese Simplified (China)  |zh_cn|
|Chinese Traditional (Taiwan)|zh_tw|

### Additional languages

|Name                        |Code |
|----------------------------|-----|
|Afrikaans                   |af_za|
|Belarusian                  |be_by|
|Hebrew                      |he_il|
|Hindi                       |hi_in|

## Adding custom Geyser translation overrides

As of Geyser build #1101, you can now
specify custom translations for Geyser strings used within the project.

Please note that you cannot add strings that work in Minecraft formatting - these strings are only for
places where Geyser uses them.

To start, create a `languages` folder in the same directory as the Geyser config file.
Inside of it, you'll need to add a file with your desired locale ending in `.properties`. You can see
[here](https://github.com/GeyserMC/languages/tree/master/texts) for the locale files that Geyser uses - 
you can download these as a starting point, or you can just add the strings you want to overwrite. 

You must restart Geyser for the changes to apply.

# Questions not related to gameplay

## What is the relationship between CubeCraft and Geyser?
Redned started Geyser in July 2019. In May 2020, CubeCraft acquired the GeyserMC brand. This means that they govern the project (though at this time, they govern lightly). CubeCraft does not own the code of Geyser.

## Does CubeCraft use Geyser?
No.
