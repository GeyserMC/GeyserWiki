---
layout: page
title: Custom blocks with Geyser
permalink: /geyser/custom-blocks/
---

# Custom blocks with Geyser

To setup custom blocks in geyser, you have to choose how you are going to register your blocks. The easiest is [using a json file](#json-mappings) but you can also [use a Geyser extension](#geyser-extensions).

It should be noted that blocks and their associated components are not very stable. Mojang tends to make changes to these much more often than they do for items. This means that any components Geyser allows you to register are liable to break in future versions of Bedrock.

## Enabling custom blocks

Before beginning, ensure that `add-non-bedrock-items` is set to `true` in your `config.yml` file.

```yml
# Whether to add any items and blocks which normally does not exist in Bedrock Edition.
# This should only need to be disabled if using a proxy that does not use the "transfer packet" style of server switching.
# If this is disabled, furnace minecart items will be mapped to hopper minecart items.
# Geyser's block, item, and skull mappings systems will also be disabled.
# This option requires a restart of Geyser in order to change its setting.
add-non-bedrock-items: true
```

## JSON mappings

The JSON mappings use a similar structure to that of behavior packs registering blocks. The equivalent components are listed in the [Minecraft: Bedrock Edition Creator Documentation](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/blockcomponentslist).

Custom mappings files that register blocks or items should be placed in the `custom_mappings` folder. This folder is created when you start your server. It is located in the same folder as the `Geyser-Standalone.jar` file for standalone and inside your Geyser data folder for a plugin. If you do not have this folder, ensure you are on the latest version of Geyser.

### Example mappings file

```json
{
	"format_version": 1,
	"blocks": {
		"minecraft:granite_wall": {
			"name": "my_block",
			"display_name": "Custom Granite Wall",
			"geometry": "geometry.blocks.my_block_geo",
			"material_instances": {
				"*": {
					"texture": "some_texture",
					"render_method": "alpha_test",
					"face_dimming": true,
					"ambient_occlusion": true
				}
			},
			"tags": ["stone", "wall"],
			"state_overrides": {
				"[east=none,north=none,south=none,up=true,waterlogged=true,west=none]": {
					"geometry": "geometry.blocks.my_other_block_geo",
					"destructible_by_mining": 10,
					"place_air": false
				},
				"[east=none,north=none,south=none,up=false,waterlogged=true,west=tall]": {
					"friction": 0.6,
					"light_emission": 7,
					"light_dampening": 8,
					"rotation": [0, 90, 0]
				},
				"[east=none,north=none,south=low,up=true,waterlogged=true,west=tall]": {
					"placement_filter": {
						"conditions": [{
							"allowed_faces": ["up", "down"],
							"block_filter": [{
									"tags": "!query.any_tag('stone')"
								},
								"minecraft:dirt"
							]
						}]
					}
				}
			}
		}
	}
}
```

### Schema

The following details the schema for the mappings file. Only the `name` field is strictly required. All other fields are optional.

- `format_version`: 
  - Type: `integer`
  - Description: The version of the format of the mappings file.
- `blocks`:
  - Type: `object`
  - Description: An object containing a list of block definitions.
    - `minecraft:some_block`:
      - Type: `object`
      - Description: A block definition to be used to override the specified java block.
        - `name`: 
          - Type: `string`
          - Default: none
          - Description: The name of the custom block.
        - `destructible_by_mining`:
          - Type: `integer`
          - Default: specific to java block
          - Description: The time in seconds to mine the block with base tools.
        - `display_name`: 
          - Type: `string`
          - Default: the name of the custom block
          - Description: The display name of the block.
        - `friction`:
          - Type: `float`
          - Range: `0.0` to `1.0`
          - Default: `0.4`
          - Description: The friction value for entities traversing the block.
        - `geometry`: 
          - Type: `string`
          - Default: none
          - Description: The geometry identifier of the block.
        - `light_emission`:
          - Type: `integer`
          - Range: `0` to `15`
          - Default: `0`
          - Description: The amount of light emitted by the block.
        - `light_dampening`:
          - Type: `integer`
          - Range: `0` to `15`
          - Default: `15`
          - Description: The amount of light dampened by the block as it passes through.
        - `material_instances`:
          - Type: `object`
          - Description: An object containing the material instances for the block.
            - `*`:
              - Type: `object`
              - Description: The default material instance for the block. Other globs or specific instances can be used.
                - `texture`:
                  - Type: `string`
                  - Default: the name of the custom block
                  - Description: The texture resource path of the block.
                - `render_method`:
                  - Type: `string`
                  - Default: `alpha_test`
                  - Description: The render method used for the block.
                - `face_dimming`:
                  - Type: `boolean`
                  - Default: `false`
                  - Description: Whether face dimming is enabled for the block.
                - `ambient_occlusion`:
                  - Type: `boolean`
                  - Default: `false`
                  - Description: Whether ambient occlusion is enabled for the block.
        - `place_air`:
          - Type: `boolean`
          - Default: `true`
          - Description: Whether the block should place air to prevent double placement.
        - `placement_filter`:
          - Type: `object`
          - Description: An object containing the placement filter for the block.
            - `conditions`:
              - Type: `array`
              - Description: An array of conditions that must be met for the block to be placed.
                - `allowed_faces`:
                  - Type: `array`
                  - Description: An array of faces that the block can be placed on.
                    - `items`:
                      - Type: `string`
                      - Range: `up`, `down`, `north`, `south`, `east`, `west`
                      - Description: A face that the block can be placed on.
                - `block_filter`:
                  - Type: `array`
                  - Description: An array of blocks or true molang queries that the block can be placed on.
                    - `items`:
                      - Type: `string`
                      - Description: A block that the block can be placed on.
                      - Type `object`
                        - Description: Holds a true molang query that the block can be placed on.
                            - `tags`:
                            - Type: `array`
                            - Description: A true molang query that the block can be placed on.
        - `tags`:
          - Type: `array`
          - Description: An array of tags associated with the block.
            - `items`: 
              - Type: `string`
        - `unit_cube`:
          - Type: `boolean`
          - Default: none
          - Description: Whether a unit cube is to be used with tessellation.
        - `only_override_states`:
          - Type: `boolean`
          - Default: `false`
          - Description: Whether the block should only override the states specified in `state_overrides`.
        - `state_overrides`:
          - Type: `object`
          - Description: An object containing state overrides for the block.
            - `[property1=value1,property2=value2,...]`:
              - Type: `object`
              - Description: An override for a specific block state. Possible states are listed in Geyser's [Block Mappings](https://raw.githubusercontent.com/GeyserMC/mappings/master/blocks.json)
                - `destructible_by_mining`:
                  - Type: `integer`
                  - Default: specific to java block
                  - Description: The overridden time in seconds to mine the block with base tools.
                - `display_name`: 
                  - Type: `string`
                  - Default: the name of the custom block
                  - Description: The overridden display name of the block.
                - `friction`:
                  - Type: `float`
                  - Range: `0.0` to `1.0`
                  - Default: `0.4`
                  - Description: The overridden friction value for entities traversing the block.
                - `geometry`: 
                  - Type: `string`
                  - Default: none
                  - Description: The overridden geometry identifier of the block.
                - `light_emission`:
                  - Type: `integer`
                  - Range: `0` to `15`
                  - Default: `0`
                  - Description: The overridden amount of light emitted by the block.
                - `light_dampening`:
                  - Type: `integer`
                  - Range: `0` to `15`
                  - Default: `15`
                  - Description: The overridden amount of light dampened by the block as it passes through.
                - `material_instances`:
                  - Type: `object`
                  - Description: An object containing the overridden material instances for the block.
                    - `*`:
                      - Type: `object`
                      - Description: The overridden default material instance for the block. Other globs or specific instances can be used.
                        - `texture`:
                          - Type: `string`
                          - Default: the name of the custom block
                          - Description: The overridden texture resource path of the block.
                        - `render_method`:
                          - Type: `string`
                          - Default: `alpha_test`
                          - Description: The overridden render method used for the block.
                        - `face_dimming`:
                          - Type: `boolean`
                          - Default: `false`
                          - Description: Whether face dimming is enabled for the overridden block.
                        - `ambient_occlusion`:
                          - Type: `boolean`
                          - Default: `false`
                          - Description: Whether ambient occlusion is enabled for the overridden block.
                - `place_air`:
                  - Type: `boolean`
                  - Default: `true`
                  - Description: Whether the block should place air to prevent double placement of the overridden block.
                - `placement_filter`:
                  - Type: `object`
                  - Description: An object containing the placement filter for the overridden block.
                    - `conditions`:
                      - Type: `array`
                      - Description: An array of conditions that must be met for the overridden block to be placed.
                        - `allowed_faces`:
                          - Type: `array`
                          - Description: An array of faces that the overridden block can be placed on.
                            - `items`:
                              - Type: `string`
                              - Range: `up`, `down`, `north`, `south`, `east`, `west`
                              - Description: A face that the block can be placed on.
                        - `block_filter`:
                          - Type: `array`
                          - Description: An array of blocks or true molang queries that the overridden block can be placed on.
                            - `items`:
                              - Type: `string`
                              - Description: A block that the overridden block can be placed on.
                              - Type `object`
                                - Description: Holds a true molang query that the overridden block can be placed on.
                                    - `tags`:
                                    - Type: `array`
                                    - Description: A true molang query that the overridden block can be placed on.
                - `tags`:
                  - Type: `array`
                  - Description: An array of tags associated with the overridden block.
                    - `items`: 
                      - Type: `string`
                - `unit_cube`:
                  - Type: `boolean`
                  - Default: none
                  - Description: Whether a unit cube is to be used with tessellation for the overridden block.

## Geyser extensions

In this example, we will create a custom block that overrides the vanilla redstone dot. This block will be placed on top of a block and will emit a visible redstone signal when powered.

First, create a class that implements Geyser's Extension class:

```java
public class RedstoneDot implements Extension {
    //...
}
```

Next, create a method to register your blocks in the `GeyserDefineCustomBlocksEvent`:

```java
public class RedstoneDot implements Extension {
    @Subscribe
    public void onDefineCustomBlocks(GeyserDefineCustomBlocksEvent event) {
        //...
    }
}
```

Build the `CustomBlockComponents`, `CustomBlockData`, and list of `CustomBlockPermutation` (if needed) for the block:

```java
public class RedstoneDot implements Extension {
    @Subscribe
    public void onDefineCustomBlocks(GeyserDefineCustomBlocksEvent event) {
        BoxComponent selectionBox = new BoxComponent(-5, 0, -5, 10, 1f, 10);

        CustomBlockComponents components = GeyserApi.api().provider(CustomBlockComponents.Builder.class)
                .collisionBox(BoxComponent.EMPTY_BOX)
                .selectionBox(selectionBox)
                .geometry("geometry.amberichu.redstone_dot")
                .destroyTime(0f)
                .lightEmission(0)
                .lightDampening(0)
                .friction(1f)
                .build();

        CustomBlockData redstoneDot = GeyserApi.api().provider(CustomBlockData.Builder.class)
                .name("redstone_dot")
                .intProperty(POWER_PROPERTY, IntStream.range(0, 16).boxed().toList())
                .components(components)
                .permutations(createRedstoneDotPermutations())
                .build();

        // ...
    }

    private List<CustomBlockPermutation> createRedstoneDotPermutations() {
        List<CustomBlockPermutation> permutations = new ArrayList<>();
        for (int power = 0; power < 16; power++) {
            String texture = "amberichu.redstone_dot" + power;
            CustomBlockComponents components = GeyserApi.api().provider(CustomBlockComponents.Builder.class)
                    .materialInstance("up", new MaterialInstance(texture, "alpha_test", false, false))
                    .materialInstance("down", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .materialInstance("north", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .materialInstance("south", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .materialInstance("east", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .materialInstance("west", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .build();
            String condition = String.format("query.block_property('%s') == %d", POWER_PROPERTY, power);
            permutations.add(new CustomBlockPermutation(components, condition));
        }
        return permutations;
    }
}
```

Finally, register the custom block, block state overrides, and block item overrides:

```java
public class RedstoneDot implements Extension {
    @Subscribe
    public void onDefineCustomBlocks(GeyserDefineCustomBlocksEvent event) {
        BoxComponent selectionBox = new BoxComponent(-5, 0, -5, 10, 1f, 10);

        CustomBlockComponents components = GeyserApi.api().provider(CustomBlockComponents.Builder.class)
                .collisionBox(BoxComponent.EMPTY_BOX)
                .selectionBox(selectionBox)
                .geometry("geometry.amberichu.redstone_dot")
                .destroyTime(0f)
                .lightEmission(0)
                .lightDampening(0)
                .friction(1f)
                .build();

        CustomBlockData redstoneDot = GeyserApi.api().provider(CustomBlockData.Builder.class)
                .name("redstone_dot")
                .intProperty(POWER_PROPERTY, IntStream.range(0, 16).boxed().toList())
                .components(components)
                .permutations(createRedstoneDotPermutations())
                .build();
        
        event.registerCustomBlock(redstoneDot);
        event.registerBlockItemOverride("minecraft:redstone_wire", redstoneDot);

        for (int power = 0; power < 16; power++) {
            String javaIdentifier = String.format("minecraft:redstone_wire[east=none,north=none,power=%d,south=none,west=none]", power);
            event.registerBlockStateOverride(javaIdentifier, redstoneDot.blockStateBuilder()
                    .intProperty(POWER_PROPERTY, power)
                    .build());
        }
    }

    private List<CustomBlockPermutation> createRedstoneDotPermutations() {
        List<CustomBlockPermutation> permutations = new ArrayList<>();
        for (int power = 0; power < 16; power++) {
            String texture = "amberichu.redstone_dot" + power;
            CustomBlockComponents components = GeyserApi.api().provider(CustomBlockComponents.Builder.class)
                    .materialInstance("up", new MaterialInstance(texture, "alpha_test", false, false))
                    .materialInstance("down", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .materialInstance("north", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .materialInstance("south", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .materialInstance("east", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .materialInstance("west", new MaterialInstance("amberichu.invisible", "alpha_test", false, false))
                    .build();
            String condition = String.format("query.block_property('%s') == %d", POWER_PROPERTY, power);
            permutations.add(new CustomBlockPermutation(components, condition));
        }
        return permutations;
    }
}
```