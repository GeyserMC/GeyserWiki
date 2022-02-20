---
layout: page
title: Geyser-Fabric
permalink: /other/geyser-fabric/
---

# [Download here](https://ci.opencollab.dev/job/GeyserMC/job/Geyser-Fabric/job/java-1.18/lastSuccessfulBuild/artifact/build/libs/Geyser-Fabric-2.0.1-SNAPSHOT.jar)

For the most part, Geyser-Fabric operates the same as other Geyser platforms. There are a couple of exceptions:

- Geyser-Fabric is installed in the `mods` folder, and its config can be found in `config/Geyser-Fabric/config.yml` at the root of your server.
- Any mod that requires clientside installation in order to join the server will not permit Bedrock clients to join.
- Floodgate-Fabric can be found [here](https://github.com/GeyserMC/Floodgate-Fabric)
- You must install the Fabric API mod from [here](https://www.curseforge.com/minecraft/mc-mods/fabric-api).

The source code can be found [here](https://github.com/GeyserMC/Geyser-Fabric).

### permissions.yml

This file located in `config/Geyser-Fabric` controls what commands non-opped players (both Bedrock and Java) are able to run. Uncomment the commands you want any player to run.

### Why a separate repository?

- By maintaining a separate repository, we can support multiple Minecraft versions easier.
- Fabric is built around the Gradle build tool, while Geyser is built around the Maven build tool.
