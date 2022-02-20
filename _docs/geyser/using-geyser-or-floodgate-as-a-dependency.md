---
layout: page
title: Using geyser or floodgate as a dependency
permalink: /geyser/using-geyser-or-floodgate-as-a-dependency/
---

To start, add the Open Collaboration repository to your project:

```xml
<repository>
    <id>opencollab-snapshot-repo</id>
    <url>https://repo.opencollab.dev/maven-snapshots/</url>
    <releases>
        <enabled>false</enabled>
    </releases>
    <snapshots>
        <enabled>true</enabled>
    </snapshots>
</repository>
```

## Using Geyser

*Please note: this information will be updated with a new API at a later point, but the old API structure will continue to work.*

Add Geyser's common codebase as a dependency:

```xml
<dependency>
    <groupId>org.geysermc</groupId>
    <artifactId>core</artifactId>
    <version>2.0.0-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

To get a Geyser player, or check if a player is from Bedrock:

```java
GeyserSession session = GeyserConnector.getInstance().getPlayerByUuid(uuid);
```

`session` can be null if such a player does not exist on Geyser.

`GeyserConnector.getInstance()` will be null until after the Geyser plugin enables.


## Using Floodgate

This page has a very simple primer for the Floodgate API. For a full breakdown, see [here](/floodgate/api/).

Add Floodgate's API as a dependency:
```xml
<dependency>
    <groupId>org.geysermc.floodgate</groupId>
    <artifactId>api</artifactId>
    <version>2.0-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

Get the Floodgate API using:
```java
FloodgateApi api = FloodgateApi.getInstance();
api.isFloodgatePlayer(uuid);
```
