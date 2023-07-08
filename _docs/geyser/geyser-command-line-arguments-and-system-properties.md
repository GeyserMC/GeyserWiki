---
title: Geyser Command Line Arguments and System Properties
---

# Geyser Command Line Arguments and System Properties
Geyser offers a few command line arguments/system properties to allow you to configure Geyser without editing the config files.
Additionally, you can suppress some warnings that may be printed to the console.

### Configuration system properties
You can set Geyser to automatically bind to a specific address and port by using the following command line arguments. <br>
This is primarily aimed at server hosting providers to automatically configure servers for users.

<div class="alert alert-info" role="alert">
    Note: the Geyser specific properties are prioritized over the plugin properties!
</div>

- ```-DgeyserUdpPort=server``` or ```-DpluginUdpPort=server```
  - ```-1``` means UDP is not supported and will forcibly stop Geyser.
  - ```server``` means to match the port of the TCP server.
  - any other number means to use that specific port

- ```-DgeyserUdpAddress=server``` or ```-DpluginUdpAddress=server```
  - ```server``` means to match the bind address of the TCP server
  - any other string will be used as-is for the bind address.

### Disabling warnings and advanced configuration
You may disable some warnings that may be printed to the console by using the following command line arguments:

<div class="alert alert-danger" role="alert">
    Warning: Disabling Geyser warnings from being logged will not fix the real issue! Only disable them if you know what you are doing. 
</div>

- ```-DGeyser.PrintSecureChatInformation=true```
  - Allows you to disable the warning about secure chat being disabled. 
  Since the warning is sent when the server sends the warning, this option does not do much anymore.
- ```-DGeyser.ShowScoreboardLogs=true```
  - Allows you to disable warnings related to scoreboards, such as "Tried to update score without the existence of its requested objective".
- ```-DGeyser.ShowResourcePackLengthWarning=true```
  - Allows you to disable the warning about a resource pack having too long paths. Disabling this warning will not fix the underlying issue! 
  Console players might not be able to join your server at all if you have a resource pack with paths exceeding the 80 character limit.
- ```-DGeyser.PrintPingsInDebugMode=true```
  - Controls if pings are being logged in debug mode.
- ```-DGeyser.UseDirectAdapters=true```
  - Allows you to disable the usage of NMS adapters. Disabling will result in a performance penalty and should only be used for debugging.
  This is Spigot-only and will not work on other platforms.
- ```-DGeyser.BedrockNetworkThreads=8```
  - Allows you to set the number of threads used for the Bedrock networking. This is not set to a specific number by default, but is instead calculated based on the available resources.

## Geyser-Standalone specific options:

#### `--config [file]`
- **Alias: `-c`**
- Points to an alternative config file to use.

#### `--gui` / `--nogui`
- **Alias: `gui` / `nogui`**:
- Forces GUI or non-GUI usage, depending on context.

### Overriding specific config values
Overriding a standard config option (e.g. `command-suggestions`):

`--command-suggestions=false`

Overriding a nested config option(e.g. the `remote` section with `address`):

`--remote.address=test.geysermc.org`
