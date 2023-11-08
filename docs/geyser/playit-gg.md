---
title: playit.gg Setup
---

## Prerequisites

:::info

You must be able to connect to your Geyser instance locally!

:::

- If you already have playit.gg running & set up (for e.g. Minecraft Java edition), skip steps 1 and 2 and proceed with step 3.

## Setup
1. Head over to [playit.gg's website](https://playit.gg/) - download the program & run it. It will open the login site in the browser - create an account & sign in. Or, use a guest account.
2. Once logged in, make sure to connect the program + site, until step 4 is reached. This should happen automatically, if it does not, follow the instructions on the website and the playit.gg program console.
   ![img](/img/wiki/playit-gg/running.png)
3. Click "Create Tunnel" if you see the screen above, or, select the "Tunnels" tab when logged in to your account. There, select "Minecraft Bedrock", leave "Enable Tunnel" ticked, and click "Add tunnel".
   ![img](/img/wiki/playit-gg/add_tunnel.png)
4. Once "Add tunnel" is clicked, it should create a new tunnel, and you are set! Scroll down until you see this:
   ![img](/img/wiki/playit-gg/added_tunnel.png)
   If you have Geyser running on a port that is not 19132, update the port there. The "Local Address" does not need to be changed unless you are not running playit.gg and Geyser on the same device.
5. Connect to your server - use the IP and Port from the "Allocation" tab. In our example - "180.ip.ply.gg" as the IP, and "17019" as the port. Alternatively, use the Domain it gives you instead of the IP.
6. If you join successfully, then you are done! Make sure to leave the playit.gg program running as closing it will close the tunnel. You also may want to ratelimit individual connections - use the "Per Connection Rate Limit" option to do so.
   (If you failed to join, check out the [troubleshooting](#troubleshooting) section of the page.) 

## Troubleshooting

### I can't connect to my server!
* *Are there errors in your minecraft server console?*
* *Make sure to check [here](/geyser/fixing-unable-to-connect-to-world/) beforehand.*
* *If you changed the port that Geyser would bind to, you'll have to tell playit.gg to use that port instead! See step 5 here.*
* *(Alternatively: You can try setting the* `bedrock` `port` *in the Geyser configuration to* `19132`.)
