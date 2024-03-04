---
title: Floodgate API
---

Floodgate has an API to extend what is possible and allow servers to get information about the Bedrock client. It also allows other plugins access to [Cumulus](/geyser/forms/)

This page will contain information about class FloodgateApi.  
See the sidebar for more information about other parts of the API.

### Accessing the Floodgate API {#accessing-the-floodgate-api}
See [here](/geyser/getting-started-with-the-api) for how to include the Floodgate API in your project.


The Floodgate API has changed in Floodgate 2.0. The most important change is that the API methods are no longer static and instead instance-based, as shown below.

The class FloodgateApi is the base class of the API and you need to use it to access any part of the API.  
To access it, you simply type:
```java
FloodgateApi.getInstance();
```

After you got the instance, you have access to all the methods.  
Use the documentation in the API module to see (and get info about) every single method available.  
Most [API methods have a simple explanation](https://github.com/GeyserMC/Floodgate/tree/master/api/src/main/java/org/geysermc/floodgate/api).

:::note

To see full, detailed documentation, see the [javadocs](https://repo.opencollab.dev/javadoc/maven-snapshots/org/geysermc/floodgate/api/2.2.2-SNAPSHOT).

:::

#### We'll highlight a few to get you started quickly: {#well-highlight-a-few-to-get-you-started-quickly}
`FloodgateApi#isFloodgatePlayer(UUID)`  
Used to check if the given UUID of an **online** player is a Bedrock player.

`FloodgateApi#getPlayer(UUID)`  
Used to get the FloodgatePlayer instance of an **online** player.  
Click [here](/floodgate/player/) to get more information about the FloodgatePlayer class.

**Note**: You don't need to wait until the Bedrock player is online to use the getPlayer and isFloodgatePlayer methods.  
You can even use them in the pre-login events.

`FloodgateApi#getPlayerLink()`  
Used to get the PlayerLink instance used by Floodgate to check for linked accounts.  
Click [here](/floodgate/linking/) to get more information about the PlayerLink class

`FloodgateApi#sendForm(UUID, Form(Builder))`  
Used to send a form to the Bedrock player with the given UUID.  
Click [here](/geyser/forms/) to get more information about Forms.

### Using the API on backend servers {#using-the-api-on-backend-servers}
In order to successfully use the API on backend Spigot servers when using a proxy, `send-floodgate-data` must be set to `true` on the proxy Floodgate's config, and the `key.pem` file must be identical between all Floodgate instances.
