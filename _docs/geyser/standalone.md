---
layout: page
title: Geyser Standalone 
permalink: /geyser/standalone/
---

# Setup of Geyser Standalone


## Prerequisites

- The server you are connecting to has to support the latest version of Minecraft: Java Edition (at this time this is Minecraft {{ site.data.versions.java }})
The server itself does not have to be the latest version but does have to allow connections. If you're running the server on an older version, you can use the plugin [ViaVersion](https://www.spigotmc.org/resources/19254/).
- The device running Geyser must support Java 16 or later. If you need help installing or updating, please see [PaperMC's Java update page](https://paper.readthedocs.io/en/latest/java-update/index.html).
- If you are connecting to an online mode Java server, a paid Java account is required. If you are running the server, you can bypass this requirement for your server with [Floodgate](/floodgate/).
- Your Bedrock client has to be a supported version - at this time that is Bedrock version(s) {{ site.data.versions.bedrock }}.
- To allow Geyser Standalone to be reached outside the local network, Unlike Minecraft: Java Edition, Bedrock Edition runs on port 19132 on the UDP protocol. When port forwarding, make sure to allocate to 19132 UDP or another UDP port.
- Currently, Geyser does not support key signing. To disable it (on servers running version 1.19 and higher), follow these instructions: Spigot, Paper, & all forks: Set `enfore-secure-profile: false` in the `server.properties` file. On BungeeCord: Set `enforce_secure_profile: false` in your `config.yml`. Using Velocity: set `force-key-authentication = false` in your `velocity.toml`.


## Standalone Setup
Please keep in mind, you need some sort of computer or host to run Geyser Standalone on. Applications such as Termux on Android are capable of running Geyser, but this largely depends on how powerful your Android device is. Please do so at your own risk. Instructions to run Geyser on Termux can be found [here](/geyser/setup/#termux-android).

1. Download [Geyser Standalone](https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/standalone).
2. Create a new folder for Geyser, and drop the jar in there.

### GUI Setup (Recommended)
3. Double-click the jar file and all the necessary files for Geyser will be created.
4. Configure options such as the server you want to join in the Geyser config. A description of all options of the config can be found on the [Understanding the Config](/geyser/understanding-the-config/) page.
5. Stop the current instance of Geyser and re-run it.

### Console Setup
3. Create a new bat or startup script, similar to the one you'd use for a Spigot or Paper server, and take a look at [this](/geyser/creating-a-startup-script/) page for what to put into it.
4. Run the startup script/bat, and all the necessary files for Geyser will be created.
5. Configure options such as the server you want to join in the Geyser config. A description of all options of the config can be found on the [Understanding the Config](/geyser/understanding-the-config/) page.
6. Stop the current instance of Geyser and re-run it.

Once you're done, open up Minecraft: Bedrock Edition and in the **Friends** tab, Geyser should show up there. If it does not show up, just add the Java IPv4 address and Bedrock port.

### Standalone Setup (Geyser and Floodgate are not on the same server)
If you want to offload Geyser's processing you can host Geyser (Standalone) somewhere else and make it redirect to your server.
**Warning:** Do not forget to edit the remote section of your Geyser config.
See the [Floodgate](/floodgate/) wiki page for more details.

## Port Forwarding

Unlike Minecraft: Java Edition, Bedrock Edition runs on port 19132 on the UDP protocol. When port forwarding, make sure to allocate to 19132 UDP or another UDP port. For many server hosting providers, you will simply need to change your Bedrock listening port (see [here](/geyser/supported-hosting-providers/) for a list of supported providers).

## Termux (Android)
Please read the disclaimer [here](/geyser/setup/#standalone-setup) before continuing.
1. Download and install [Termux](https://termux.com/)
2. Run `pkg install openjdk-17`
3. Run `wget https://ci.opencollab.dev/job/GeyserMC/job/Geyser/job/master/lastSuccessfulBuild/artifact/bootstrap/standalone/build/libs/Geyser-Standalone.jar`
4. Run `java -jar Geyser-Standalone.jar`

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
4. Download PojavLauncher's Java 16 JRE for iOS and install it using Filza [here](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases/download/v16-openjdk/openjdk-16-jre_16.0.0+git20201217.8383f41-2_iphoneos-arm.deb).
3. Download this package containing modified java commands, and install it using Filza [here](https://cdn.discordapp.com/attachments/558829512633090048/834014323755319306/com.letschill.java_0.1_iphoneos-arm.deb) (Note: Not an official GeyserMC project, install at your own risk).
4. Open NewTerm 2 and run `wget https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/standalone`
5. Run `java -jar Geyser-Standalone.jar`.
6. Geyser should show up in the Friends tab inside Minecraft.

**Note:**
Due to the iOS environment, if your device has low specs, iOS might end up killing NewTerm 2 while you're playing, stopping the server. There is no fix for that because of how iOS works.
