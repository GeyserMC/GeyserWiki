---
title: Geyser and Secure Chat
---

In the 1.19 Java Edition updates, a mechanism for reporting player chat messages to Mojang was implemented. 
Bedrock Edition does not support this reporting mechanism.
If your server or proxy settings require that every player joining supports this mechanism (which may be enabled by default), 
Bedrock players will be unable to chat.

Server administrators can disable this setting, but please note that Java players can join with certain mods that make their messages unreportable.

For a technical explanation of Java's chat signing system, see this [article](https://gist.github.com/kennytv/ed783dd244ca0321bbd882c347892874).

# Disabling

*Vanilla, Spigot/Paper/forks, Fabric*

Set `enforce-secure-profile: false` in [server.properties](https://minecraft.fandom.com/wiki/Server.properties)

*BungeeCord and forks*

Set `enforce_secure_profile: false` in [config.yml](https://www.spigotmc.org/wiki/bungeecord-configuration-guide/)

*Velocity*

Set `force-key-authentication = false` in [velocity.toml](https://github.com/PaperMC/Velocity/blob/dev/3.0.0/proxy/src/main/resources/default-velocity.toml#L19)
