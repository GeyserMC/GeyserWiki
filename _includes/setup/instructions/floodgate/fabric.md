
# Floodgate-Fabric setup

1. Download Floodgate-Fabric from the [modrinth page](https://modrinth.com/mod/floodgate). 
2. Place the Floodgate-Fabric.jar in the `mods` folder, and restart the server. **You also need [FabricAPI](https://modrinth.com/mod/fabric-api) installed.**
3. Change `auth-type` in Geyser's config to `floodgate`.
4. Restart the server.


**Note for Fabric behind a Velocity proxy:**
You will need to configure FabricProxyLite to allow the Fabric server to receive data from Velocity.