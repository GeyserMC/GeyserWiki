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


## Other Geyser permissions

Besides commands, there are other permissions that are used to guard specific Geyser features.  

{:.table .table-striped .table-bordered}
| Permission | Description |
| `geyser.settings.server` | Allow players to use the [game settings menu](/img/wiki/game_menu.png). (Also requires player to have op.) |

## Floodgate commands and permissions

For Floodgate commands, see [here](/floodgate/commands/).
