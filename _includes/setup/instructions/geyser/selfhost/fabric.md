
# Fabric setup - self-hosting

<div class="alert alert-warning" role="alert">
	Geyser-Fabric runs <b>only</b> on a {{ site.data.versions.java }} Fabric server. <br>
To use Geyser on an older Fabric server, you can use Geyser on a BungeeCord/Velocity proxy, or Geyser Standalone instead. 
 </div>

1. Download the mod from [the download page](https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/fabric).
2. Place the Geyser-Fabric.jar in the `mods` folder, and restart the server. **You also need [FabricAPI](https://modrinth.com/mod/fabric-api).**
3. Open your Geyser config, located in `/config/Geyser-Fabric/config.yml`, and find the following: 

    ```yaml
    bedrock: 
      # The IP address that will listen for connections. 
      # Generally, you should only uncomment and change this if you want to limit what IPs can connect to your server. 
      #address: 0.0.0.0 

      # The port that will listen for connections. This is the port that Bedrock players will use to connect to your server.
      port: 19132 
    ```
   The vital part is the port. This is the port that Bedrock players will use to connect to your server!
   If you enable `clone-remote-port`, the port will be overridden and the Java port is used.
   Since you are self-hosting, you can choose the port freely - the default port is 19132. <br>
   **Important**: Other services/mods that rely on ports with UDP, such as Voice Chats or Query, cannot share the port with Geyser.
   <br>

4. Connecting to your server
   <br> <br>
   **Connecting locally in the same network** <br>
   On the same device as the server, you can connect using `localhost`, or `127.0.0.1` as the address.
   Do note: When hosting and playing on the same Windows device, you will need the [loopback fix](/geyser/fixing-unable-to-connect-to-world/#Using-Geyser-on-the-same-computer).
   Other devices in the same local network can use your local IPv4 to connect - it starts with `10.` or `192.168.`.
   <br> <br>
   **Connecting from a different network**<br>
   You will need to expose the port Geyser runs on to the Internet if you want players from outside your network to join.
   To achieve that, you have two options: <br>

    - Portforwarding: Open the Geyser port (e.g. 19132) on the UDP protocol in your router/modem, and in the Windows/Linux firewall.
      After doing this, players can connect with your public IPv4 + port to your server. 
      See [here](https://www.lifewire.com/how-to-port-forward-4163829) for a helpful guide. <br>

    - playit.gg: Instead of opening a port (which might not be an option/if you do not want to expose your home ip), you can use
      the playit.gg service to create a tunnel for you to route the traffic through. See our [playit.gg guide](/geyser/playit-gg).
      Ngrok will not work since it is TCP-only. <br>

5. Verify whether connections from other networks are possible by running `geyser connectiontest <ip>:<port>` in the console.

<div class="alert alert-info" role="alert">
    To allow Bedrock Edition players to join your server without needing to log in to a paid Java Edition account, you can use <a href="/floodgate/setup/">Floodgate</a>.
</div>