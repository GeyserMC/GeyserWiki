---
title: Advanced Setup
---

# Portforwarding

This page contains information on how to set up portforwarding required for Geyser to work when self-hosting.
There are also guides for specific configurations, such as Docker/Pterodactyl, or on specific VPS/KVM providers, such as OVH or Oracle Cloud. 

<div class="alert alert-warning" role="alert">
	If you are using a Minecraft server hosting provider (e.g. Aternos, or Apex Hosting), you should refer to the hosting provider setup on the <a href="/geyser/setup/">setup</a> page instead.
</div>

## Windows/Linux
These are (limited) examples of how to open a port under Windows and Linux. Additionally, you will need to portforward the port on your router.

### Windows

// TODO: some basic instructions on how to open a port on Windows, loopback fix, then how windows sometimes has multiple network interfaces :/

### Linux
Different Linux distributions, even different VPS providers ship and configure different firewalls. In the following examples, we will use `19132` as the port to open, but you should replace this with the port you are using for Geyser.

- `ufw` is a simple firewall front-end for iptables that is commonly used on Ubuntu and Debian. To open a port on UDP, run the following command: <br>
`sudo ufw allow 19132/udp` <br>
Then, reload the firewall with `sudo ufw reload`, and see all open rules with `sudo ufw status`. <br>
Further helpful guides: [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server), [Baeldung](https://www.baeldung.com/linux/uncomplicated-firewall)

- `iptables` is a common firewall that is used on many Linux distributions. To open a port on UDP, run the following command: <br>
`sudo iptables -A INPUT -p udp --dport 19132 -j ACCEPT` <br>
Then, save the firewall with `sudo iptables-save`, and see all open rules with `sudo iptables -L`. <br>
Further helpful guides for iptables: [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-iptables-on-ubuntu-14-04), [Ubuntu](https://help.ubuntu.com/community/IptablesHowTo)

- `firewalld` Add a port on UDP by running <br>
`sudo firewall-cmd --zone=public --permanent --add-port=19132/udp` <br>
Then, reload the firewall with `sudo firewall-cmd --reload`, and see all open rules with `sudo firewall-cmd --list-all`. <br>
Further helpful guides: [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7)

## Using Docker/Pterodactyl
In addition to portforwarding the port in your server's firewall (and, if applicable, your router/modem), you will need to assign the port in Docker/Pterodactyl.

### Pterodactyl

Make sure to allocate the port to the server in the Pterodactyl panel, additionally to portforwarding it. See [here](https://pterodactyl.io/community/games/minecraft.html#allocations-in-the-panel) for more information.
![Pterodactyl port allocation](https://cdn.discordapp.com/attachments/613194762249437245/1138630494909640794/image.png)

<div class="alert alert-warning" role="alert">
    If you are not able to allocate the port in the Pterodactyl panel, you will need to contact your server host to allocate one for you or try to use an existing port allocation.
</div>

### Docker
For Geyser to work under Docker (e.g. using [Itzg's Docker image](https://github.com/itzg/docker-minecraft-server)), you will need to add the Geyser port on UDP to the docker-compose file. This is done by adding the following to the `ports` section:

```yaml
ports:
    - "25565:25565"
    - "19132:19132/udp"
```
The additional `/udp` suffix is required so that the port is exposed on UDP. If you want to run the Java server and Geyser on the same port, the following would work:

```yaml
ports:
    - "25565:25565"
    - "25565:25565/udp"
```

Alternatively, add another port with the `-p 19132:19132/udp` flag to the docker run command.

## OVH/Oracle Cloud/SoYouStart
Some providers, such as OVH, Oracle Cloud, and SoYouStart, have a firewall that blocks UDP ports by default/in most cases.

### OVH/SoYouStart
By default, OVHs firewall requires a TCP ping to the server before allowing UDP connections. This is not possible with Geyser, so you will need to disable the firewall.

**To verify/temporary work around it:** <br>
Attempt to connect to the Bedrock IP and port through a web browser - for example, `http://test.geysermc.org:19132`. Connecting won't work, but then try connecting through Bedrock on that same device, and it should work.
Alternatively, try connecting to the server first on Java edition, then on Bedrock with the same device.

**To resolve it:** <br>

OVH:
1. Navigate to `Network interfaces`
2. Click on the `...` button on the table for your IP -> then `...` and `Configure the GAME firewall` -> `Add rule` -> `Other protocol` (or `minecraftPocketEdition` if available)
3. Add your Geyser port into `outgoing port`.

SoYouStart:
1. Click the IP tab.
2. Click the gear at the right of the public IP address; select "Game mitigation".
3. Pick "Add a rule".
4. Select "minecraftPocketEdition" in the dropdown list and enter the target UDP ports.
5. Save and wait a few seconds for the changes to come into effect.

<div class="alert alert-warning" role="alert">
    If you do not have access to these firewall settings, but got linked to this page anyway, please contact your server host - they are likely using OVH internally.	
</div>

### Oracle Cloud/OCI
You'll need to allow port 19132 on UDP in both the security list and the firewall-cmd command.

Additional step for Ubuntu users: 
1. Remove/comment out `-A INPUT -j REJECT --reject-with icmp-host-prohibited` in the `/etc/iptables/rules.v4` file.
2. Then, run `sudo iptables-restore < /etc/iptables/rules.v4` to fix ufw.
