
# Proxy setup with server hosting provider

<div class="alert alert-info" role="alert">
    NOTE: <br>
    - Install Geyser <b>only</b> on the proxy server! You can install Floodgate on all servers for better skin support & 
        network-wide Floodgate API availability for other plugins. <br>
    - All servers on the network must accept {{ site.data.versions.java }} Java clients, as Geyser imitates one.  
</div>

1. Select your server hosting provider in the dropdown above.
2. Download the plugin for your proxy software from [the download page](https://geysermc.org/download).
3. Place the Geyser jar in the `plugins` folder, and restart the server.
4. Open your Geyser config, located in `/plugins/Geyser-xyz/config.yml`, and find the following:

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