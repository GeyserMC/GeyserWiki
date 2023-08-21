# Floodgate setup with Geyser-Standalone

<div class="alert alert-info" role="alert">
	To be able to use Floodgate authentication, you need to be able to install Floodgate on the server you are connecting to.
</div>

1. Download Floodgate from the [download page](https://geysermc.org/download).
2. Install the Floodgate jar - see the platform instructions for detailed info.
3. Change `auth-type` in Geyser Standalone's config to `floodgate`.
4. Copy the `key.pem` file in the Floodgate config folder to the same directory as Geyser Standalone. 
5. Restart Geyser-Standalone.

<div class="alert alert-warning" role="alert">
	DO NOT DISTRIBUTE THIS KEY TO ANYBODY! This key is what allows for Bedrock accounts to bypass the Java Edition authentication, and if anyone gets ahold of this, they can wreak havoc on your server.
</div>
