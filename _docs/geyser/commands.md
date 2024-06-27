---
title: Commands
---

# Commands and Permissions

Geyser features many built-in commands that can be used by players or server owners.

<div class="alert alert-info" role="alert">
   When using BungeeCord and Velocity, you will need to use a permission plugin such as <a href="https://luckperms.net/">LuckPerms</a>
on the proxy server to assign permissions to players. Assigning permissions on the backend servers will not work!
</div>

## Geyser commands and permissions

{:.table .table-striped .table-bordered}
| Command | Permission | Description |
| :--- | :--- | :--- |
| `geyser` <br> Geyser root command | `geyser.command` | The permission required to see/run any Geyser commands. |
| `geyser help` <br> `geyser ?` | `geyser.command.help` | Shows help for all registered commands. |
| `geyser advancements` | `geyser.command.advancements` | Open the Java advancements menu. |
| `geyser dump` | `geyser.command.dump` | Dumps Geyser debug information for bug reports. |
| `geyser list` | `geyser.command.list` | List all players connected through Geyser. |
| `geyser offhand` | `geyser.command.offhand` | Puts an item in your offhand. |
| `geyser reload` | `geyser.command.reload` | Reloads the Geyser configurations. Kicks all players when used! |
| `geyser settings` | `geyser.command.settings` | Opens a settings menu allowing you to modify aspects of the world. |
| `geyser shutdown` <br> `geyser stop` | `geyser.command.shutdown` | Shuts down Geyser.<br>*This command only works on Standalone.* |
| `geyser statistics` | `geyser.command.statistics` | Open the Java statistics menu. |
| `geyser version` | `geyser.command.version` | Shows the current Geyser version and checks for updates. |
| `geyser tooltips` | `geyser.command.tooltips`| Toggle showing Advanced Tooltips (F3 + H on Java) |

## Permissions for Geyser extensions

For the following, `<id>` refers to the extensions' id. 

{:.table .table-striped .table-bordered}
| Command | Permission | Description |
| :--- | :--- | :--- |
| `<id>` <br> Extension root command | `<id>.command` | The permission required to see/run any commands of said Geyser extension. |
| `<id> help` <br> `<id> ?` | `<id>.command.help` | Shows help for all commands registered by this extension. |

## Other Geyser permissions

Besides commands, there are other permissions that are used to guard specific Geyser features.  

{:.table .table-striped .table-bordered}
| Permission | Description |
| `geyser.settings.server` | Allow players to use the [game settings menu](/img/wiki/game_menu.png). (Also requires player to have op.) |
| `geyser.settings.gamerules` | Defines whether a user can alter gamerules in the [game settings menu](/img/wiki/game_menu.png). (Also requires player to have op.) |
| `geyser.update` | Whether this player will receive Geyser update notifications upon joining. |

## Permissions when using Geyser-Standalone/Geyser-ViaProxy
Geyser-ViaProxy and Geyser-Standalone feature their own basic permission handler. To edit base permissions,
open the `permissions.yml` file and add or remove permissions that Geyser players should receive when joining.

You can further customize permission handling by creating a [Geyser extension](/geyser/extensions/) that makes use of Geysers API 
to deal with permission checking.

## Permissions when using Geyser on platforms without permission handlers
The following affects Geyser-BungeeCord, Geyser-Velocity, and Geyser-Fabric. 
These platforms unfortunately do not have built-in permission handlers. Because of that, you will need to grant permissions on those platforms 
manually using permission handlers, such as [LuckPerms](https://luckperms.net/). 

To resolve:
- Install [LuckPerms](https://luckperms.net/) on the platform where you've installed Geyser (BungeeCord/Velocity/Fabric).
- To allow Geyser to automatically register permission defaults, install the [LuckLink](https://github.com/onebeastchris/LuckLink) Geyser extension
by downloading the `LuckLink.jar` and adding it to Geyser's `extensions` folder.
- Restart the server, and permissions should be automatically registered.

Alternatively, you can manually grant the necessary permissions using luckperms. See the table above for all of them.

## Floodgate commands and permissions

For Floodgate commands, see [here](/floodgate/commands/).
