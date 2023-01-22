---
layout: page
title: Custom skulls with Geyser
permalink: /geyser/custom-skulls/
---

# Custom skulls with Geyser

Unlike Java Edition, Bedrock does not have native support for custom skull items. As a result, any method to display custom skulls with Geyser is, to some extent, a workaround. Geyser has long supported in-world custom skulls via the spawning of player entities. This, however, does not allow for the use of custom skulls in inventories, nor does it allow them to be worn by entities. To resolve this, Geyser now allows for the pre-registration of custom skulls via a config file. Geyser will then use this config file to generate a custom resource pack on start that contains the geometry and textures for the pre-registered custom skulls. To the client, these skulls are blocks. Therefore, they can be held in player inventories. In additional, attachables are defined for each skull block so that it is displayed correctly when worn and held by entities.

To setup custom skulls in geyser, you have to choose how you are going to register your blocks. The easiest is [using custom-skulls.yml](#custom-skulls.yml) but you can also [use a Geyser extension](#geyser-extensions).

## Enabling custom skulls

To enable custom skulls, you must set `add-non-bedrock-items` to `true` in the `config.yml` file. This will enable the generation of the custom resource pack and the translation of custom skulls to custom blocks. You can then add custom skulls to the `custom-skulls.yml` file.

```yaml
# Whether to add any items and blocks which normally does not exist in Bedrock Edition.
# This should only need to be disabled if using a proxy that does not use the "transfer packet" style of server switching.
# If this is disabled, furnace minecart items will be mapped to hopper minecart items.
# Geyser's block, item, and skull mappings systems will also be disabled.
# This option requires a restart of Geyser in order to change its setting.
add-non-bedrock-items: true
```

## custom-skulls.yml

The configuration file `custom-skulls.yml` is present in Geyser's configuration folder and is laid out as follows:

```yml
# --------------------------------
# Geyser Custom Skull Configuration Files
#
# This file is ignored with `add-custom-skull-blocks` disabled.
# See `config.yml` for the main set of configuration values
#
# Custom skulls with the player username, UUID, or texture specified in this file
# will be translated as custom blocks and be displayed in the inventory and on entities.
# --------------------------------

# Java player usernames
# Skins will be updated when Geyser starts and players will have to re-download
# the resource pack if any players had changed their skin.
player-usernames:
  - GeyserMC

# Java player UUIDs
# Skins will be updated when Geyser starts and players will have to re-download
# the resource pack if any players had changed their skin.
player-uuids:
  - 8b8d8e8f-2759-47c6-acb5-5827de8a72b8

# The long string of characters found in the NBT of custom player heads
player-profiles:
  - ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJBbWJlcmljaHUiLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTkwNzkwYzU3ZTE4MWVkMTNhZGVkMTRjNDdlZTJmN2M4ZGUzNTMzZTAxN2JhOTU3YWY3YmRmOWRmMWJkZTk0ZiIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9

# The URL of the skin on Minecraft's skin server
skin-urls:
  - http://textures.minecraft.net/texture/a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f
```

### Player usernames

Skulls can be registered in this section via player usernames. These will be updated when Geyser starts. As a result, they may change if the player's username or skin changes.

### Player UUIDs

Skulls can be registered in this section via player UUIDs. These will be updated when Geyser starts. As a result, they may change if skin changes.

### Player profiles

Skulls can be registered in this section via the texture string found in the NBT of custom player heads. Unless the value is changed manually, these will not be updated when Geyser starts. As a result, they will not change if the player's username or skin changes. The data is simply base64 encoded JSON. For instance, the example given in the config decodes as follows:

```json
{
  "timestamp" : 1657322239833,
  "profileId" : "cddbe520d0434a8ba1cc9fc92fde2bcf",
  "profileName" : "Amberichu",
  "textures" : {
    "SKIN" : {
      "url" : "http://textures.minecraft.net/texture/a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f",
      "metadata" : {
        "model" : "slim"
      }
    }
  }
}
```

If on a paper server, this data can be obtained for a skull by holding the item in hand, and running the command `/paper dumpitem`. This will output the NBT data of the item to chat and console. The texture string is found in the `SkullOwner` tag, under the `Properties` tag, under the `textures` tag, under the `Value` tag. For example:

```log
[05:58:07 INFO]: .KastleFirefox issued server command: /paper dumpitem
[05:58:07 INFO]: minecraft:player_head{display: {Name: '{"text":"Test"}'}, SkullOwner: {Properties: {textures: [{Value: "ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJkYXZjaG9vIiwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2E5MDc5MGM1N2UxODFlZDEzYWRlZDE0YzQ3ZWUyZjdjOGRlMzUzM2UwMTdiYTk1N2FmN2JkZjlkZjFiZGU5NGYiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ"}]}, Id: [I; -229048314, -553040501, -1407961158, 465313087]}}
```

### Skin URLs

Skulls can be registered in this section via the URL of the skin on Minecraft's skin server. Unless the value is changed manually, these will not be updated when Geyser starts. As a result, they will not change if the player's username or skin changes.

This can be obtained by decoding the base64 data obtained from a player profile.

## Geyser extensions

In this example, we will register a custom skull from a player profile. We will use the player profile from the example above.

First, create a class that implements Geyser's Extension class:

```java
public class RegisterCustomSkull implements Extension {
    //...
}
```

Next, create a method to register your blocks in the `GeyserDefineCustomSkullsEvent`:

```java
public class RegisterCustomSkull implements Extension {
    @Subscribe
    public void onDefineCustomSkulls(GeyserDefineCustomSkullsEvent event) {
        //...
    }
}
```

Finally, register your skull in the event. Use the enum SkullTextureType to specify that the value being passed is a player profile:

```java
public class RegisterCustomSkull implements Extension {
    @Subscribe
    public void onDefineCustomSkulls(GeyserDefineCustomSkullsEvent event) {
        String profile = "ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJkYXZjaG9vIiwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2E5MDc5MGM1N2UxODFlZDEzYWRlZDE0YzQ3ZWUyZjdjOGRlMzUzM2UwMTdiYTk1N2FmN2JkZjlkZjFiZGU5NGYiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ"
        event.registerCustomSkull(profile, SkullTextureType.PROFILE);
    }
}
```