---
title: Geyser API
---

### Geyser has an API to extend what is possible and allow to listen to Geyser events. It also allows access to [Cumulus](/floodgate/forms/)
This page outlines how to include the dependency for the Geyser API, and how to use the API.

#### Where can I use the Geyser API?
You could use the Geyser API in:
- a plugin for Spigot/Paper, Velocity, Sponge, BungeeCord, etc.
- a mod for Fabric/Forge
- a Geyser Extension

### Accessing the Geyser API
See [here](/geyser/using-geyser-or-floodgate-as-a-dependency) for how to include the Geyser API in your project.

### Documentation

The Geyser API offers events to subscribe to, or information on whether a player is joining through Geyser, and gives you the ability to e.g. register custom items 
(soon, blocks and entities too).
It can be used easily in Geyser Extensions, see [here](/other/extensions) for details on those.

Quick overview:

Note: To see full, detailed documentation, see the linked sources with javadocs.

#### [GeyserAPI](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/GeyserApi.java):
The GeyserApi interface serves as a central access point to various functionalities provided by the Geyser API, providing methods to e.g. interact with player connections.
It extends the [BaseAPI](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/GeyserApiBase.java) interface, which provides basic information about individual players.

The class GeyserAPI is the base class of the API and you need to use it to access any part of the API.<br>
To access it, you simply type:
```java
GeyserApi.api();
```

After you got the instance, you have access to all the methods.<br>
Use the documentation in the API module to see (and get info about) every single method available.  
Most [API methods have a simple explanation](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/GeyserApi.java).
Since the Geyser API extends the Base API that is shared across Floodgate and Geyser, you can also use the [methods from the Base API](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/GeyserApiBase.java).


#### We'll highlight a few to get you started quickly:
`GeyserApi#isBedrockPlayer(UUID)`<br>
Used to check if the given UUID of an **online** player is a Bedrock player.

`GeyserApi#connectionByUuid(UUID)`<br>
Used to get the [Connection](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/connection/Connection.java) of an **online** player.<br>
This method will return null if the player is not a Bedrock player.

**Note**: You don't need to wait until the Bedrock player is online to use the getPlayer and isBedrockPlayer methods.<br>
You can even use them in the pre-login events.

`GeyserApi#sendForm(UUID, Form(Builder))`<br>
Used to send a form to the Bedrock player with the given UUID.<br>
Click [here](/floodgate/forms/) to get more information about Forms.

`GeyserApi#onlineConnectionsCount()`<br>
Used to get the amount of online Bedrock players.


#### [Events](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event):
The event package contains all the events sent by Geyser. These events can be subscribed to in order to perform actions or register custom items 
programmatically. <br>
To use events in a Spigot/Paper plugin or a Fabric mod, you need to register the Geyser Event Bus as a listener and then subscribe to the events you want to listen to. 
Extensions can use the @Subscribe annotation.

##### Examples:

Each method that you want to subscribe to an event needs to be annotated with the @Subscribe annotation (from the GeyserMC events package).
```java
@Subscribe
public void onGeyserLoadResourcePacksEvent(GeyserLoadResourcePacksEvent event) {
        logger().info("Loading: " + event.resourcePacks().size() + " resource packs.");
        // you could add a resource pack with event.resourcePacks().add(path-to-pack)
}
```
If you wish to listen to events in a Spigot/Paper plugin or a Fabric mod, you need to register the Geyser Event Bus as a listener first.
Extensions do not need to do that - they are automatically registered, so a simple @Subscribe annotation is enough.

Fabric mod example:
```java
public class ExampleMod implements ModInitializer, EventRegistrar {
    // mod logger
	public static final Logger LOGGER = LoggerFactory.getLogger("modid");

	@Override
	public void onInitialize() {
        // we cannot directly register the event bus in the mod initializer, 
        // since the Geyser API would not be loaded yet -
        // so we register it in the server starting event provided by the Fabric API
		ServerLifecycleEvents.SERVER_STARTING.register((server) -> {
			GeyserApi.api().eventBus().register(this, ExampleMod.class);
		});
		LOGGER.info("Example mod started!");
	}

    // here an event, we subscribe as usual with the @Subscribe annotation
	@Subscribe
	public void onGeyserPostInitializeEvent(GeyserPostInitializeEvent eventad {
		LOGGER.info("Geyser started!");
	}
}
```

Spigot/Paper plugin example:

1. In your plugin.yml, add the following lines:
```yaml
  depend: ["Geyser-Spigot"]
```

2. In your main class, implement the EventRegistrar interface and register the event bus in the onEnable method:
```java
public class ExamplePlugin extends JavaPlugin implements EventRegistrar {
    
    @Override
    public void onEnable(){
        getLogger().info("Registering Geyser event bus!");
        GeyserApi.api().eventBus().register(this, ExamplePlugin.class); // register your plugin & this class as a listener
    }

    // here an event, we subscribe as usual with the @Subscribe annotation
    @Subscribe
    public void onGeyserPostInitializeEvent(GeyserPostInitializeEvent eventad {
        LOGGER.info("Geyser started!");
    }
}
```
3. In case the '@Subscribe' annotation didn't work, you can also manually subscribe your method to the event bus:
```java
GeyserApi.api().eventBus().subscribe(this, GeyserEvent.class, this::yourMethod); // replace GeyserEvent.class with the event class you want to listen to
```

#### [Command](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/command)
This package contains classes and interfaces related to commands in Geyser, which allows [Geyser Extensions](/geyser/extensions) to register custom commands.

#### [Entity](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/entity)
The Entity package contains classes and interfaces related to entities in Geyser, like the GeyserPlayerEntity interface, 
which represents a player entity in Geyser. This interface extends the GeyserEntity interface, while providing additional functionality specifically for player entities, 
like currently, showing emotes.

#### [Item](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/item)
The item package contains classes and interfaces related to items in Geyser. You can create custom items and register them using the Geyser API.
See [here](/geyser/custom-items) for detailed information on how to register custom items.

#### [Network](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/network)
The org.geysermc.geyser.api.network package contains basic information about the remote server via the 
[RemoteServer](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/network/RemoteServer.java)
interface, such as the server's IP address and port, and the protocol version of the remote server. Or the auth type.
You can also get the port/IP that Geyser listens to via the [BedrockListener](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/network/BedrockListener.java) interface.

#### [Extension](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/extensions)
This package provides the necessary components to create and manage extensions.
For a more detailed explanation of extensions, see [here](/geyser/extensions).