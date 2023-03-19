---
layout: page
title: Geyser Setup
permalink: /geyser/setup/
---

# Setup

## Overview

Bedrock clients will join through Geyser, and it will handle all the packet translations. There are six different versions of Geyser: 
1. Geyser for Spigot (works on derivatives such as Paper),
2. Geyser for BungeeCord (also works on Waterfall), 
3. Geyser for Velocity,
4. Geyser for Sponge, 
5. Geyser for Fabric (for setups that support vanilla Java clients; requires [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api)),
6. Geyser Standalone (Standalone Setup instructions are [here](/geyser/standalone/)).

The first five versions run as plugins/mods and can be installed directly onto the server. The standalone version can be used in a similar way, except you run it separately.

If you are running a server, it is highly recommended you use one of the plugin versions, and if you want to join a server that does not have Geyser installed, you can run the standalone version. If you use Pterodactyl Panel we have an egg for the standalone version, please see [here](/geyser/faq/#can-i-use-geyser-with-pterodactyl-panel) for more information.


## Prerequisites
- The server you are connecting to has to support the latest version of Minecraft Java Edition (at this time this is Minecraft {{ site.data.versions.java }})
The server itself does not have to be the latest version but does have to allow connections. If you're running the server on an older version, you can use the plugin [ViaVersion](https://www.spigotmc.org/resources/19254/), but do note that only **1.13.2 and any version above is officially supported**. For older versions, use Geyser Standalone, or Geyser on a proxy like Velocity or BungeeCord.
- The device running Geyser must support Java 16 or later. If you need help installing or updating, please see [PaperMC's Java update page](https://docs.papermc.io/misc/java-install). If you're running a version of Paper that does not support Java 16 or later, you can add the flag `-DPaper.IgnoreJavaVersion=true` to your startup Java arguments to allow Paper to run on Java 16. You can run Geyser standalone on another device if a server software cannot be updated to use Java 16.
- If you are connecting to an online mode Java server, a paid Java account is required. If you are running the server, you can bypass this requirement for your server with [Floodgate](/floodgate/).
- Your Bedrock client has to be a supported version - at this time that is Bedrock version(s) {{ site.data.versions.bedrock }}.
- If you are running the server, you need to have a UDP port opened. See below for more instructions.
- In order for Bedrock players to chat (1.19.3+) or join (1.19.1/1.19.2), you need to disable chat signing. More information about that can be read on the [chat signing page](/geyser/secure-chat/).

## Plugin Setup
1. Read the Prerequisites above, especially if you are setting up Geyser for an older Minecraft Java Edition version!
2. To make sure you are using the easiest way to set up Geyser, please check whether your hosting provider features [built-in Geyser](/geyser/supported-hosting-providers/#built-in-geyser). If you are not using a hosting provider, or your hosting provider is not featured on said list, continue with the steps below. 
3. If 2. does not apply: download Geyser [here](https://geysermc.org/download) for the platform your server runs on. See the [FAQ](/geyser/faq/#which-plugin-version-of-geyser-do-i-need) if you're confused about which build to download.
4. Put the Geyser jar file in your plugins folder and start up the server.
5. Port-forwarding: 
 - If you are using a hosting provider, you will likely need to change your Bedrock port in `config.yml`. Information on your hosting provider might be available on the [Supported Hosting Providers](/geyser/supported-hosting-providers/) page. If there is no information on your hosting provider and you are unable to assign/open ports yourself, try enabling `clone-remote-port` in Geyser's `config.yml`file and connecting with the same IP/port as you would with Java Edition.
 - If not using a hosting provider, you will need to use port forwarding to allow people outside your LAN to connect. You want to port forward 19132 UDP, instructions to do that for most routers can be found [here](https://www.lifewire.com/how-to-port-forward-4163829). If you are trying to join from the same LAN, the server should show up in the friends tab.
 - To check whether it is working correctly, you can use the `geyser connectiontest [yourIP]:[yourPort]` command in your server console to check if the server is reachable from the outside.
 - _Restart your server if you edited your config! Simply reloading will not work._
6. Besides the `port` entry in the _Bedrock Section_ of Geyser's `config.yml`, you rarely need to change anything. A few examples:
 - `address: 0.0.0.0` The IP address that will listen for connections. There is no reason to change this unless you want to limit what IPs can connect to your server or if your hosting provider instructs you to do so.
  - `port: 19132` The port Bedrock players will use to connect. If the option `clone-remote-port` is set to true, this port is ignored, and you'll have to use the same port on bedrock as you would on Java to connect.
7. The _remote_ section in the `config.yml` determines, which Java server the Bedrock players join. 
- `address: auto` This means, that Geyser configures the server's IP, port and auth-type of the java server by itself, leave this at auto.
- `port: 25565` This should be the port of the Java server. By default, it is set to 25565 - your hosting provider may have assigned a different port to your Java server, set that here.
8. If you wish to remove the Java account requirement, set up the [Floodgate](/floodgate/setup/) plugin. This will allow Bedrock players to play on your server, without you having to use offline mode.
9. For further Geyser config changes, like allowing Bedrock players to build on the nether roof, refer to [the config help article](/geyser/understanding-the-config/).

If you're still having problems with Geyser not working or giving you an "Unable to connect to world" error, see the [Common Issues](/geyser/common-issues/) page.\
For more information, take a look at the [Understanding the Config](/geyser/understanding-the-config/) page, and the [FAQ](/geyser/faq/) page.\
And if you still have questions, feel free to join the [Discord](https://discord.geysermc.org) if you haven't already.

### BungeeCord/Velocity Setup
If you are using a BungeeCord, Waterfall, or Velocity proxy, then you only need to install Geyser (and Floodgate, if you desire) on the proxy.

You can install Floodgate (but not Geyser) on the back-end servers to improve skin functionality and to let other plugins access the Floodgate API.  If you do this, then you _must_ make sure that the same `key.pem` file is used between all instances of Floodgate; otherwise, Bedrock clients will not be able to join. Full instructions can be found on the [Floodgate Wiki](/floodgate/setup/).

The Bedrock clients, like Java clients, should connect to the proxy server, and should never directly connect to a back-end server.  You don't need to (and shouldn't) port-forward anything for the back-end servers!

#### Setup:
1. Make sure Velocity/BungeeCord is up-to-date. The proxy can be newer than the servers behind it (also called backend servers). If you're running the backend servers on an older version then the current {{ site.data.versions.java }}, you can use the plugin [ViaVersion](https://www.spigotmc.org/resources/19254/). It is recommended to have the plugin on all backend servers where necessary, instead to having it on the proxy. 
2. Download Geyser [here](https://geysermc.org/download) for the platform your server runs on. See the [FAQ](/geyser/faq/#which-plugin-version-of-geyser-do-i-need) if you're confused about which build to download. 
3. Put the Geyser jar file in your plugins folder and start up the server.
4. Port-forwarding:
- If you are using a hosting provider, you will likely need to change your Bedrock port in the `config.yml` file. Information on your hosting provider might be available on the [Supported Hosting Providers](/geyser/supported-hosting-providers/) page. If your hosting provider is not listed there, and you are unable to port forward the default 19132 port on UDP, try setting `clone-remote-port` to true and connecting with the Java IP and port. Any port will work, as long as the UDP protocol is not blocked or already in use by the query feature (see `server.properties`) or another mod. 
- If you are not using a hosting provider, you will need to use port forwarding to allow people out of your LAN to connect. You want to port forward 19132 UDP, instructions to do that for most routers can be found [here](https://www.lifewire.com/how-to-port-forward-4163829). Note: Any port will work, as long as UDP traffic is not blocked. Java uses the TCP protocol, so you will need to open both UDP and TCP if you wish to use the same port.
- To check whether it is working correctly, you can use the `geyser connectiontest [yourIP]:[yourPort]` command in your server console to check if the server is reachable from the outside.
-  _Restart your server if you edited your config! Simply reloading will not work._
5. Besides the `port` entry in the _Bedrock Section_ of Geyser's `config.yml`, you rarely need to change anything. A few examples:
- `address: 0.0.0.0` The IP address that will listen for connections. There is no reason to change this unless you want to limit what IPs can connect to your server or if your hosting provider instructs you to do so.
- `port: 19132` The port bedrock players will use to connect. If the option `clone-remote-port` is set to true, this port is ignored, and you'll have to use the same port on Bedrock as you would on Java to connect.
6. The _remote_ section in the `config.yml` determines which Java proxy the Bedrock players join. The proxy then configures which server the players are sent to.
- `address: auto` Leaving this at auto is recommended, because it means that Geyser configures the proxy's IP, port and auth-type itself.
- `port: 25565` This should be the port of the Java server. By default, it is set to 25565 - your hosting provider may have assigned a different port to your proxy, set that here.
7. For further Geyser config changes, like allowing Bedrock players to build on the nether roof, refer to [the config help article](/geyser/understanding-the-config/).


## Standalone Setup
Please read [Standalone Setup](/geyser/standalone/) to set up Geyser Standalone.    

## Port Forwarding

Unlike Minecraft Java Edition, Bedrock Edition runs on port 19132 on the UDP protocol. When port forwarding, make sure to allocate to 19132 UDP or another UDP port. For many server hosting providers, you will simply need to change your Bedrock listening port (see [here](/geyser/supported-hosting-providers/) for a list of supported providers).

## Setup Videos
Setup tutorials in a variety of languages. Do note: Some might be outdated - but the written guide above is up-to-date.

### English
**Connect to Java servers from Bedrock Edition! | GeyserMC Proxy Tutorial by [raimuakuna](https://www.youtube.com/channel/UCIMZsNCD_-prDETwRypAqmQ)**

[![YouTube Video](https://img.youtube.com/vi/7rwfScY66Jc/0.jpg)](https://www.youtube.com/watch?v=7rwfScY66Jc)

**How to play Java Servers in Minecraft Bedrock! by [PatarHD](https://www.youtube.com/channel/UCpowCAl4XV_hTQSYQpMWF6A)**

[![YouTube Video](https://img.youtube.com/vi/IHg_ts3MgLY/0.jpg)](https://www.youtube.com/watch?v=IHg_ts3MgLY)

**How to connect Bedrock players to Java servers Part One.** by [Casper](https://www.youtube.com/channel/UCHL0K3bOH0o7YoO5T-2_MzA)

[![YouTube Video](https://img.youtube.com/vi/DHZHM1RBtfQ/0.jpg)](https://www.youtube.com/watch?v=DHZHM1RBtfQ)

**How To Add Crossplay to Your Minecraft Server (Geyser Setup Guide).** by [The Breakdown](https://www.youtube.com/channel/UC6Ec5NXzcESo60F3UgtgQRA)

[![YouTube Video](https://i.ytimg.com/vi/2HwqbDHWwu8/hqdefault.jpg)](https://youtu.be/2HwqbDHWwu8)

### Russian
**ЗАШЕЛ НА ХАЙПИКСЕЛЬ С МКПЕ? ЧИТЕРСКИЙ КОНФИГ!** by [TOWUK](https://www.youtube.com/channel/UCK8v-rGsfCOkpbi0slIpAng)

[![YouTube Video](https://img.youtube.com/vi/KcZZp05EfVQ/0.jpg)](https://www.youtube.com/watch?v=KcZZp05EfVQ)

**ПОДНИМАЕМ СЕРВЕР JAVA+BEDROCK MINECRAFT** by [UncleZak](https://www.youtube.com/watch?v=nrFQ6BlOsLc)

[![YouTube Video](https://img.youtube.com/vi/nrFQ6BlOsLc/0.jpg)](https://www.youtube.com/watch?v=nrFQ6BlOsLc)

**Кроссплатформенный сервер Minecraft | GeyserMC Installation** by [Plutonium](https://www.youtube.com/channel/UCxXjEZgHcjMIYoHoDKOCBOw)

[![YouTube Video](https://img.youtube.com/vi/nOwowRFZE9M/0.jpg)](https://www.youtube.com/watch?v=nOwowRFZE9M)
