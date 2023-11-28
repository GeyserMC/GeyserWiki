# Floodgate setup with Geyser-Standalone

<div class="alert alert-info" role="alert">
	To be able to use Floodgate authentication, you need to be able to install Floodgate on the Java server you are connecting to.
</div>

1. Download and install the platform-specific Floodgate jar (e.g. floodgate-spigot, or floodgate-fabric) [here](https://geysermc.org/download). 
See the platform setup instructions for a detailed, platform specific setup guide. Then, continue with the instructions below.
2. Change `auth-type` in Geyser Standalone's config to `floodgate`.
3. Copy the `key.pem` file in the Floodgate config folder to the same directory as Geyser Standalone. 
4. Restart Geyser-Standalone.

<div class="alert alert-warning" role="alert">
	DO NOT DISTRIBUTE THIS KEY TO ANYBODY! This key is what allows for Bedrock accounts to bypass the Java Edition authentication, and if anyone gets ahold of this, they can wreak havoc on your server.
</div>
