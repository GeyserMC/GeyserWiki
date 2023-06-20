---
title: Geyser Command Line Arguments and System Properties
---

# Geyser Command Line Arguments and System Properties
Geyser offers a few command line arguments/system properties to allow you to configure Geyser without editing the config files.
Additionally, you can suppress some warnings that may be printed to the console.


### Configuration
You can set Geyser to bind to a specific address and port by using the following command line arguments. <br>
**Note: the Geyser specific properties are prioritized over the plugin properties!**

- ```-DgeyserUdpPort=server``` or ```-DpluginUdpPort=server```
  - ```-1``` means UDP is not supported and will forcibly stop Geyser.
  - ```server``` means to match the port of the TCP server.
  - any other number means to use that specific port

- ```-DgeyserUdpAddress=server``` or ```-DpluginUdpAddress=server```
  - ```server``` means to match the bind address of the TCP server
  - any other string will be used as-is for the bind address.

### Disabling warnings and Advanced configuration
You may disable some warnings that may be printed to the console by using the following command line arguments:
<h3>Warning: Disabling Geyser warnings from being logged will not fix the root issue! Only do this if you know what you are doing. </h3>

- ```-DGeyser.PrintSecureChatInformation=true```
  - Allows you to disable the warning about secure chat being disabled.
- ```-DGeyser.ShowScoreboardLogs=true```
  - Allows you to disable warnings related to scoreboards, such as "Tried to update score without the existence of its requested objective".
- ```-DGeyser.ShowResourcePackLengthWarning=true```
  - Allows you to disable the warning about a resource pack having too long paths. Disabling this warning will not fix the underlying issue! 
  Console players might not be able to join your server at all if you have a resource pack with paths exceeding the 80 character limit.
- ```-DGeyser.PrintPingsInDebugMode=true```
  - Allows you to disable the warning about pings being printed to the console when debug mode is enabled.
- ```-DGeyser.UseDirectAdapters=true```
  - Allows you to disable the usage of NMS adapters.
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
