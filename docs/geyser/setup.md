---
layout: page
title: Geyser Setup
permalink: /geyser/setup/
---

# Setup

Bedrock clients will join through Geyser and it will handle all the packet translations. There are six different versions of Geyser: Geyser for Spigot (works on derivatives such as Paper), Geyser for BungeeCord (also works on Waterfall), Geyser for Velocity, Geyser for Sponge, Geyser for Fabric (does not support client required mods, and more info about that can be found [here](https://github.com/GeyserMC/Geyser/wiki/Geyser-Fabric)) and Geyser Standalone. The first five versions run as plugins/mods and can be installed directly onto the server. The standalone version can be used in a similar way, except you run it separately.

If you are running a server, it is highly recommended you use one of the plugin versions, and if you want to join a server that does not have Geyser installed, you can run the standalone version. If you use Pterodactyl Panel we have an egg for the standalone version, please see [here](FAQ#can-i-use-geyser-with-pterodactyl-panel) for more information.

If you're still having problems with Geyser not working or giving you an "Unable to connect to world" error, see the [Common Issues](Common-Issues) page.\
For more information, take a look at the [Understanding the Config](Understanding-the-Config) page, and the [FAQ](FAQ) page.\
And if you still have questions, feel free to join the [Discord](https://discord.geysermc.org) if you haven't already.

## Prerequisites

- The server you are connecting to has to support the latest version of Minecraft Java Edition (at this time this is Minecraft 1.18.0)
  The server itself does not have to be the latest version but does have to allow connections. If you're running the server on an older version, you can use the plugin [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/), but do note that only **1.12.2 and any version above is officially supported**.
- The device running Geyser must support Java 16 or later. If you need help installing or updating, please see https://paper.readthedocs.io/en/latest/java-update/index.html. If you're running a version of Paper that does not support Java 16 or later, you can add the flag `-DPaper.ignoreJavaVersion=true` to your startup Java arguments to allow Paper to run on Java 16. You can run Geyser standalone on another device if a server software cannot be updated to use Java 16.
- If you are connecting to an online mode Java server, a paid Java account is required. If you are running the server, you can bypass this requirement for your server with [Floodgate](https://github.com/GeyserMC/Floodgate/wiki).
- Your Bedrock client has to be a supported version - at this time that is Bedrock version 1.17.30 - 1.18.0.
- If you are running the server, you need to have a UDP port opened. See below for more instructions.

## Plugin Setup
1. Download a jar of Geyser from the [build server](https://ci.opencollab.dev/job/Geyser/job/master/) depending on what platform your server runs on. See the [FAQ](FAQ#which-plugin-version-of-geyser-do-i-need) if you're confused about which build to download.
2. Put the Geyser jar file in your plugins folder and start up the server.
3. If you are on a hosting provider, you will likely need to change your Bedrock port in `config.yml`. Information on your hosting provider might be available on the [Supported Hosting Providers](https://github.com/GeyserMC/Geyser/wiki/Supported-Hosting-Providers) page.
4. Restart your server if you edited your config.
5. If not using a hosting provider you will need to use port forwarding to allow people out of your LAN to connect. You want to port forward 19132 UDP, instructions to do that for most routers can be found [here](https://www.lifewire.com/how-to-port-forward-4163829).

If you are trying to join from the same LAN, the server should show up in the friends tab.

### BungeeCord/Velocity Setup
If you are using a BungeeCord, Waterfall, or Velocity proxy, then you only need to install Geyser (and Floodgate, if you desire) on the proxy.

You can install Floodgate (but not Geyser) on the back-end servers to improve skin functionality and to let other plugins access the Floodgate API.  If you do this, then you _must_ make sure that the same `key.pem` file is used between all instances of Floodgate; otherwise, Bedrock clients will not be able to join. Full instructions can be found on the [Floodgate Wiki](https://github.com/GeyserMC/Floodgate/wiki/Setup-and-Usage).

The Bedrock clients, like Java clients, should connect to the proxy server, and should never directly connect to a back-end server.  You don't need to (and shouldn't) port-forward anything for the back-end servers!

## Standalone Setup
Please keep in mind, you need some sort of computer or host to run Geyser Standalone on. Applications such as Termux on Android are capable of running Geyser, but this largely depends on how powerful your Android device is. Please do so at your own risk. Instructions to run Geyser on Termux can be found [here](GeyserSetup#termux-android).

1. Download a jar of Geyser from the [build server](https://ci.opencollab.dev/job/Geyser/job/master/).
2. Create a new folder for Geyser, and drop the jar in there.

### GUI Setup (Recommended)
3. Double-click the jar file and all the necessary files for Geyser will be created.
4. Configure options such as the server you want to join in the Geyser config. A description of all options of the config can be found on the [Understanding the Config](https://github.com/GeyserMC/Geyser/wiki/Understanding-the-Config) page.
5. Stop the current instance of Geyser and re-run it.

### Console Setup
3. Create a new bat or startup script, similar to the one you'd use for a Spigot or Paper server, and take a look at [this](Creating-a-Startup-Script) page for what to put into it.
4. Run the startup script/bat, and all the necessary files for Geyser will be created.
5. Configure options such as the server you want to join in the Geyser config. A description of all options of the config can be found on the [Understanding the Config](https://github.com/GeyserMC/Geyser/wiki/Understanding-the-Config) page.
6. Stop the current instance of Geyser and re-run it.

Once you're done, open up Minecraft: Bedrock Edition and in the **Friends** tab, Geyser should show up there. If it does not show up, just add the Java IPv4 address and Bedrock port.

### Standalone Setup (Geyser and Floodgate are not on the same server)
If you want to offload Geyser's processing you can host Geyser (Standalone) somewhere else and make it redirect to your server.
**Warning:** Do not forget to edit the remote section of your Geyser config.
See the [Floodgate](https://github.com/GeyserMC/Floodgate/wiki/) wiki page for more details.

## Port Forwarding

Unlike Minecraft Java Edition, Bedrock Edition runs on port 19132 on the UDP protocol. When port forwarding, make sure to allocate to 19132 UDP or another UDP port. For many server hosting providers, you will simply need to change your Bedrock listening port (see [here](https://github.com/GeyserMC/Geyser/wiki/Supported-Hosting-Providers) for a list of supported providers).

## Termux (Android)
Please read the disclaimer [here](GeyserSetup#standalone-setup) before continuing.
1. Download and install [Termux](https://termux.com/)
2. Run `pkg install openjdk-17`
3. Run `wget https://ci.opencollab.dev/job/GeyserMC/job/Geyser/job/master/lastSuccessfulBuild/artifact/bootstrap/standalone/target/Geyser.jar`
4. Run `java -jar Geyser.jar`

OR

We have an automated setup script for clean Termux installs, which might not work for all users. If the manual guide above does not work, try this.
Run this to start the download/install:
```
curl https://gist.githubusercontent.com/rtm516/e3e07d6595ee41e05a38b03c0f4d7a80/raw/install.sh | bash
```

## NewTerm 2 (iOS)
**Note:** A jailbreak is required. You can find what jailbreak to use for your device [here](https://docs.google.com/spreadsheets/d/11DABHIIqwYQKj1L83AK9ywk_hYMjEkcaxpIg6phbTf0/edit?usp=sharing).
1. Install [Filza File Manager](http://cydia.saurik.com/package/com.tigisoftware.filza/).
2. Install [NewTerm 2](https://chariz.com/get/newterm).
4. Download jre-16 for iOS and install it using Filza [here](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases/download/v16-openjdk/openjdk-16-jre_16.0.0+git20201217.8383f41-2_iphoneos-arm.deb).
3. Download my modified java commands, and install it using Filza [here](https://cdn.discordapp.com/attachments/558829512633090048/834014323755319306/com.letschill.java_0.1_iphoneos-arm.deb).
4. Open NewTerm 2 and run `wget https://ci.opencollab.dev/job/GeyserMC/job/Geyser/job/master/lastSuccessfulBuild/artifact/bootstrap/standalone/target/Geyser.jar`.
5. Run `java -jar Geyser.jar`.
6. You can find Geyser server running in MCPE!

**Note:**
Due to iOS's environment, if your device has low specs, iOS might end up killing NewTerm 2 while you're playing, stopping the server. There is no fix for that because of how iOS works.

You may encounter some issues. If you do, run `su` then enter the root password (default is `alpine`) for root access. Then, run the server like you normally would, and it should work just fine.

## Setup Videos
Setup tutorials in a variety of languages.

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
