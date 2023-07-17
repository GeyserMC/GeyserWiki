
# Paper / Spigot setup with server hosting provider

<div class="alert alert-info" role="alert">
    If your server is not running {{ site.data.versions.java }}, you will need to install <a href="https://www.spigotmc.org/resources/viaversion.19254/">ViaVersion</a>.
    See also our <a href="/geyser/faq/#what-server-versions-does-geyser-support">FAQ article</a> on supported versions.
</div>

1. Select your server hosting provider in the dropdown above.
2. Download the plugin from [the download page](https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/spigot).
3. Place the Geyser-Spigot.jar in the `plugins` folder, and restart the server.
4. Open your Geyser config, located in `/plugins/Geyser-Spigot/config.yml`, and find the following:

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
    **Important**: Other services/plugins that rely on ports with UDP, such as Voice Chats or Query, cannot share the port with Geyser.
 
5. Verify whether connections are possible by running `geyser connectiontest <ip>:<port>` in the console.

<div class="alert alert-info" role="alert">
    To allow Bedrock Edition players to join your server without needing to log in to a paid Java Edition account, you can use <a href="/floodgate/setup/">Floodgate</a>.
</div>
