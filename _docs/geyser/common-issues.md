---
title: Common Issues
---

Commonly, people may have issues with Geyser not showing up in their server list or run into similar issues. This page contains a few common issues people may encounter that you might have as well as potential fixes for them. If you still can't make it work, join [our Discord](https://discord.gg/geysermc) for support.

# Floodgate
For Floodgate issues see: [Floodgate: Known Issues/Caveats](/floodgate/issues/).

# I can't connect! (Either the server doesn't show up in the friends list or I get "Unable to connect to world")
* If you don't use a reverse proxy such as TCPShield make sure that `enable-proxy-protocol` is set to false.

## If the server doesn't show up in the friends list

* *If using Windows 10, iOS, or Android*: try adding the server to the Servers list in-game.
* *If using Xbox One*: try connecting with [BedrockConnect](/geyser/using-geyser-with-consoles/).
* *If using PS4*: [try using a LAN proxy.](/geyser/using-geyser-with-consoles/#playstation-4)
* *If using Nintendo Switch*: there is currently no way for local servers to show up in the Friends tab, but you can still connect using [BedrockConnect](/geyser/using-geyser-with-consoles/).

*If the Geyser instance is locally hosted:* try using `localhost` or `0.0.0.0` as the IP address.
*If that doesn't work, or your Geyser instance is on another computer in the network*: use your **local** IPv4 address.

## See [here](/geyser/fixing-unable-to-connect-to-world/) for fixing "Unable to Connect to World" with no console errors

### `java.net.BindException: Address already in use: bind` on startup.
This means something (likely another instance of Geyser) is running on the port you have specified in the config. Please make sure you close all applications running on this port. If you don't recall opening anything, usually restarting your computer fixes this.

### [...]` has been compiled by a more recent version of the Java Runtime (class file version 60.0)`

See this link for updating to Java 16: https://paper.readthedocs.io/en/latest/java-update/index.html.

### Hosting provider will not immediately open up UDP.

These steps only apply for the standalone version of Geyser.

This usually has something to do on your host's end. Most commonly, it's because they do not open up ports over the UDP protocol, which is what Minecraft: Bedrock Edition uses, opposed to Minecraft: Java Edition using TCP. One way to get around this (if you're using an online host) is to shut down your server, and when asking for a server jar, select Nukkit (you won't actually be switching to Nukkit). Afterward, open up your FTP file manager and find the Nukkit jar. Then, replace this jar with the server software you're using. Upon starting up the server, it should open up ports over UDP whilst still allowing you to use the server jar you desire.

**PLEASE NOTE:** If your server automatically redownloads jars upon startup, such as with an autoupdate system, this workaround will not work. Please contact your host if this does not work for you as there is nothing we can do.

# Stuck on "Locating Server" with no errors

You may need to update your Java version. If so, update at [Adoptium.net](https://adoptium.net/).

Sometimes this happens in poor-network environments. There is an `mtu` option in the Geyser config; lower this number slowly (in batches of 100), restart each time, and re-test joining.

This option will most likely not help if you are getting "Unable to Connect to World" with no console logs indicating a connection.

# Login Failed

***If you are using a plugin version:*** in your Geyser config, set your remote address to `127.0.0.1`. If that does not work, check your startup log for a message about Docker, and use that address in the remote address

### Cannot reply to EncryptionRequestPacket without profile and access token

There are two causes of this message:

*Floodgate issue*:

This message can occur with a Floodgate setup. Usually, it means that a misconfiguration occurred, or another plugin is conflicting. If you copied the Floodgate key from its folder to the Geyser folder on the same server, this is now unnecessary and you can safely remove the Geyser copy, restart, and try again.

*Server is in Online Mode while Geyser is in Offline Mode*:

If you have your configuration set up like this, put simply, it won't work. If authentication for the Java server is set to online, it is expected Geyser is configured the same way. The server requires a valid Minecraft: Java Edition account, and if you aren't logging into one with Geyser, then you will be unable to join the server. If your configuration is set up properly and you're still getting this issue, it could be that your credentials are invalid.

### Connection Refused: <INSERT IP AND/OR DOMAIN>

Connection Refused usually means that a Java server could not be found on that port, or the server denied access to the connection on a network level. The latter can happen with anti-DDOS plugins such as TCPShield, but otherwise ensure that the server you're trying to connect to is spelled correctly in the config, is up and is port forwarded correctly.

If you're updating from an old build of Geyser, set your remote address to `auto` and try again.

### Floodgate Misconfiguration
See [this page](/floodgate/issues/) for more information.

### Missing profile key. This server requires secure profiles.

See [this page](/geyser/secure-chat/).

### Mojang Resetting Account Credentials
This is unfortunately something we have no control over, and is most likely the case when you're running Geyser as a plugin on a server host or joining a friend far away from your location. If you're running Geyser locally, this should not happen to you, but what we recommend for servers is a plugin we make called [Floodgate](https://github.com/GeyserMC/Floodgate), which allows for Bedrock clients to join your server without needing a Java Edition account. Take a look [here](Floodgate) for more information.

# "Invalid IP address!" from Bedrock
It's currently unknown why this happens even for valid domains. Try using the IPv4 address.

# Bedrock clients freeze when opening up commands for the first time
Disable `command-suggestions` in your Geyser config. This will stop the freezing at the expense of removing command suggestions from Bedrock clients.
If you're a dedicated server admin, you can have a list of commands players should be using. This will remove any unnecessary commands from tab completion as well for Java players. It has other benefits too. Here's a plugin that can just do that: 
[CommandWhitelist](https://www.spigotmc.org/resources/81326/)

# BungeeCord freezes and crashes after bedrock player joins
Make sure you have set `ip-forward` to `true` in your BungeeCord `config.yml` and set `bungeecord` to `true` in each connected server's `spigot.yml`.

# Failed to load locale asset cache: Unrecognized token 'Cannot'
This or anything else related to failing to download a locale file on startup is usually caused by java trying to connect using IPv6 and Mojang only use IPv4, so start Geyser or the server up with this flag `-Djava.net.preferIPv4Stack=true`, EG: `java -Xms1024M -Djava.net.preferIPv4Stack=true -jar Geyser.jar`

# Outdated client! Please use 1.x.x

The server is too new or Geyser is outdated. Make sure you're on the latest Geyser.

# Outdated server! I'm still on 1.x.x

Update the server or ask them to install [ViaVersion](https://viaversion.com/). You can also try [VIAaaS](https://github.com/ViaVersion/VIAaaS) (ViaVersion as a Service).

# Query: Incorrect Magic!

See here: https://www.spigotmc.org/threads/query-incorrect-magic-and-high-cpu-usage.159386/#post-2709057

* If you don't use a reverse proxy such as TCPShield make sure that `enable-proxy-protocol` is set to false.

# Only for BungeeCord with floodgate

If you use floodgate ensure that it is installed on all of your Spigot backend servers as following:

1.  `Bungee: Geyser and Floodgate`
2.  `Lobby: floodgate`
3.  `Server-1: floodgate`
4.  `Server-2: floodgate`

And so on.

* Please also make sure that you have the same `key.pem` and `config.yml` on all of your servers.

If your players can't connect from the lobby to another backend server, check console.
### Plugins that can cause issues
* `HamsterAPI`
