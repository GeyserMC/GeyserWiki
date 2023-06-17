---
title: Geyser Extensions
---

## Geyser Extensions
Geyser Extensions are the equivalent of "plugins", but specifically for the Geyser platform. This brings the advantage of them being platform-agnostic, meaning that you won't have to worry about supporting all platforms individually. Additionally, they will be, by design, only applied for Bedrock players joining via Geyser.

### What can Geyser Extensions do?
Extensions can fully utilize the Geyser API to add additional functionality to Geyser. See [Geyser API docs](/geyser/geyser-api/) for info on what is currently possible. To name a few examples:
- Register custom items
- Hide commands from being suggested
- Change the MOTD
- Register your own commands
- Listen to events, e.g. the emote event.

The underlying Geyser API is steadily expanding, creating more and more opportunities.

### Which Geyser Extensions exist?
At the moment, not a lot. This is due to Extensions being quite new, and that most stuff can already be done with "normal" plugins/mods.
There is an [official list](https://github.com/GeyserMC/GeyserExtensionList) of available extensions you can check out.

### Installing Extensions
To install an extension, simply put the extension .jar file into Geyser's 'extensions' folder. Then, restart Geyser (or the server Geyser runs on).

### Creating Geyser Extensions
The easiest way to create an extension would be using [this official template](https://github.com/GeyserMC/GeyserExampleExtension/). Simply create a new repository from the template, customize the 'extension.yml' & 'settings.gradle' files, and get started making the extension.

Geyser recognizes extensions when they have a file called 'extension.yml' in the jars 'resources' folder.

extension.yml:
```yml
id: exampleid
name: ExampleExtension
main: org.geyser.extension.exampleid.ExampleExtension
api: 2.1.1
version: 1.0.0
authors: [ExampleAuthor]
```

Explanations for the individual fields:
- id: The id of the extension. Every extension needs to have their unique id - all lowercase letters. If you e.g. register a command for your extension, it will have the id as a prefix: e.g. '/exampleid command'.
- name: The name of the extension.
- main: The main class of your extension.
- api: The Geyser api version your extension targets.
- authors: The author(s) of the extension. To add more than one entry, separate entries with a comma.

The main class, the entrypoint for the extension, needs to [implement the 'Extension' interface provided by Geyser](https://github.com/GeyserMC/GeyserExampleExtension/blob/47614575a69bddecb241676215f3c9f9113db304/src/main/java/org/geyser/extension/exampleid/ExampleExtension.java#L10). 
That way, Geyser recognizes the extension, and gives you access to important methods - such as 'logger()', to get your extensions logger. <br>
To see all the methods provided by that interface, see [here](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/extension/Extension.java).

If you wish to register custom items, global resource packs (or soon, custom blocks and entities), you would need to subscribe to the event using the @Subscribe annotation, 
and register them in the event. You can find an example for custom items [here](/geyser/custom-items/#geyser-extensions).

The bulk of your code would go into the PostInitializeEvent, when Geyser is ready to accept & handle players. See below for an example:

```java
@Subscribe
public void onPostInitialize(GeyserPostInitializeEvent event) {
    // example: show that your extension is loading.
    this.logger().info("Loading example extension...");
}
```

To build your extension, run gradle build task, and install the extension.

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
                .bedrockOnly(true) // only allow bedrock players to execute this command
                .source(CommandSource.class) // set the source of the command
                .aliases(List.of("example", "ex")) // set aliases for the command
                .description("An example command") // set the description of the command
                .executableOnConsole(false) 
                .suggestedOpOnly(false)
                .permission("example.command") // set the permission for the command
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
    event.registerCommand(command);
}
```
If everything went right, you should be able to execute the command in-game by running "/extesionid [command]" - in our case, "/exampleid examplecommand".
Here, it would send "Hello World" to the source that ran the command.
Since we also set aliases, you could also run "/exampleid example" or "/exampleid ex" for the same command.
To provide args, simple run "/exampleid examplecommand [args]" - replacing [args] with the arguments you want to pass to the command.

### Listening to events
See [here](/geyser/geyser-api#events) for documentation. You do not need to register the event listener, Geyser will do that for you.

---

Facing troubles with extensions?
- Make sure you are using the latest version of Geyser - older versions might not have the latest API changes.
- Add debug prints.
- Ask in Geyser's discord server's #development channel for help.