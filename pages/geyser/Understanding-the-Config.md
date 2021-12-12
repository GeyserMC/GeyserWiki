---
layout: page
title: Understanding the Config
permalink: /geyser/Understanding-the-Config/
---

This page covers basic information about the Geyser config and what each option does. Though they are explained in the configuration itself, this explains what each option does in more detail.

## Bedrock Section
The options for Geyser on the bedrock-facing end. Mostly contains options for how bedrock edition will see the server.

**`address`**: The address of Geyser on the bedrock end. In most all scenarios, this should not need to be changed.

**`port`**: The port Geyser will run on. By default, it is 19132 in bedrock.

**`clone-remote-port`**: Some hosting services change your Java port everytime you start the server and require the same port to be used for Bedrock/UDP connections. This option makes the Bedrock port the same as the Java port every time you start the server. This option does not do anything on the Standalone version of Geyser.

**`motd1`**: The first line of the MOTD for Geyser.

**`motd2`**: The second line of the MOTD for Geyser. **Please keep in mind, this option will only work if Geyser is shown in the Friends tab!**

**`server-name`**: The world name that is shown in the top-right area of the pause screen.

**`compression-level`**: An number value that represents how much to compress outgoing traffic. Can be any number from -1 to 9; any other value will be replaced with the nearest acceptable value. The higher the number, the more CPU processing that is used but with less bandwidth used.

## Remote Section
Options for the remote (java) server.

**`address`**: The address of the Minecraft: Java Edition server you want to join. By default, this value is `auto`. By keeping it as `auto`, the address, port, and Floodgate support will be automatically configured. In standalone, keeping this as `auto` sets the remote address to 127.0.0.1.

**`port`**: The port of the Minecraft: Java Edition server you specified in the `address` section.

**`auth-type`**: The authentication type of the Minecraft: Java Edition server. Valid options are `online`, `offline`, and `floodgate`.

