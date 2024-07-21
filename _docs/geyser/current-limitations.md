---
title: Current Limitations
---

With Geyser being a protocol translator between two different games with two different codebases, there are a handful of limitations that Geyser is unfortunately unable to handle. Despite Minecraft Bedrock and Java being quite close in comparison, there are some vast differences in many areas.

The following things cannot be fixed without changes to Bedrock or the Java protocol in general. As of now, they are not fixable in Geyser.

- Custom heads in inventories
- Clickable links in chat
- Glowing effect
- Crafting in the 2x2 menu while in creative mode - with the GeyserOptionalPack, this grid is hidden as it does not exist on Java.
- Distinguishing between left and right clicks in inventories
- Redstone dot blockstates
- "Can be placed on/destroyed" tag for *some* blocks - for example, different slab variants that aren't yet split up into separate blocks.
- Potion colors implemented using NBT
- Various command arguments for any command that doesn't use the Minecraft Brigadier library
- Anything that relies on tab complete or typing in the chat UI (related to the above) - Bedrock sends no packet that indicates they are in this menu
- Unable to see banner layers past 6
- Movement issues around bamboo due to offset differences between Java and Bedrock: [Hurricane](/other/hurricane) can work around it.
- Custom anvil recipes or custom smithing table ingredients/patterns ([GeyserMC/Geyser#4706](https://github.com/GeyserMC/Geyser/issues/4706))
- Heights lower than -64 or higher than 320 in the overworld with extended height enabled, and heights lower than 0 or higher than 256 in other dimensions ([GeyserMC/Geyser#3804](https://github.com/GeyserMC/Geyser/issues/3804))
- Dolphin's Grace potion effect visuals (effects should still work correctly)
- Invisible item frames
- Blocks (excluding jack-o-lantern) on entity heads (E.G. armor stands, players)
- Some block state changes are controlled client side, and are not influenced by the debug stick - fences for example. ([GeyserMC/Geyser#3125](https://github.com/GeyserMC/Geyser/issues/3125))
- Custom beacon base blocks ([GeyserMC/Geyser#2301](https://github.com/GeyserMC/Geyser/issues/2301)) - these are hardcoded on Bedrock edition.
- Climbable blocks changed by datapacks ([GeyserMC/Geyser#4051](https://github.com/GeyserMC/Geyser/issues/4051))
- Custom enchantments/sweeping edge ([GeyserMC/Geyser#3121](https://github.com/GeyserMC/Geyser/issues/3121))
- "Bordure Indented" pattern shape not appearing on the Bedrock side in the loom ([GeyserMC/Geyser#3183](https://github.com/GeyserMC/Geyser/issues/3183))
- Gliding without elytras/custom elytras (https://github.com/GeyserMC/Geyser/issues/3255, https://github.com/GeyserMC/Geyser/issues/3299)
- Custom furnace cook times ([GeyserMC/Geyser#4104](https://github.com/GeyserMC/Geyser/issues/4104))
- Maximum sign length different on Java/Bedrock edition ([GeyserMC/Geyser#4130](https://github.com/GeyserMC/Geyser/issues/4130))

The following changes **are supported** with the [GeyserOptionalPack](/other/geyseroptionalpack/), which is a Bedrock resource pack you can install for additional functionality for features Bedrock does not natively support:
- Custom armor stand poses
- Illusioners
- Hit particles and other miscellaneous particles not natively in Bedrock
- Offhand animations
- Shulker invisibility
- Spectral arrow texture
- Scoreboard width that matches Java
- Inventory UI changes to match Java
