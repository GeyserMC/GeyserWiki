---
title: Current Limitations
---

With Geyser being a protocol translator between two different games with two different codebases, there are a handful of limitations that Geyser is unfortunately unable to handle. Despite Minecraft Bedrock and Java being quite close in comparison, there are some vast differences in many areas.

The following things cannot be fixed without changes to Bedrock or the Java protocol in general. As of now, they are not fixable in Geyser.

- Custom heads in inventories
- Clickable links in chat
- Glowing effect
- Crafting in the 2x2 menu while in creative mode
- Distinguishing between left and right clicks in inventories
- Redstone dot blockstates
- "Can be placed on/destroyed" tag for *some* blocks - for example, different colors of clay/wool that don't exist as separate blocks
- Potion colors implemented using NBT
- Various command arguments for any command that doesn't use the Minecraft Brigadier library
- Anything that relies on tab complete or typing in the chat UI (related to the above) - Bedrock sends no packet that indicates they are in this menu
- Unable to see banner layers past 6
- Movement issues around bamboo due to offset differences between Java and Bedrock. The following plugin works around this, but please read the README before using: https://github.com/Camotoy/GeyserHacks
- Custom anvil recipes
- Heights lower than -64 or higher than 320 in the overworld with extended height enabled, and heights lower than 0 or higher than 256 in other dimensions
- Dolphin's Grace potion effect visuals (effects should still work correctly)
- Invisible item frames
- Blocks (excluding jack-o-lantern) on entity heads (E.G. armor stands, players)

The following changes **are supported** with the [GeyserOptionalPack](/other/geyseroptionalpack/), which is a Bedrock resource pack you can install for additional functionality for features Bedrock does not natively support:
- Custom armor stand poses
- Illusioners
- Hit particles and other miscellaneous particles not natively in Bedrock
- Offhand animations
- Shulker invisibility
- Spectral arrow texture
