# Floodgate setup on a BungeeCord/Velocity proxy

<div class="alert alert-info" role="alert">
	You only need to install Floodgate on the BungeeCord or Velocity proxy server, unless you want to use the Floodgate API on the backend servers.
    Additionally, it will display Bedrock edition skins properly.
</div>

1. Download Floodgate for your proxy software from the [download page](https://geysermc.org/download). 
2. Place the Floodgate jar in the `plugins` folder, and restart the proxy server.
3. Change `auth-type` in Geyser's config to `floodgate`.
4. Restart the server.

## Installing Floodgate on servers behind the proxy

This is only needed when you want to use the Floodgate API on your backend server(s) behind a proxy.

1. After installing Floodgate on the proxy, install Floodgate on the backend servers (either Floodgate-Spigot, or Floodgate-Fabric).
2. Enable `ip_forward` in your BungeeCord `config.yml` if using BungeeCord. For Velocity, set up [player information forwarding](https://docs.papermc.io/velocity/player-information-forwarding).
3. Set bungeecord to true in your spigot.yml. When using Velocity, see their guide, as they have multiple options that require different setups.
4. Start the proxy server.
5. Edit the Floodgate config on your proxy server and set send-floodgate-data to true.
6. Copy the `key.pem` file in the proxy Floodgate config folder to all backend servers’ Floodgate config folder.
7. Restart the backend servers and proxy server.

<div class="alert alert-warning" role="alert">
    DO NOT DISTRIBUTE THIS KEY TO ANYBODY! This key is what allows for Bedrock accounts to bypass the Java Edition authentication, and if anyone gets ahold of this, they can wreak havoc on your server.
</div>