**Please keep in mind, what you specify in the Geyser `auth-type` option MUST be the same as what the remote server has (with the exception of Geyser being in online mode and remote being in offline mode). You simply cannot join an online mode server without a genuine account. If you want to allow Minecraft: Bedrock Edition accounts to join without a Minecraft: Java Edition account, see the [Floodgate](https://github.com/GeyserMC/Floodgate/wiki/) wiki page.**

**`use-proxy-protocol`**: Whether to enable PROXY/HAProxy protocol or not while connecting to the server. This is useful only when:
- Your server supports PROXY protocol (it probably doesn't)
- You run Velocity or BungeeCord with its respective option enabled.

**`forward-hostname`**: Forwards the hostname/IP address that the Bedrock client used to connect over to the Java server. This is designed to be used for forced hosts on proxies.

## General Options
General Geyser options that are mostly specific to Geyser itself.

**`floodgate-key-file`**: The key file path for Floodgate. Requires that you have [Floodgate](https://github.com/GeyserMC/Floodgate/wiki/) installed and the `auth-type` set to `floodgate`.

**`userAuths`**: A section where you can put the authentication information for your Minecraft: Java Edition account for immediate login when joining Geyser. **It is advised you ONLY use this option if you are running Geyser locally and that ONLY you have access to the config as it requires you put your Minecraft: Java Edition credentials in plain text!**

If your Xbox account name was Notch, your Java email was `foobar2000@gmail.com` and your password was `hunter2`, you would fill this into the config:

```
userAuths:
  Notch: # MCPE/Xbox username
    email: foobar2000@gmail.com
    password: "hunter2"
    microsoft-account: true
```

Put two spaces before the username and four spaces before the email and password.

**`command-suggestions`**: Bedrock clients freeze or crash when opening up the command prompt for the first time with a large amount of command suggestions. This config option disables command suggestions being sent to prevent any freezing. **Since 1.16.100:** command freezing and crashing has been largely reduced; you may no longer need this option disabled.

**`passthrough-motd`**: If the MOTD should be relayed from the remote server. Causes the `motd1` and `motd2` options in the bedrock section to no longer have a use.

**`passthrough-protocol-name`**: Relay the protocol name (e.g. BungeeCord [X.X], Paper 1.X) - this is only really useful when using a custom protocol name! This will also show up on sites like MCSrvStatus. <mcsrvstat.us>

**`passthrough-players`**: If the current and max player counts should be relayed from the remote server.

**`legacy-ping-passthrough`**: If enabled, manually pings the server by impersonating a Minecraft client instead of using the server's API. **This option should *only* be enabled if your MOTD or player count is not accurate,** as it can cause errors especially on BungeeCord. This option does nothing on standalone.

**`ping-passthrough-interval`**: How often the fake Minecraft client should attempt to ping the remote server to update information, in seconds (a setting of 1 will ping the server every second; a setting of 3 will ping the server every three seconds). Only relevant for standalone and legacy ping passthrough. Increase the number if you're getting timeout or BrokenPipe exceptions.

**`max-players`**: The maximum amount of players shown when pinging the server. This does not actually cap how many players can join the Geyser instance at this time. The number will visually increase when pinging if the amount of players is greater, as Bedrock clients will not even attempt to join a full server.

**`debug-mode`**: If debug messages should be printed in console. Useful if you run into an error and need more context.

**`general-thread-pool`**: The amount of threads Geyser will be able to use. Higher is not always better :P.

**`allow-third-party-capes`**: If third party (Optifine, 5zig, LabyMod, etc.) capes should be displayed to the bedrock player.

**`allow-third-party-ears`**: If third party Deadmau5-style ears should be enabled. Currently only supports MinecraftCapes.

**`show-cooldown`**: Bedrock Edition currently does not have Java Edition 1.9+ combat mechanics. In order to get around this, Geyser sends a fake cooldown by sending a title message. This cooldown should not show if 1.8 combat mechanics are in use. The options available for this setting are `false` (no cooldown is sent), `title`/`true` (a cooldown indication is shown in the title), or `actionbar` (a cooldown indication is shown in the action bar). All other options default to `false`.

**`show-coordinates`**: Bedrock Edition has an option to show coordinates in the top-left part of your screen. This setting enables or disables this.

**`emote-offhand-workaround`**: Since Java Edition 1.9, clients have had the ability to switch the item in their mainhand and offhand with a keybind. Bedrock Edition does not have this ability, so this config option makes up for it, If set, when a Bedrock player performs any emote, it will swap the offhand and mainhand items, just like the Java Edition keybind. There are three options this can be set to:
- `disabled` - the default/fallback, which doesn't apply this workaround
- `no-emotes` - emotes will NOT be sent to other Bedrock clients and offhand will be swapped. This effectively disables all emotes from being seen.
- `emotes-and-offhand` - emotes will be sent to Bedrock clients and offhand will be swapped

**`default-locale`**: The default locale to send to players if their locale could not be found. Check [this](https://github.com/GeyserMC/Geyser/wiki/FAQ#what-languages-does-geyser-support) page to find the code corresponding to your language.

**`chunk-caching`**: Cache chunks for each Bedrock player, adds support for additional sounds and fixing movement issues at the expense of slightly more RAM usage. This option is always on for Spigot as we can use the server's API to get block information at no expense. *Geyser does not recommend disabling this option.*

**`cache-images`**: Specify how many days images will be cached to disk to save downloading them from the internet. A value of 0 is disabled. (Default: 0)

**`allow-custom-skulls`**: Allows custom skulls to be displayed when placed. Keeping them enabled may cause a performance decrease on older/weaker devices.

**`above-nether-bedrock-building`**: Bedrock prevents building and displaying blocks above Y127 in the Nether - enabling this config option works around that by changing the Nether dimension ID to the End ID. The main downside to this is that the sky will resemble that of the End sky in the Nether, but ultimately it's the only way for this feature to work.

**`force-resource-packs`**: Force clients to load all resource packs if there are any. If set to false, it allows the user to disconnect from the server if they don't want to download the resource packs.

**`xbox-achievements-enabled`**: Allows Xbox achievements to be unlocked. **This disables certain commands so the Bedrock client can't "cheat" to get them; this cannot be worked around if you want to enable this**. Commands such as /gamemode and /give will not work from Bedrock with this enabled.

## Advanced Options

**`scoreboard-packet-threshold`**: Geyser updates the Scoreboard after every Scoreboard packet, but when Geyser tries to handle a lot of scoreboard packets per second can cause serious lag. This option allows you to specify after how many Scoreboard packets per seconds the Scoreboard updates will be then limited to four updates per second.

**`enable-proxy-connections`**: Allow connections from ProxyPass and Waterdog. See https://www.spigotmc.org/wiki/firewall-guide/ for assistance - use UDP instead of TCP. **This option does not need to be enabled in instances like BungeeCord or Velocity**.

**`mtu`**: https://en.wikipedia.org/wiki/Maximum_transmission_unit - The internet supports a maximum MTU of 1492 but could cause issues with packet fragmentation. 1400 is the default.

**`use-direct-connection`**: Whether to connect directly into the Java server without creating a TCP connection. This should only be disabled if a plugin that interfaces with packets or the network does not work correctly with Geyser. If enabled on plugin versions, the remote address and port sections are ignored. If disabled on plugin versions, expect performance decrease and latency increase.

Default Geyser Config:
```yml
# --------------------------------
# Geyser Configuration File
#
# A bridge between Minecraft: Bedrock Edition and Minecraft: Java Edition.
#
# GitHub: https://github.com/GeyserMC/Geyser
# Discord: https://discord.geysermc.org/
# --------------------------------

bedrock:
  # The IP address that will listen for connections.
  # There is no reason to change this unless you want to limit what IPs can connect to your server.
  address: 0.0.0.0
  # The port that will listen for connections
  port: 19132
  # Some hosting services change your Java port everytime you start the server and require the same port to be used for Bedrock.
  # This option makes the Bedrock port the same as the Java port every time you start the server.
  # This option is for the plugin version only.
  clone-remote-port: false
  # The MOTD that will be broadcasted to Minecraft: Bedrock Edition clients. This is irrelevant if "passthrough-motd" is set to true
  # If either of these are empty, the respective string will default to "Geyser"
  motd1: "Geyser"
  motd2: "Another Geyser server."
  # The Server Name that will be sent to Minecraft: Bedrock Edition clients. This is visible in both the pause menu and the settings menu.
  server-name: "Geyser"
  # How much to compress network traffic to the Bedrock client. The higher the number, the more CPU usage used, but
  # the smaller the bandwidth used. Does not have any effect below -1 or above 9. Set to -1 to disable.
  compression-level: 6
  # Whether to enable PROXY protocol or not for clients. You DO NOT WANT this feature unless you run UDP reverse proxy
  # in front of your Geyser instance.
  enable-proxy-protocol: false
  # A list of allowed PROXY protocol speaking proxy IP addresses/subnets. Only effective when "enable-proxy-protocol" is enabled, and
  # should really only be used when you are not able to use a proper firewall (usually true with shared hosting providers etc.).
  # Keeping this list empty means there is no IP address whitelist.
  # Both IP addresses and subnets are supported.
  #proxy-protocol-whitelisted-ips: [ "127.0.0.1", "172.18.0.0/16" ]
remote:
  # The IP address of the remote (Java Edition) server
  # If it is "auto", for standalone version the remote address will be set to 127.0.0.1,
  # for plugin versions, it is recommended to keep this as "auto" so Geyser will automatically configure address, port, and auth-type.
  address: auto
  # The port of the remote (Java Edition) server
  # For plugin versions, if address has been set to "auto", the port will also follow the server's listening port.
  port: 25565
  # Authentication type. Can be offline, online, or floodgate (see https://github.com/GeyserMC/Geyser/wiki/Floodgate).
  # For plugin versions, it's recommended to keep the `address` field to "auto" so Floodgate support is automatically configured.
  auth-type: online
  # Allow for password-based authentication methods through Geyser. Only useful in online mode.
  # If this is false, users must authenticate to Microsoft using a code provided by Geyser on their desktop.
  allow-password-authentication: true
  # Whether to enable PROXY protocol or not while connecting to the server.
  # This is useful only when:
  # 1) Your server supports PROXY protocol (it probably doesn't)
  # 2) You run Velocity or BungeeCord with the option enabled in the proxy's main config.
  # IF YOU DON'T KNOW WHAT THIS IS, DON'T TOUCH IT!
  use-proxy-protocol: false
  # Forward the hostname that the Bedrock client used to connect over to the Java server
  # This is designed to be used for forced hosts on proxies
  forward-hostname: false

# Allows the overworld world height to be extended from 0 - 255 to -64 - 319. This option cannot be changed during a reload.
# 1.17.0-1.17.2 Bedrock clients cannot connect with this option enabled.
# Performance issues and/or additional bugs may occur for Bedrock clients as this is an experimental toggle on their end.
extended-world-height: false

# Floodgate uses encryption to ensure use from authorised sources.
# This should point to the public key generated by Floodgate (BungeeCord, Spigot or Velocity)
# You can ignore this when not using Floodgate.
# If you're using a plugin version of Floodgate on the same server, the key will automatically be picked up from Floodgate.
floodgate-key-file: key.pem

# The Xbox/Minecraft Bedrock username is the key for the Java server auth-info.
# This allows automatic configuration/login to the remote Java server.
# If you are brave enough to put your Mojang account info into a config file.
# Uncomment the lines below to enable this feature.
#userAuths:
#  BedrockAccountUsername: # Your Minecraft: Bedrock Edition username
#    email: javaccountemail@example.com # Your Minecraft: Java Edition email
#    password: javaccountpassword123 # Your Minecraft: Java Edition password
#    microsoft-account: true # Whether the account is a Mojang or Microsoft account.
#
#  bluerkelp2: 
#    email: not_really_my_email_address_mr_minecrafter53267@gmail.com 
#    password: "this isn't really my password"
#    microsoft-account: false

# Bedrock clients can freeze when opening up the command prompt for the first time if given a lot of commands.
# Disabling this will prevent command suggestions from being sent and solve freezing for Bedrock clients.
command-suggestions: true

# The following three options enable "ping passthrough" - the MOTD, player count and/or protocol name gets retrieved from the Java server.
# Relay the MOTD from the remote server to Bedrock players.
passthrough-motd: false
# Relay the protocol name (e.g. BungeeCord [X.X], Paper 1.X) - only really useful when using a custom protocol name!
# This will also show up on sites like MCSrvStatus. <mcsrvstat.us>
passthrough-protocol-name: false
# Relay the player count and max players from the remote server to Bedrock players.
passthrough-player-counts: false
# Enable LEGACY ping passthrough. There is no need to enable this unless your MOTD or player count does not appear properly.
# This option does nothing on standalone.
legacy-ping-passthrough: false
# How often to ping the remote server, in seconds. Only relevant for standalone or legacy ping passthrough.
# Increase if you are getting BrokenPipe errors.
ping-passthrough-interval: 3

# Whether to forward player ping to the server. While enabling this will allow Bedrock players to have more accurate
# ping, it may also cause players to time out more easily.
forward-player-ping: false

# Maximum amount of players that can connect. This is only visual at this time and does not actually limit player count.
max-players: 100

# If debug messages should be sent through console
debug-mode: false

# Thread pool size
general-thread-pool: 32

# Allow third party capes to be visible. Currently allowing:
# OptiFine capes, LabyMod capes, 5Zig capes and MinecraftCapes
allow-third-party-capes: true

# Allow third party deadmau5 ears to be visible. Currently allowing:
# MinecraftCapes
allow-third-party-ears: false

# Allow a fake cooldown indicator to be sent. Bedrock players do not see a cooldown as they still use 1.8 combat
# Can be title, actionbar or false
show-cooldown: title

# Controls if coordinates are shown to players.
show-coordinates: true

# If set, when a Bedrock player performs any emote, it will swap the offhand and mainhand items, just like the Java Edition keybind
# There are three options this can be set to:
# disabled - the default/fallback, which doesn't apply this workaround
# no-emotes - emotes will NOT be sent to other Bedrock clients and offhand will be swapped. This effectively disables all emotes from being seen.
# emotes-and-offhand - emotes will be sent to Bedrock clients and offhand will be swapped
emote-offhand-workaround: "disabled"

# The default locale if we dont have the one the client requested. Uncomment to not use the default system language.
# default-locale: en_us

# Specify how many days images will be cached to disk to save downloading them from the internet.
# A value of 0 is disabled. (Default: 0)
cache-images: 0

# Allows custom skulls to be displayed. Keeping them enabled may cause a performance decrease on older/weaker devices.
allow-custom-skulls: true

# Whether to add (at this time, only) the furnace minecart as a separate item in the game, which normally does not exist in Bedrock Edition.
# This should only need to be disabled if using a proxy that does not use the "transfer packet" style of server switching.
# If this is disabled, furnace minecart items will be mapped to hopper minecart items.
# This option requires a restart of Geyser in order to change its setting.
add-non-bedrock-items: true

# Bedrock prevents building and displaying blocks above Y127 in the Nether -
# enabling this config option works around that by changing the Nether dimension ID
# to the End ID. The main downside to this is that the sky will resemble that of
# the end sky in the nether, but ultimately it's the only way for this feature to work.
above-bedrock-nether-building: false

# Force clients to load all resource packs if there are any.
# If set to false, it allows the user to connect to the server even if they don't
# want to download the resource packs.
force-resource-packs: true

# Allows Xbox achievements to be unlocked.
# THIS DISABLES ALL COMMANDS FROM SUCCESSFULLY RUNNING FOR BEDROCK IN-GAME, as otherwise Bedrock thinks you are cheating.
xbox-achievements-enabled: false

# bStats is a stat tracker that is entirely anonymous and tracks only basic information
# about Geyser, such as how many people are online, how many servers are using Geyser,
# what OS is being used, etc. You can learn more about bStats here: https://bstats.org/.
# https://bstats.org/plugin/server-implementation/GeyserMC
metrics:
  # If metrics should be enabled
  enabled: true
  # UUID of server, don't change!
  uuid: generateduuid

# ADVANCED OPTIONS - DO NOT TOUCH UNLESS YOU KNOW WHAT YOU ARE DOING!

# Geyser updates the Scoreboard after every Scoreboard packet, but when Geyser tries to handle
# a lot of scoreboard packets per second can cause serious lag.
# This option allows you to specify after how many Scoreboard packets per seconds
# the Scoreboard updates will be limited to four updates per second.
scoreboard-packet-threshold: 20

# Allow connections from ProxyPass and Waterdog.
# See https://www.spigotmc.org/wiki/firewall-guide/ for assistance - use UDP instead of TCP.
enable-proxy-connections: false

# The internet supports a maximum MTU of 1492 but could cause issues with packet fragmentation.
# 1400 is the default.
# mtu: 1400

# Whether to connect directly into the Java server without creating a TCP connection.
# This should only be disabled if a plugin that interfaces with packets or the network does not work correctly with Geyser.
# If enabled on plugin versions, the remote address and port sections are ignored
# If disabled on plugin versions, expect performance decrease and latency increase
use-direct-connection: true

config-version: 4
```