---
title: Developer Guide
---

## Compiling
1. Clone the repo to your computer (EG: `git clone https://github.com/GeyserMC/Geyser.git`)
2. [Install Maven](https://maven.apache.org/install.html)
3. Navigate to the Geyser root directory and run `git submodule update --init --recursive`. This downloads all the needed submodules for Geyser and is a crucial step in this process.
4. Run `mvn clean install` and locate to the `bootstrap`, then your desired Geyser version, then `target` folder.

## Project layout
* `bootstrap` is where we hold the specific platform code. So if you're porting Geyser to a new platform, or working with platform-specific code, you likely want to be in here.
* `core` is where connections are handled and the data conversion is done. The majority of Geyser work is held here.

# Compiler Tools

## Lombok

*Note that the latest version of IntelliJ IDEA does not require additional setup in order to develop with Geyser.*

If you're using an IDE for editing any of the GeyserMC projects you will most likely need to install the Project Lombok plugin as it is used to generate a bunch of handy functions. You can edit without it but you may get missing functions and or other issues displayed in your IDE. Please see the IDE section on their site for the supported plugins and install methods [https://projectlombok.org/setup/overview](https://projectlombok.org/setup/overview).

# Protocol Information

## GopherTunnel
[GopherTunnel](https://github.com/Sandertv/gophertunnel/tree/master/minecraft/protocol/packet) is a library for Bedrock Edition written in Go. The source code is an excellent documentation for the Bedrock protocol.

## wiki.vg
For a full rundown of the Java Edition protocol, see [here](https://wiki.vg/Protocol).

## wiki.vg (Bedrock)
The Bedrock Edition protocol is documented [here](https://wiki.vg/Bedrock_Protocol), but it's currently incomplete so only use it as a reference.

# Programs

## debuginfo-be
[debuginfo-be](https://github.com/Heath123/debuginfo-be) is a Spigot plugin that displays an overlay to Geyser clients with useful debug information, similar to the F3 screen in Java Edition.

## pakkit
pakkit is a GUI-based tool for intercepting packets between a server and client developed by Geyser contributor [circuit10/Heath123](https://github.com/Heath123/) built using Electron. It works for both Java Edition (using node-minecraft-protocol) and Bedrock (as a GUI wrapper for ProxyPass adding extra features). It supports features such as viewing packet data in JSON format, Edit and Resend and a hex view for raw packet data. You can download it from [here](https://github.com/Heath123/pakkit/releases/). It's currently WIP, so expect bugs.

## Gadget
Gadget is a fabric client mod to inspect & log, amongst other things, packets sent between a java server and a java client. It can be useful to determine java behavior.
You can download it from [here](https://modrinth.com/mod/gadget).

## ProxyPass
ProxyPass is a tool for intercepting packets between a Bedrock server and client developed by the Cloudburst team. It can be found [here](https://github.com/NukkitX/ProxyPass) and the vanilla Bedrock server can be found [here](https://www.minecraft.net/en-us/download/server/bedrock/).

## MCC Toolchest
MCC Toolchest is a tool for viewing and editing NBT data for Bedrock edition, this allows you to see data as it is stored in Bedrock. You can download it from [here](http://mcctoolchest.com/).

## NBTExplorer
NBTExplorer is a tool for viewing and editing NBT data for Java edition, this allows you to see data as it is stored in Java edition. You can download it from [here](https://github.com/jaquadro/NBTExplorer/releases).

## Windows 10 Multi-Version Launcher
The Windows 10 Multi-Version launcher allows you to switch between release and beta versions of Minecraft Bedrock. Its GitHub repository can be viewed [here](https://github.com/MCMrARM/mc-w10-version-launcher/).
Alternatively, use FoxyNoTail's Version Switcher, found [here](https://foxynotail.com/software/mcbe-switcher).
Note: To apply the [loopback fix](https://wiki.geysermc.org/geyser/fixing-unable-to-connect-to-world/#windows-1011) for Minecraft Preview, use the following loopback restriction lifting command with the different app ID: `CheckNetIsolation LoopbackExempt -a -n="Microsoft.MinecraftWindowsBeta_8wekyb3d8bbwe"`