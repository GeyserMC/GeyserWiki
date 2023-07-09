---
title: Geyser Extensions
---

## Geyser Extensions
Geyser Extensions are the equivalent of "plugins", but specifically for the Geyser platform. This brings the advantage of them being platform-agnostic, meaning that you won't have to worry about supporting all platforms individually. Additionally, they will be, by design, only applied for Bedrock players joining via Geyser.

### What can Geyser Extensions do?
Extensions can fully utilize the Geyser API to add additional functionality to Geyser. See [Geyser API docs](/geyser/api/) for info on what is currently possible. To name a few examples:
- Register custom items
- Hide commands from being suggested
- Change the MOTD
- Register your own commands
- Listen to events, e.g. the emote event.

The underlying Geyser API is steadily expanding, creating more and more opportunities.

### Which Geyser Extensions exist?
At the moment, extensions are still a new system, so there is only a small list of known extensions for Geyser. However, new extensions are always being created!
There is an [official list](https://github.com/GeyserMC/GeyserExtensionList) of available extensions you can check out. If you have an extension you'd like to see on this list, feel free to open a PR!

### Installing Extensions
To install an extension, simply put the extension .jar file into Geyser's 'extensions' folder. Then, restart Geyser (or the server Geyser runs on).

### Creating Geyser Extensions
The easiest way to create an extension would be utilizing [this official template](https://github.com/GeyserMC/GeyserExampleExtension/). Simply create a new repository from the template, customize the 'extension.yml' & 'settings.gradle' files, and get started making the extension.

Geyser recognizes extensions when they have a file called 'extension.yml' in the jars 'resources' folder.

extension.yml:
```yml
id: exampleid
name: ExampleExtension
main: org.geyser.extension.exampleid.ExampleExtension
api: 1.0.0
version: 1.0.0
authors: [ExampleAuthor]
```

Explanations for the individual fields:
- id: The id of the extension. Every extension needs to have their unique id - all lowercase letters. If you e.g. register a command for your extension, it will have the id as a prefix: e.g. '/exampleid command'.
- name: The name of the extension.
- main: The main class of your extension.
- api: The Base API version your extension targets.
- authors: The author(s) of the extension. To add more than one entry, separate entries with a comma.

### Creating the main class

The main class, the entrypoint for the extension, needs to [implement the 'Extension' interface provided by Geyser](https://github.com/GeyserMC/GeyserExampleExtension/blob/47614575a69bddecb241676215f3c9f9113db304/src/main/java/org/geyser/extension/exampleid/ExampleExtension.java#L10). 
That way, Geyser recognizes the extension, and gives you access to important methods - such as 'logger()', to get your extensions logger. <br>
To see all the methods provided by that interface, see [here](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/extension/Extension.java).

Unlike plugins, extensions do not have a 'onEnable' or 'onDisable' method. Instead, most actions are done in events at different stages during Geyser's lifecycle using events.
Some important ones are:
- `GeyserPreInitializeEvent`: This event is fired when Geyser starts to initialize. If you e.g. need to register extension commands that are configured in your config, 
you would need to load the config here to ensure that your config is ready before the GeyserDefineCommandsEvent is fired. 
- `GeyserPostInitializeEvent`: It is called when Geyser has completed initializing. The bulk of your code should go here, as the GeyserAPI is fully available at this stage.
- `GeyserShutdownEvent`: Called when Geyser is shutting down. You can use this to e.g. save data, or clean up resources.

See below for an example:
```java
@Subscribe
public void onPostInitialize(GeyserPostInitializeEvent event) {
    // example: show that your extension is loading.
    this.logger().info("Loading example extension...");
}
```
If you wish to register custom items, global resource packs (or soon, custom blocks and entities), you will need to subscribe to the event using the @Subscribe annotation,
and register them in the event. You can find an example for custom items [here](/geyser/custom-items/#geyser-extensions). For other events, see [here](/geyser/events) for documentation.

To build your extension, run the Gradle build task, and install the extension.

### Creating commands with Geyser Extensions
To create a command, you would need to use the "Commands" package in the Geyser API. Brief rundown:
- [Command.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/Command.java)
  This interface represents a command in Geyser - to make one, you can use the CommandBuilder. You can register it with the
  [GeyserDefineCommandsEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineCommandsEvent.java)
- [CommandExecutor.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/CommandExecutor.java)
  This interface represents a command execute handler in Geyser, and extends the CommandSource interface.
- [CommandSource.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/CommandSource.java)
  This interface represents a command source in Geyser. It can be used to e.g. send messages to the source, check if the source has permission to execute a command, or get the locale.

```java
Command command = Command.builder(this) // "this" is the extension's main class
        .name("ExampleCommand")
        .bedrockOnly(true)
        .source(CommandSource.class)
        .aliases(List.of("example", "ex"))
        .description("An example command")
        .executableOnConsole(false) 
        .suggestedOpOnly(false)
        .permission("example.command")
        .executor((source, cmd, args) -> {
            // this is the command executor - this is where you would put your code to execute the command.
            // source is the source that executed the command
            // cmd is the command that was executed
            // args are the arguments passed to the command
            source.sendMessage("Hello World");
        })
        .build();
```

To register the command, you would need to subscribe to the GeyserDefineCommandsEvent, and register the command there:
```java
@Subscribe
public void onDefineCommands(GeyserDefineCommandsEvent event) {
    event.register(command);
}
```
If everything went right, you should be able to execute the command in-game by running "/extesionid [command]" - in our case, "/exampleid examplecommand".
Here, it would send "Hello World" to the source that ran the command.
Since we also set aliases, you could also run "/exampleid example" or "/exampleid ex" for the same command.
To provide args, simple run "/exampleid examplecommand [args]" - replacing [args] with the arguments you want to pass to the command.

### Listening to Events
See [here](/geyser/events) for documentation. You do not need to register the event listener, Geyser will do that for you.

---

Facing troubles with extensions?
- Make sure you are using the latest version of Geyser - older versions might not have the latest API changes.
- Add debug prints.
- Ask in the #development channel in the [Geyser Discord server](https://discord.gg/geysermc).