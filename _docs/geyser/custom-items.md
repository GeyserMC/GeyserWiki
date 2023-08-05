---
title: Custom items with Geyser
---

# Custom items with Geyser

To setup custom items in geyser, you have to choose how you are going to register your items. The easiest is [using a json file](#json-mappings) but you can also [use a Geyser extension](#geyser-extensions).

## JSON mappings

1. Start your server, and you should have a folder called `custom_mappings` that is created. That would be with the folder of `Geyser.jar` file for standalone and inside your Geyser data folder for a plugin.
2. Create a `.json` file, it can be any name you like and as many files as you like. You don't need to make one file per item. Here is the structure of the file:
```json
{
    "format_version": 1,
    "items": {

    }
}
```
3. Inside the `items` entry, you can add your java item to extend:

```json
"minecraft:JAVA_ITEM": [

]
```
4. Inside this java item, goes an array of all your custom items.

```json
{
    "name": "my_item"
}
```
5. Then, you need to set one or more item options or registrations, they can be stacked, so that all of the specified types need to match.
    * Custom model data: `custom_model_data` (int)
    * Damage predicate: `damage_predicate` (int) This is a fractional value of damage/max damage and not a number between 0 and 1.
    * Unbreakable: `unbreakable` (boolean)
6. You also have some extra modifiers that you can set to further customise your item. **Note that the following modifiers are NOT required.**
    * `display_name` (string) default: item name
    * `icon` (string) default: item name
    * `allow_offhand` (boolean) default: false
    * `texture_size` (int) default: 16
    * `render_offsets` (object) It works as follows. Note that all the sub-objects are optional, except x, y and z. You can have for example only a main hand with a position, and noting else. default: no render offset
    ```json
    "render_offsets": {
        "main_hand": {
            "first_person": {
                "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "rotation": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "scale": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }
            },
            "third_person": {

            }
        },
        "off_hand": {

        }
    }
    ```

## Geyser extensions

### Extending a vanilla item

1. Create your custom item options or registrations, to which you can add any of the following. They can be stacked, so that all of the specified types need to match, but you **do NOT need all of them.**
```java
CustomItemOptions itemOptions = CustomItemOptions.builder()
        .customModelData(1)
        .damagePredicate(1) //This is a fractional value of damage/max damage and not a number between 0 and 1.
        .unbreakable(true)
        .build();
```
2. Create your custom item, and store it somewhere:
```java
CustomItemData data = CustomItemData.builder()
        .name("my_item")
        .customItemOptions(itemOptions)
        .build();
```
3. You have some modifiers that you can set to further customise your item. **Note that the following modifiers are NOT required.**
```java
.displayName("displayName"); //Default: item name
.icon("my_icon"); //Default: item name
.allowOffhand(false); //Default: false
.textureSize(16); //Default: 16
.renderOffsets(new CustomRenderOffsets(...)); //Default: no render offset
```
4. Then, in your pre init event, you can register your item:
```java
@Subscribe
public void onGeyserPreInitializeEvent(GeyserDefineCustomItemsEvent event) {
    event.registerCustomItem("minecraft:JAVA_ITEM", data);
}
```

### Non vanilla (modded) items with Geyser extensions (for example to use with Fabric)

1. Create your item data:
```java
NonVanillaCustomItemData data = NonVanillaCustomItemData.builder()
        .name("my_item")
        .identifier("my_mod:my_item")
        .javaId(1)
```
2. There are many other options you can set to match the behavior that you require for your item. You can see them [here](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/item/custom/NonVanillaCustomItemData.java)
3. Register your item in the GeyserDefineCustomItems event:
```java
@Subscribe
public void onGeyserDefineCustomItemsEvent(GeyserDefineCustomItemsEvent event) {
    event.register(data);
}
```

## Resource pack

1. Setup a basic bedrock resource pack. If you need help, you can find it [here](https://wiki.bedrock.dev/guide/project-setup.html#rp-manifest).
2. Make a `textures` folder.
3. Create `item_texture.json` in the `textures`, and put this in it:

```json
{
  "resource_pack_name": "MY_PACK_NAME_HERE",
  "texture_name": "atlas.items",
  "texture_data": {
    
  }
}
```
4. Inside texture data, you can add your items. The texture name and path must match the name that you set in your mappings.

```json
"my_item": {
    "textures": [
        "textures/items/my_item"
    ]
}
```
5. Then you need to put your textures inside the `textures/items`. Make sure to have it match the texture path that you specified in `item_texture.json`!
