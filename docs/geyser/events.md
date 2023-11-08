---
title: Geyser Events
---

# Geyser Events
Geyser has a powerful event system that allows you to listen to events that are sent by Geyser. Events are at the heart of Geyser Extensions, and can be used by plugins and mods as well.

Full documentation can be found [here](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event).

## Event Categories
To use events in a Spigot/Paper plugin or a Fabric mod, you need to register the Geyser Event Bus as a listener and then subscribe to the events you want to listen to.
Extensions can use the @Subscribe annotation.

Events are categorized into the following categories:
- [Bedrock](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/bedrock): Events that are sent for each connecting Bedrock client,
  for example the ClientEmoteEvent that is sent when a Bedrock player uses an emote - or the SessionLoginEvent that is sent when a Bedrock player logged in and is about to join a server.
- [Java](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/java): Events that are sent for the java server, for example
  the ServerDefineCommandsEvent - it is fired when the Java sends the commands to show for Bedrock players.
- [Connection](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/connection): Connection-related events, such as a ping event to return e.g. a custom MOTD.
- [Lifecycle](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle): Events that are sent during Geyser's lifecycle, such as the loading of custom items, resource packs, or Geyser commands.

To see all the events in the respective categories, click on the links above.

## Usage Examples:

Each method that you want to subscribe to an event needs to be annotated with the @Subscribe annotation (from the GeyserMC events package).
```java
@Subscribe
public void onGeyserLoadResourcePacksEvent(GeyserLoadResourcePacksEvent event) {
    logger().info("Loading: " + event.resourcePacks().size() + " resource packs.");
    // you could add a resource pack with event.resourcePacks().add(path-to-pack)
}
```
If you wish to listen to events in a Spigot/Paper plugin or a Fabric mod, you need to register the Geyser Event Bus as a listener first. Just make sure you implement `EventRegistrar` in the main class of your mod or plugin.
Extensions do not need to do that - they are automatically registered, so a simple @Subscribe annotation is enough.

**Fabric mod example:**
```java
public class ExampleMod implements ModInitializer, EventRegistrar {
    public static final Logger LOGGER = LoggerFactory.getLogger("modid");
    
    @Override 
    public void onInitialize() {
        ServerLifecycleEvents.SERVER_STARTING.register((server) -> {
            GeyserApi.api().eventBus().register(this, ExampleMod.class); // register your mod & this class as a listener
        });
        
        LOGGER.info("Geyser is cool!");
    }
    
    // here an event, we subscribe as usual with the @Subscribe annotation
    @Subscribe 
    public void onGeyserPostInitializeEvent(GeyserPostInitializeEvent eventad {
        LOGGER.info("Geyser started!");
    }
}
```
<div class="alert alert-info" role="alert">
    Do note: We cannot directly register the event bus in the mod initializer, since the Geyser API would not be loaded yet.
</div>

Therefore, we register it in the server starting event provided by the Fabric API.

**Paper/Spigot plugin example:**

1. In your plugin.yml, add the following lines:
```yaml
  depend: ["Geyser-Spigot"]
```
This ensures that your plugin loads after Geyser has, so the Geyser API would be available.

2. In your main class, implement the EventRegistrar interface and register the event bus in the onEnable method:
```java
public class ExamplePlugin extends JavaPlugin implements EventRegistrar {
    
    @Override
    public void onEnable(){
        getLogger().info("Registering Geyser event bus!");
        GeyserApi.api().eventBus().register(this, this); // register your plugin & this class as a listener
    }

    // here an event, we subscribe as usual with the @Subscribe annotation
    @Subscribe
    public void onGeyserPostInitializeEvent(GeyserPostInitializeEvent event) {
        getLogger().info("Geyser started!");
    }
}
```
3. If you want to provide your event with a consumer, rather than annotating it, you can also manually subscribe your method to the event bus:
```java
// replace GeyserEvent.class with the event class you want to listen to
GeyserApi.api().eventBus().subscribe(this, GeyserEvent.class, this::yourMethod);
```

## Event Priority
Events can have a priority, which is used to determine the order in which the listeners are called. The default priority is NORMAL.
To (optionally) set the priority of your event listener, you can add the priority to the `@Subscribe` annotation:
```java
@Subscribe(postOrder = PostOrder.EARLY)
```
If you do not specify a priority, the default priority is used. For all available priorities, see
[here](https://github.com/GeyserMC/Events/blob/master/src/main/java/org/geysermc/event/PostOrder.java).