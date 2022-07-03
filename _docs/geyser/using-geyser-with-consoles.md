---
layout: page
title: Using Geyser with Consoles
permalink: /geyser/using-geyser-with-consoles/
---

All consoles can join third-party servers - including Geyser servers - with workarounds. Xbox One, Nintendo Switch, and PS4 systems can join third-party servers using a third-party program called BedrockConnect. For technical information about the program, including how to run your own setup, see [their GitHub repository](https://github.com/Pugmatt/BedrockConnect) (*This program is not affiliated with GeyserMC*). Other methods are also available for use.

**NOTE: The main IP used for BedrockConnect is often blocked on consoles, if you run into issues with internet connection or joining servers after changing your DNS, consider using either one of the other BedrockConnect servers on the [BedrockConnect Github Page](https://github.com/Pugmatt/BedrockConnect), or the [Public GeyserConnect](https://www.geyserconnect.net) which allows connecting to both Java and Bedrock servers.**

# Xbox One

(Video linked below)

[![Xbox One BedrockConnect](https://img.youtube.com/vi/g8mHvasVHMs/0.jpg)](https://www.youtube.com/watch?v=g8mHvasVHMs)

# Nintendo Switch

(Video linked below)

[![Nintendo Switch BedrockConnect](https://img.youtube.com/vi/zalT_oR1nPM/0.jpg)](https://www.youtube.com/watch?v=zalT_oR1nPM)

# PlayStation 4
1. Go to your PS4 Home screen.
2. Go to Settings.
3. Go to Network.
4. Select Set Up Internet connection.
5. If you are using wired internet, select "Use LAN Cable", otherwise choose "Use Wi-Fi".
6. Select the Custom network creation mode.
7. Select Automatic IP Address.
8. For DHCP Host Name, make sure you select Do Not Specify.
9. Under DNS Settings, select Manual.
10. Enter the BedrockConnect IP for the preferred Primary DNS (Multiple options depending on region can be found on the [BedrockConnect Github Page](https://github.com/Pugmatt/BedrockConnect)) and something like Google or Cloudfare's IP for the Secondary DNS (8.8.8.8 or 1.1.1.1).


## Alternative Methods
If you'd rather try emulating a LAN game on your network on another device, here's how you'd do that.

*Note that this method will not work with the Nintendo Switch.*

### Using a PC
If you have a PC, you can use [Phantom](https://github.com/jhead/phantom).

### Using an Android Device
If you have an Android device, you have several options:
- ~~[Geyser Android app](https://github.com/GeyserMC/GeyserAndroid)~~ (Currently out of date)
- [BedrockTogether](https://play.google.com/store/apps/details?id=pl.extollite.bedrocktogetherapp)
- [MC Lan Proxy (Trial)](https://play.google.com/store/apps/details?id=com.luzenna.mineproxydroidtrial)
- [MC Lan Proxy (Paid)](https://play.google.com/store/apps/details?id=com.luzenna.mineproxydroid)
- [MC Server Connector](https://play.google.com/store/apps/details?id=com.smokiem.mcserverconnector)

### Using an iOS device
If you have an iOS 14+ device, you can use [BedrockTogether](https://apps.apple.com/app/bedrocktogether/id1534593376).

# Splitscreen
Geyser supports additional players joining via splitscreen, with the caveat that each player must have their own bedrock account. 

See [these docs](/geyser/understanding-the-config/#splitscreen) for the configuration settings for splitscreen.
