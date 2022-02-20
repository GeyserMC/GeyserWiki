---
layout: page
title: Floodgate API
permalink: /floodgate/api/
---

### Floodgate has an API to extend what is possible and allow servers to get information about the Bedrock client. It also allows other plugins access to [Cumulus](Forms)

This page will contain information about class FloodgateApi.<br>
See the sidebar for more information about other parts of the API.

### Accessing the Floodgate API

Floodgate uses the open collaboration repo. The following example is for Maven, but the same concept applies for Gradle etc.
```xml
<repository>
  <id>opencollab-snapshot</id>
  <url>https://repo.opencollab.dev/maven-snapshots/</url>
</repository>

<dependency>
  <groupId>org.geysermc.floodgate</groupId>
  <artifactId>api</artifactId>
  <version>2.0-SNAPSHOT</version>
  <scope>provided</scope>
</dependency>
```

The Floodgate API has changed in Floodgate 2.0. The most important change is that the API methods are no longer static and instead instance-based, as shown below.

---

The class FloodgateApi is the base class of the API and you need to use it to access any part of the API.<br>
To access it, you simply type:
```java
FloodgateApi.getInstance();
```

After you got the instance, you have access to all the methods.<br>
Use the documentation in the API module to see (and get info about) every single method available.  
Most [API methods have a simple explanation](https://github.com/GeyserMC/Floodgate/tree/master/api/src/main/java/org/geysermc/floodgate/api).

#### We'll highlight a few to get you started quickly:
`FloodgateApi#isFloodgatePlayer(UUID)`<br>
Used to check if the given UUID of an **online** player is a Bedrock player.

`FloodgateApi#getPlayer(UUID)`<br>
Used to get the FloodgatePlayer instance of an **online** player.<br>
Click [here](FloodgatePlayer) to get more information about the FloodgatePlayer class.

**Note**: You don't need to wait until the Bedrock player is online to use the getPlayer and isFloodgatePlayer methods.<br>
You can even use them in the pre-login events.

`FloodgateApi#getPlayerLink()`<br>
Used to get the PlayerLink instance used by Floodgate to check for linked accounts.<br>
Click [here](PlayerLink) to get more information about the PlayerLink class

`FloodgateApi#sendForm(UUID, Form(Builder))`<br>
Used to send a form to the Bedrock player with the given UUID.<br>
Click [here](Forms) to get more information about Forms.

### Using the API on backend servers
In order to successfully use the API on backend Spigot servers when using a proxy, `send-floodgate-data` must be set to `true` on the proxy Floodgate's config, and the `key.pem` file must be identical between all Floodgate instances.
