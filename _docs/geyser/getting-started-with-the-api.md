---
title: Getting Started with the API
---

To start, add the Open Collaboration repository to your project:

**Maven**
```xml
<repository>
    <id>opencollab-snapshot</id>
    <url>https://repo.opencollab.dev/main/</url>
</repository>
```
The "main" repository contains both release and snapshot versions.

**Gradle**
```groovy
repositories {
    maven {
        url = uri("https://repo.opencollab.dev/main/")
    }
}
```

## Using Geyser

Add Geyser's API codebase as a dependency:

**Maven**
```xml
<dependency>
    <groupId>org.geysermc.geyser</groupId>
    <artifactId>api</artifactId>
    <version>2.1.2-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

**Gradle**
```groovy
dependencies {
    compileOnly('org.geysermc.geyser:api:2.1.2-SNAPSHOT')
}
```

To get a Geyser player, or check if a player is from Bedrock:

```java
GeyserConnection connection = GeyserApi.api().connectionByUuid(uuid);
```

`connection` can be null if such a player does not exist on Geyser.

`GeyserApi.api()` may be null until after the Geyser plugin enables.

For more information on the Geyser API, see [here](/geyser/api/).

## Using Floodgate
This page has a very simple primer for the Floodgate API. For a full breakdown, see [here](/floodgate/api/).

Add Floodgate's API as a dependency:

**Maven**
```xml
<dependency>
    <groupId>org.geysermc.floodgate</groupId>
    <artifactId>api</artifactId>
    <version>2.2.2-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

**Gradle**
```groovy
dependencies {
    compileOnly('org.geysermc.floodgate:api:2.2.2-SNAPSHOT')
}
```

Get the Floodgate API using:
```java
FloodgateApi api = FloodgateApi.getInstance();
api.isFloodgatePlayer(uuid);
```

For more information on the Floodgate API, see [here](/floodgate/api/).