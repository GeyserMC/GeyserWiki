---
layout: page
title: Fixing 'Unable to Connect to World'
permalink: /geyser/fixing-unable-to-connect-to-world/
---

*Unable to Connect to World* is by far the most common error people get when attempting to set up Geyser. Here's some steps on how to solve that.

**_If you are using a hosting provider: Many providers and remote hostings have additional steps you have to perform in order to be supported; see [Supporting Hosting Providers](https://wiki.geysermc.org/geyser/supported-hosting-providers/). If you're self-hosting from home, you don't need to worry about this._**

# Before we start...

## ...Java players can't connect either!

This **should not be** a Geyser problem. Geyser does not modify server behavior. Floodgate does modify the login structure but only for Bedrock players. Contact your hosting provider or look elsewhere for fixing this connection issue.

## ...I just updated, and now it doesn't work!

If this occurred after updating a plugin version of Geyser, ensure that you shut off your server, swapped the Geyser jar, and then started up your server.

## ...There are errors in my console!

Please read through the [common issues page](https://wiki.geysermc.org/geyser/common-issues/). If there is another error not documented there, join us on our [Discord](https://discord.geysermc.org).

## ...Have you tried restarting?

Especially on mobile devices, sometimes just restarting Minecraft fixes the issue.

# Is it the server or the client?

Run your Java server IP and Bedrock address here: https://mcsrvstat.us/. It's a great way of determining if the server is reachable in the first place.

# General troubleshooting steps

## Ensure you're connecting on the right IP

You should be connecting with the Java server IP and the Bedrock port. If you port forwarded 19132, for example, you should specify port 19132 when connecting from Bedrock.

## I'm using a hosting provider or VPS!

Please read [this page on supported hosting providers](https://wiki.geysermc.org/geyser/supported-hosting-providers/) to see if there are extra configuration steps required for your hosting or server provider.

## Port forwarding

Your server does need to be port forwarded. Generally, you can follow any Minecraft: Java Edition port forwarding guide; however, you need to replace any mention of TCP with UDP and, by default, any mention of 25565 with 19132.

## Using TCP in DNS options/port forwarding Instead of UDP

Minecraft: Java Edition uses TCP for connecting; Minecraft: Bedrock Edition uses UDP. Port forwarding your Bedrock Edition port with only TCP will not work, it has to be UDP. Forwarding your Bedrock Edition port with `TCP/UDP` (both protocols) should also work but is not recommended unless Java Edition and Bedrock Edition is sharing the same port.

## Bedrock port is less than 10000

Historically, having a Bedrock port that is a lower number will cause issues. Setting it to 10000 or above seems safe.

## Bedrock players can connect *after* hitting the server on a TCP port (e.g. on Java or a website on the same server), OR only people who also play on Java Edition can join from Geyser

This is likely a firewall issue on your server. Try the following workaround:

Attempt to connect to the Bedrock IP and port through a web browser - for example, `http://test.geysermc.org:19132`. It won't work, but then try connecting through Bedrock, and it should work.

Specific host fixes:

SoYouStart (a subsidiary of OVH):

In the SoYouStart control panel:
1. Click the IP tab.
2. Click the gear at the right of the public IP address; select "Game mitigation".
3. Pick "Add a rule".
4. Select "minecraftPocketEdition" in the dropdown list and enter the target UDP ports.
5. Save and wait a few seconds for the changes to come into effect.

## Issues connecting with OVH or a subsidiary

If you're running into issues with some Bedrock players being unable to connect on OVH, navigate through the following settings:

- Navigate to `Network interfaces` 
- Click on the `...` button on the table for your IP -> then `...` and `Configure the GAME firewall` -> `Add rule` -> `Other protocol` (or `minecraftPocketEdition` if available)
- Add your Geyser port into `outgoing port`

## Changing the `bedrock` `address` in the Geyser config.

Except for a few specific hosting providers, you generally do not need to change this part of the Geyser config. However, in rare instances, it does fix issues

# Using a hosting provider or other location

## Pterodactyl

If you get this error while using the Pterodactyl Panel, try editing the Geyser config and changing the port to something besides `19132` (e.g. `25566`).

## Hosting Geyser on another computer on the same network

### Can only connect from the same computer and not anywhere else

Your firewall is likely in the way. Try adding an exception to Java, or disable the firewall for testing purposes.

# As a last resort for troubleshooting...

Minecraft offers a vanilla Bedrock server [here](https://www.minecraft.net/en-us/download/server/bedrock). Downloading, running, and attempting to connect to it may help isolate if the issue is on Geyser's end, or your computer/network's end.

# Using Geyser on the same computer

## Windows 10/11

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

