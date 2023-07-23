
# Fabric setup with server hosting provider

<div class="alert alert-warning" role="alert">
	Geyser-Fabric runs <b>only</b> on a {{ site.data.versions.java }} Fabric server. <br>
To use Geyser on an older Fabric server, you can use Geyser on a BungeeCord/Velocity proxy, or Geyser Standalone instead. 
 </div>

1. Select your server hosting provider in the dropdown above.
2. Download the mod from [the download page](https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/fabric).
3. Place the Geyser-Fabric.jar in the `mods` folder, and restart the server. **You also need [FabricAPI](https://modrinth.com/mod/fabric-api).**
4. Open your Geyser config, located in `/config/Geyser-Fabric/config.yml`, and find the following:

    ```yaml
    bedrock: 
        # The IP address that will listen for connections. 
        # Generally, you should only uncomment and change this if you want to limit what IPs can connect to your server. 
        #address: 0.0.0.0 

        # The port that will listen for connections. This is the port that Bedrock players will use to connect to your server.
        port: 19132 

        # Some hosting services change your Java port everytime you start the server and require the same port to be used for Bedrock. 
        # This option makes the Bedrock port the same as the Java port every time you start the server. 
        # This option is for the plugin version only. 
        clone-remote-port: false 
    ``` 
    The vital part is the port. This is the port that Bedrock players will use to connect to your server. 
    Follow the instructions in the provider selector - change the port, and if necessary, `clone-remote-port` & `address`.
    If `clone-remote-port` is enabled, the bedrock port will be overwritten with the Java port! <br>
    **Important**: Other services/mods that rely on ports with UDP, such as Voice Chats or Query, cannot share the port with Geyser.
 
5. Verify whether connections are possible by running `geyser connectiontest <ip>:<port>` in the console.

<div class="alert alert-info" role="alert">
    To allow Bedrock Edition players to join your server without needing to log in to a paid Java Edition account, you can use <a href="/floodgate/setup/">Floodgate</a>.
</div>