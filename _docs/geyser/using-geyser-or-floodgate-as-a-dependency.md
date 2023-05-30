---
title: Using Geyser or Floodgate as a dependency
---

To start, add the Open Collaboration repository to your project:

```xml
<repository>
    <id>opencollab-snapshot-repo</id>
    <url>https://repo.opencollab.dev/main/</url>
</repository>
```

## Using Geyser

Add Geyser's API codebase as a dependency:

```xml
<dependency>
    <groupId>org.geysermc.geyser</groupId>
    <artifactId>api</artifactId>
    <version>2.1.0-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

To get a Geyser player, or check if a player is from Bedrock:

```java
GeyserConnection connection = GeyserApi.api().connectionByUuid(uuid);
```

`connection` can be null if such a player does not exist on Geyser.

`GeyserApi.api()` may be null until after the Geyser plugin enables.


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
