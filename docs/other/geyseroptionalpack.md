---
title: GeyserOptionalPack
---
# [Download here](https://ci.opencollab.dev/job/GeyserMC/job/GeyserOptionalPack/job/master/lastSuccessfulBuild/artifact/GeyserOptionalPack.mcpack)

GeyserOptionalPack is a Bedrock resource pack that adds more features to Geyser to bring Bedrock Edition in line with Java Edition. A resource pack allows various features and bug fixes to be implemented in Bedrock, including:

- Armor stand poses and arm/baseplate visibility
- Illusioner texture
- Missing particles, like sweep attack
- Spectral arrow entity texture

A more complete list can be found on the optional pack's [README](https://github.com/GeyserMC/GeyserOptionalPack/blob/master/README.md). Implementation details for those interested in how features are added can be found [here](https://github.com/GeyserMC/GeyserOptionalPack/blob/master/developer_documentation.md).

While recommended, it is not required to install the resource pack on the server - clients can install it themselves. Additionally, if you use a proxy like WaterdogPE, you can install the pack on the server without impacting gameplay on other Bedrock servers.

### Resource pack conflicts

If your current server resource pack contains any [entity definitions](https://github.com/GeyserMC/GeyserOptionalPack/tree/master/entity) that overlap with the optional pack, you will need to merge the definitions for these entities for the optional pack and your own pack to work correctly. Otherwise, the prevailing entity definition will be based on pack application order. This process is best performed manually due to the complexity of entity definition files, though it can also be [scripted](https://gist.github.com/Kas-tle/89c6adc3e7901fbabd1b9f71d902d0a6).
