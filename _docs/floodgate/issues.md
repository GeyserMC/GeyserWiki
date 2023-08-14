---
title: Issues
---

# Known Issues & Caveats
If an issue you're experiencing is not listed here, please consider joining the Geyser [Discord](http://discord.geysermc.org/).

## Running commands
In some instances, like if you have the `username-prefix` set to `*`, you may need to wrap the Bedrock player's username in quotes; for example: `/tp "*BedrockPlayer"`. Setting the prefix to `.` should also fix this.

## If you wish to use IP forwarding, please enable it in your BungeeCord config as well!
It is likely you have enabled `send-floodgate-data` in your Floodgate config but either Floodgate isn't installed on the target server, or your floodgate key isn't the same between the installs of the plugin (please copy them so they all use the same key).

## `java.lang.IllegalStateException: Cannot reply to EncryptionRequestPacket without profile and access token.`

Make sure the server has Floodgate installed and started up correctly. Otherwise, see if the next line fixes your error.

## `javax.crypto.AEADBadTagException: Tag mismatch!`

If Geyser and Floodgate are on the same server, shut down your server, delete the `floodgate` plugin folder, delete any key file in the Geyser folder, and restart your server.
If Geyser and Floodgate are not on the same server and you had to copy the key file, this could also be an error related to uploading through FTP. Using ASCII will not work here, and you need to make sure you're on binary when uploading. We recommend using [WinSCP](https://winscp.net/eng/index.php) if you need to use FTP.

## java.lang.NumberFormatException: For input string: ""

You're trying to log in without an Xbox account. Floodgate requires an Xbox account to authenticate the Bedrock player.

## Geyser-Floodgate:51777 lost connection: Internal Exception: java.lang.NumberFormatException: For input string: "SfqdXv36" (or a similar error)

Set `ip-forwarding` in your BungeeCord to `true`.

## "Please connect through the official Geyser" disconnect message

Ensure that Floodgate and Geyser are both up-to-date.

## Prefix is not changing on the server after changing it in the config.

Between the Paper builds of 1.15.2-355 and 1.16.5-505, there was a bug where Floodgate players who had already connected to the server would not have their prefixed changed. Paper builds 1.16.5-506 and later fix this issue.

Ensure that you removed the `usercache.json` file from the server root directory and restart your server.

## Issues with LuckPerms and prefixes

Set `allow-invalid-usernames` to `true` in LuckPerms' config.

## Failed to verify username! (with Paper)

To completely mitigate this issue, disable `perform-username-validation` in the [unsupported settings of the `config/paper-global.yml` file](https://paper.readthedocs.io/en/latest/server/configuration.html#unsupported_settings) (`paper.yml` in the root server folder on servers below 1.19). Using Floodgate on the backend servers will also mitigate this issue.

## Error with Forge or Fabric Bukkit Hybrid

At this time, there is no way to run Floodgate on servers that mix Forge and Bukkit or Fabric and Bukkit (For example: Magma, Mohist, and Cardboard/Bukkit4Fabric) - most hybrids do not support the complicated procedures we need to do in order to allow Bedrock players to connect (for the technically minded: these server softwares typically don't support NMS). 

If you wish to use Floodgate in combination with hybrid servers, we recommend putting these servers behind a BungeeCord or Velocity proxy, and running Floodgate on the proxy.

## After enabling global linking in offline mode, player data is not synced between Java and Bedrock players.

This occurs in offline mode because the UUID of the Java account linked to the Bedrock account does not match the online mode UUID returned by Floodgate's global linking server.

When using global linking, ensure `online-mode` in `server.properties` is set to `true`. Otherwise, Bedrock players will not be authenticated with the same UUID they receive when playing on Java Edition, resulting in lost progress. This does not occur with local linking.
