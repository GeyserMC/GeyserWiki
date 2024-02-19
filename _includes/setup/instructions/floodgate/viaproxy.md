# Floodgate setup with Geyser for ViaProxy

<div class="alert alert-info" role="alert">
	To be able to use Floodgate authentication, you need to be able to install Floodgate on the Java server you are connecting to.
</div>

1. Download and install the platform-specific Floodgate jar (e.g. floodgate-spigot, or floodgate-fabric) [here](https://geysermc.org/download#floodgate). 
See the platform setup instructions for a detailed, platform specific setup guide. Then, continue with the instructions below.
2. Copy the `key.pem` file in the Floodgate config folder to the `/plugins/Geyser/´ directory.
3. Restart ViaProxy.

<div class="alert alert-warning" role="alert">
	DO NOT DISTRIBUTE THIS KEY TO ANYBODY! This key is what allows for Bedrock accounts to bypass the Java Edition authentication, and if anyone gets ahold of this, they can wreak havoc on your server.
</div>
