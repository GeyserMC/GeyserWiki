# Geyser-Standalone Setup

<div class="alert alert-info" role="alert">
   You need to have Java 17 or higher installed to run Geyser. To run Geyser Standalone on Android, see the bottom of this page.
</div>

<div class="alert alert-warning" role="alert">
   Geyser-Standalone is NOT a plugin or mod! It is a standalone Java program that you would run separately to your Java Edition server.
</div>

# General Setup & Configuration

1. Download Geyser Standalone from [here](https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/standalone).
2. Create a new folder for Geyser, and drop the jar in there.
3. Start Geyser Standalone:
   - **GUI** (Recommended): <br>
   Double-click the jar file and all the necessary files for Geyser will be created.
   - Or use the **console setup**: <br>
   Create a new bat or startup script, similar to the one you'd use for a Spigot/Paper server, and take a look at [this](/geyser/creating-a-startup-script/) page for what to put into it. <br>
   Run the startup script/bat, and all the necessary files for Geyser will be created.

4. Open your Geyser config (`config.yml`), and find the following:

   ```yaml
   bedrock: 
      # The IP address that will listen for connections. 
      # Generally, you should only uncomment and change this if you want to limit what IPs can connect to your server. 
      #address: 0.0.0.0 

      # The port that will listen for connections. This is the port that Bedrock players will use to connect to your server.
      port: 19132 
   ```
   The `port` is the port Bedrock players will enter to connect to the server. <br>
   Uncommenting and changing `address` here is only needed if you need to limit connections to a specific IP address.
   <br>

   To configure which Java Edition server Geyser Standalone will send players to, find the remote section:
   ```yaml
   remote:
      # The IP address of the remote (Java Edition) server
      # If it is "auto", for standalone version the remote address will be set to 127.0.0.1.
      address: auto

      # The port of the remote (Java Edition) server
      port: 25565
      
      # Authentication type. Can be offline, online, or floodgate (see https://github.com/GeyserMC/Geyser/wiki/Floodgate).
      auth-type: online
   ```
   Here, change `address` to the Java server's address, or to `auto` if the server is on the same machine as Geyser-Standalone. 
Then, change `port` to the Java server's port. If you have set up Floodgate on the remote Java server, you can set auth-type to "floodgate" - otherwise, 
set it to either `online` for an online mode server, or `offline` for an offline mode server. To install and set up Floodgate with a Standalone server, see [here](/floodgate/setup). <br>
   
5. Connecting to your server
   <br> <br>
   **Connecting locally in the same network** <br>
   On the same device as the server, you can connect using `localhost`, or `127.0.0.1` as the address.
   Do note: When hosting and playing on the same Windows device, you will need the [loopback fix](/geyser/fixing-unable-to-connect-to-world/#Using-Geyser-on-the-same-computer).
   Other devices in the same local network can use your local IPv4 to connect - it starts with `10.` or `192.168.`.
   Alternatively, open Minecraft: Bedrock edition, and join the LAN-Server in the **Friends** tab.
   <br> <br>
   **Connecting from a different network**<br>
   You will need to expose the port Geyser runs on to the Internet if you want players from outside your network to join.
   To achieve that, you have two options: <br>

    - Port forwarding: Open the Geyser port (e.g. 19132) on the UDP protocol in your router/modem, and in the Windows/Linux firewall.
      After doing this, players can connect with your public IPv4 + port to your server.
      See [here](/geyser/port-forwarding/) for a helpful guide. <br>

    - playit.gg: Instead of opening a port (which might not be an option/if you do not want to expose your home ip), you can use
      the playit.gg service to create a tunnel for you to route the traffic through. See our [playit.gg guide](/geyser/playit-gg).
      Ngrok will not work since it is TCP-only. <br>

6. Verify whether connections from other networks are possible by running `geyser connectiontest <ip>:<port>` in the console.

# Running Geyser-Standalone on Android

<div class="alert alert-warning" role="alert">
   Applications such as Termux on Android are capable of running Geyser, but this largely depends on how powerful your Android device is. Please do so at your own risk.
</div>

## Termux (Android)
1. Download and install [Termux](https://termux.com/)
2. Run `pkg install openjdk-17`
3. Run `wget https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/standalone`
4. Run `java -jar Geyser-Standalone.jar`

OR

We have an automated setup script for clean Termux installs, which might not work for all users. If the manual guide above does not work, try this.
Run this to start the download/install:
```
curl https://gist.githubusercontent.com/rtm516/e3e07d6595ee41e05a38b03c0f4d7a80/raw/install.sh | bash
```

