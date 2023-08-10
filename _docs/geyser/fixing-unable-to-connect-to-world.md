---
title: Fixing 'Unable to Connect to World'
---

# Fixing 'Unable to Connect to World' errors
This is by far the most common error people get when attempting to set up Geyser. Here's some steps on how to solve it.
Usually, this error is caused by improper configuration of Geyser, or issues with your network.

<div class="alert alert-warning" role="alert">
	If you are using a Minecraft server hosting provider (e.g. Aternos, or Apex Hosting), you should refer to the hosting provider setup instructions on 
the <a href="/geyser/setup/">setup</a> page. Following these will most likely resolve the issue!
</div>

If you are not using a Minecraft server hosting provider, carry on.

<div class="alert alert-info" role="alert">
	To check if your server is (theoretically) reachable on Bedrock edition, try running the following command in your server console:
    <code>geyser connectiontest &lt;ip&gt;:&lt;port&gt;</code>, and see what it suggests to try.
</div>

### Java Edition players can't connect!

This **should not be** a Geyser problem. Geyser does not modify server behavior. Floodgate does modify the login structure, but only for Bedrock players. 
Contact your hosting provider or look elsewhere for fixing this connection issue.

### Connecting fails after updating Geyser

If this occurred after updating a plugin version of Geyser, ensure that you shut off your server, swapped the Geyser jar, and then started up your server. 
Incase you reset your configuration file, check out the [setup guide](/geyser/setup/) again.

### There are errors in my console!

Please read through the [common issues page](/geyser/common-issues/). If there is another error not documented there, join us on our [Discord](https://discord.geysermc.org).

### Try restarting the server, and the game

Especially on mobile devices, sometimes just restarting Minecraft fixes the issue.

### Is it the server or the client?

Run your Java server IP and Bedrock address here: https://mcsrvstat.us/. It's a great way of determining if the server is reachable in the first place. 
Additionally, check if you can see a connection attempt in the server console. If you can't, it's likely a network issue.

For console players specifically: If only they can't join, while other Bedrock players can, it is likely an issue with their console connecting method.

# General troubleshooting steps

### Ensure you're connecting on the right IP and Port

You should be connecting with the Java server IP and the Bedrock port (set in the Geyser config). If you port forwarded 19132, for example, you should specify port 19132 when connecting from Bedrock.

### I'm using a hosting provider or VPS!

Please read [this page on supported hosting providers](/geyser/supported-hosting-providers/) to see if there are extra configuration steps required for your hosting or server provider.
Some VPS/KVM providers may require further setup, such as OVH, SoYouStart, and Oracle Cloud. Please read this [note](/geyser/portforwarding/#issues-with-specific-vpskvm-providers) for more information.

### Issues using Docker or Pterodactyl
Make sure you assign the port to pterodactyl, and on docker, to the docker compose file. See our [portforwarding](/geyser/portforwarding/#using-docker-or-pterodactyl) page for fixes.

# Port forwarding issues

Your server does need to be port forwarded to allow connections from outside the local network. See [our portforwarding guide](/geyser/portforwarding/) for more information.

### Using TCP in DNS options/port forwarding Instead of UDP

Minecraft: Java Edition uses TCP for connecting; Minecraft: Bedrock Edition uses UDP. Port forwarding your Bedrock Edition port with only TCP will not work, it has to be UDP. Forwarding your Bedrock Edition port with `TCP/UDP` (both protocols) should also work but is not recommended unless Java Edition and Bedrock Edition is sharing the same port.

### Bedrock port is less than 10000

Historically, having a Bedrock port that is a lower number will cause issues. Setting it to 10000 or above seems safe.

### Bedrock players can connect *after* hitting the server on a TCP port (e.g. on Java or a website on the same server), OR only people who also play on Java Edition can join from Geyser

This is likely a firewall issue on your server. Try the following workaround:
Attempt to connect to the Bedrock IP and port through a web browser - for example, `http://test.geysermc.org:19132`. It won't work, but then try connecting through Bedrock, and it should work.

Specific host fixes for OVH/SoYouStart can be found on the [portforwarding](/geyser/portforwarding/) page.

### Changing the `bedrock` `address` in the Geyser config.

Except for a few specific hosting providers, you generally do not need to change this part of the Geyser config. 
However, in rare instances, it does fix issues - for example, when Windows has multiple network adapters, it can help to set the `address` to the IP of the adapter you want to use.

# Using a hosting provider or other location

### Pterodactyl

If you get this error while using the Pterodactyl Panel, try editing the Geyser config and changing the port to something besides `19132` (e.g. `25566`).

### Hosting Geyser on another computer on the same network

### Can only connect from the same computer and not anywhere else

Your firewall is likely in the way. Try adding an exception to Java, or disable the firewall for testing purposes.

# As a last resort for troubleshooting...

Minecraft offers a vanilla Bedrock server [here](https://www.minecraft.net/download/server/bedrock). Downloading, running, and attempting to connect to it may help isolate if the issue is on Geyser's end, or your computer/network's end.

# Using Geyser on the same computer

### Windows 10/11

_This only affects people trying to join Geyser from Windows 10/11 Edition with Geyser hosted on the same computer._

This is an issue caused by Loopback restrictions not being lifted. By default, Microsoft Apps have this restriction on all their apps for local connections. Geyser will attempt to resolve this automatically; however, if you're still having connection problems, you can lift it by typing the following in Windows PowerShell in administrator mode: (it should return `OK.` if it worked)
```powershell
CheckNetIsolation LoopbackExempt -a -n="Microsoft.MinecraftUWP_8wekyb3d8bbwe"
```

Should this not work, you can try this set of steps:

1. Hold down Windows Key + R
2. In the prompt, type `hdwwiz.exe`, then press Enter then Next
3. Install the Hardware Manually
4. Choose Network Adapter > Next > Microsoft > "Microsoft KM-TEST Loopback Adapter" then hit Next until it's done.

