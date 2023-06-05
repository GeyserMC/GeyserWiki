---
title: setup
---

<style>
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .setup-content {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .search-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .search-result {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #032830;
    color: #6edff6;
    border: 1px solid #055160;
  }
  .search-result p {
    display: inline-block;
    vertical-align: middle;
  }
  .floodgate-title {
    text-align: center;
  }
</style>

<div class="button-container">
  <div class="btn-group" role="group" aria-label="Host Type">
    <input type="radio" name="host-type" id="self-host" class="btn-check" value="self-host"
      onclick="showSelfHostOptions()">
    <label class="btn btn-outline-primary" for="self-host">Self Host</label>

    <input type="radio" name="host-type" id="host-provider" class="btn-check" value="host-provider"
      onclick="showHostProviderOptions()">
    <label class="btn btn-outline-primary" for="host-provider">Host Provider</label>
  </div>
</div>

<div id="self-host-options" class="button-container" style="display: none;">
  <div class="btn-group" role="group" aria-label="Self Host Options">
    <button class="btn btn-primary" onclick="showOption('spigot-paper')">Spigot/Paper</button>
    <button class="btn btn-primary" onclick="showOption('proxy-servers')">Proxy Servers</button>
    <button class="btn btn-primary" onclick="showOption('standalone')">Standalone</button>
    <button class="btn btn-primary" onclick="showOption('floodgate')">Floodgate</button>
  </div>
</div>

<div id="host-provider-options" style="display: none;">
  <div class="search-container">
    <select id="provider-select" onchange="selectProvider()">
      <option value="">Select a provider</option>
      {% for provider in site.data.providers.support %}
      <option value="{{ provider.description }}">{{ provider.name }}</option>
      {% endfor %}
    </select>
  </div>
  <div class="search-result-container"></div>
</div>

<div id="spigot-paper-option" class="setup-content" style="display: none;">
  <h2>Spigot/Paper Setup</h2>
  <ol>
    <li>Download Geyser <a href="https://geysermc.org/download">here</a>. Make sure you download the Spigot/Paper Geyser
      plugin.</li>
    <li>Put the Geyser jar file in your plugins folder and start up the server.</li>
    <li>Besides the `port` entry in the *Bedrock Section* of Geyser's `config.yml`, note:
      <ul>
        <li>`address: 0.0.0.0` - The IP address that will listen for connections. There is no reason to change this.
        </li>
        <li>`port: 19132` - The port Bedrock players will use to connect. If the option `clone-remote-port` is set to
          true, this port is ignored, and you'll have to use the same port on bedrock as you would on Java to connect.
        </li>
      </ul>
    </li>
    <li>The *remote* section in the `config.yml` determines how the Java server will connect to the Bedrock server. The
      main options are:
      <ul>
        <li>`address: localhost` - The IP address to connect to. Unless you are running BungeeCord or some other kind of
          server that proxies the connection, this should be left as `localhost`.</li>
        <li>`port: 25565` - The port to connect to. If the option `clone-remote-port` is set to true, this port is
          ignored, and you'll have to use the same port on bedrock as you would on Java to connect.</li>
        <li>`auth-type: offline` - How Geyser should authenticate with the server. By default, Geyser is set to
          authenticate offline. If you want to use online mode, set this to `online`.</li>
      </ul>
    </li>
    <li>For the most part, that is the basic setup of Geyser. For more advanced configurations, please read our full
      documentation <a href="https://github.com/GeyserMC/Geyser/wiki">here</a>.</li>
  </ol>

  <ul>
    <li><a href="https://wiki.geysermc.org/geyser/setup/">Full Geyser setup page</a></li>
    <li><a href="https://wiki.geysermc.org/geyser/current-limitations/">Current Limitations</a></li>
    <li><a href="https://wiki.geysermc.org/geyser/common-issues/">Common Issues</a></li>
  </ul>

</div>

<div id="proxy-servers-option" class="setup-content" style="display: none;">
  <h2>Proxy Servers Setup</h2>
  <ol>
    <li>Download Geyser <a href="https://geysermc.org/download">here</a> for the platform your server runs on. See the
      <a href="/geyser/faq/#which-plugin-version-of-geyser-do-i-need">FAQ</a> if you're confused about which build to
      download.</li>
    <li>Put the Geyser jar file in your plugins folder and start up the server.</li>
    <li>The <em>remote</em> section in the <code>config.yml</code> determines which Java proxy the Bedrock players join.
      The proxy then configures which server the players are sent to.
      <ul>
        <li><code>address: auto</code> - Leaving this at auto is recommended because it means that Geyser configures the
          proxy's IP, port, and auth-type itself.</li>
        <li><code>port: 25565</code> - This should be the port of the Java server. By default, it is set to 25565. Your
          hosting provider may have assigned a different port to your proxy, so set that here.</li>
      </ul>
    </li>
    <li>For further Geyser config changes, like allowing Bedrock players to build on the nether roof, refer to <a
        href="/geyser/understanding-the-config/">the config help article</a>.</li>
  </ol>

  <ul>
    <li><a href="https://wiki.geysermc.org/geyser/setup/">Full Geyser setup page</a></li>
    <li><a href="https://wiki.geysermc.org/geyser/current-limitations/">Current Limitations</a></li>
    <li><a href="https://wiki.geysermc.org/geyser/common-issues/">Common Issues</a></li>
  </ul>

</div>

<div id="standalone-option" class="setup-content" style="display: none;">
  <h2>Standalone Setup</h2>
  <ol>
    <li>Download <a
        href="https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/standalone">Geyser
        Standalone</a>.</li>
    <li>Create a new folder for Geyser, and drop the jar in there.</li>
  </ol>

  <h3>GUI Setup (Recommended)</h3>
  <ol>
    <li>Double-click the jar file and all the necessary files for Geyser will be created.</li>
    <li>Configure options such as the server you want to join in the Geyser config. A description of all options of the
      config can be found on the <a href="/geyser/understanding-the-config/">Understanding the Config</a> page.</li>
    <li>Stop the current instance of Geyser and re-run it.</li>
  </ol>

  <h3>Console Setup</h3>
  <ol>
    <li>Create a new bat or startup script, similar to the one you'd use for a Spigot or Paper server, and take a look
      at <a href="/geyser/creating-a-startup-script/">this</a> page for what to put into it.</li>
    <li>Run the startup script/bat, and all the necessary files for Geyser will be created.</li>
    <li>Configure options such as the server you want to join in the Geyser config. A description of all options of the
      config can be found on the <a href="/geyser/understanding-the-config/">Understanding the Config</a> page.</li>
    <li>Stop the current instance of Geyser and re-run it.</li>
  </ol>

  <ul>
    <li><a href="https://wiki.geysermc.org/geyser/setup/">Full Geyser setup page</a></li>
    <li><a href="https://wiki.geysermc.org/geyser/current-limitations/">Current Limitations</a></li>
    <li><a href="https://wiki.geysermc.org/geyser/common-issues/">Common Issues</a></li>
  </ul>

</div>
<div id="floodgate-option" class="setup-content" style="display: none;">
  <br>
  <h5 class="floodgate-title">Select which version of floodgate you want to install</h5>
  <div class="button-container">
    <button class="btn btn-primary" onclick="showOption('floodgatespigot')">Floodgate Spigot</button>
    <button class="btn btn-primary" onclick="showOption('floodgateproxy')">Floodgate Proxy</button>
    <button class="btn btn-primary" onclick="showOption('floodgatestandalone')">Floodgate Standalone</button>
  </div>
</div>

<div id="floodgatespigot-option" class="setup-content" style="display: none;">
  <h2>Floodgate Spigot</h2>
  <ol>
    <li>Download the Floodgate plugin and add it to your plugins folder on your frontend server.</li>
    <li>Select your platform on the download page linked above and click "Download Floodgate".</li>
    <li>If you are using Floodgate on Fabric, you will need to download the <a
        href="https://www.curseforge.com/minecraft/mc-mods/fabric-api">Fabric API</a>.</li>
    <li>Change the `auth-type` in the Geyser config to `floodgate`.</li>
    <li>Restart/start up the server.</li>
  </ol>

  <ul>
    <li><a href="https://wiki.geysermc.org/floodgate/setup/">Full Floodgate setup page</a></li>
    <li><a href="https://wiki.geysermc.org/floodgate/features/">features</a></li>
    <li><a href="https://wiki.geysermc.org/floodgate/api/">Floodgate API</a></li>
  </ul>

</div>

<div id="floodgateproxy-option" class="setup-content" style="display: none;">
  <h2>For BungeeCord/Velocity setups:</h2>
  <p>You only need to install Floodgate on the BungeeCord or Velocity proxy server, unless you want to use the Floodgate
    API on the backend servers. See below for the installation process.</p>

  <p><strong>Note:</strong> Installing Floodgate on the backend servers will allow Bedrock player skins to display
    without the Bedrock player having to switch backend servers.</p>

  <h3>Frontend Server Setup</h3>
  <ol>
    <li>Download the Floodgate plugin and add it to your plugins folder on your frontend server.</li>
    <ul>
      <li>Select your platform on the download page linked above and click "Download Floodgate".</li>
      <li>If you are using Floodgate on Fabric, you will need to download the <a
          href="https://www.curseforge.com/minecraft/mc-mods/fabric-api">Fabric API</a>.</li>
    </ul>
    <li>Change the <code>auth-type</code> in the Geyser config to <code>floodgate</code>.</li>
    <li>Restart or start up the server.</li>
  </ol>

  <h3>Backend Server Setup (optional)</h3>
  <p>This step is only needed if you want to use the Floodgate API on your backend server(s) behind a proxy.</p>
  <ol>
    <li>Install Floodgate on the proxy and on <strong>all</strong> backend servers following the previous instructions.
    </li>
    <li>Enable <code>ip_forward</code> in your BungeeCord <code>config.yml</code> if using BungeeCord. For Velocity, set
      up "player-info-forwarding".</li>
    <li>Set <code>bungeecord</code> to <code>true</code> in your <code>spigot.yml</code>. When using Velocity, refer to
      their <a href="https://docs.papermc.io/velocity/player-information-forwarding">guide</a> for different setup
      options.</li>
    <li>Start the proxy server.</li>
    <li>Edit the Floodgate config on your proxy server and set <code>send-floodgate-data</code> to <code>true</code>.
    </li>
    <li>Copy the <code>key.pem</code> file from the proxy Floodgate config folder to all backend servers' Floodgate
      config folders. <strong>DO NOT DISTRIBUTE THIS KEY TO ANYBODY!</strong> This key allows Bedrock accounts to bypass
      the Java Edition authentication, and if compromised, it can cause havoc on your server.</li>
    <li>Restart the backend servers and proxy server.</li>
  </ol>

  <ul>
    <li><a href="https://wiki.geysermc.org/floodgate/setup/">Full Floodgate setup page</a></li>
    <li><a href="https://wiki.geysermc.org/floodgate/features/">features</a></li>
    <li><a href="https://wiki.geysermc.org/floodgate/api/">Floodgate API</a></li>
  </ul>

</div>

<div id="floodgatestandalone-option" class="setup-content" style="display: none;">
  <h2>Floodgate Standalone</h2>
  <ol>
    <li>Download the Floodgate plugin and add it to your plugins folder on your frontend server.</li>
    <ul>
      <li>Select your platform on the download page linked above and click "Download Floodgate".</li>
      <li>If you are using Floodgate on Fabric, you will need to download the <a
          href="https://www.curseforge.com/minecraft/mc-mods/fabric-api">Fabric API</a>.</li>
    </ul>
    <li>Change the <code>auth-type</code> in the Geyser config to <code>floodgate</code>.</li>
    <li>Restart or start up the server.</li>
  </ol>

  <p><strong>Geyser Standalone:</strong></p>
  <ol>
    <li><em>Copy</em> the <code>key.pem</code> file in the Floodgate config folder to the same directory as Geyser
      Standalone. <strong>DO NOT DISTRIBUTE THIS KEY TO ANYBODY!</strong> This key allows Bedrock accounts to bypass the
      Java Edition authentication, and if compromised, it can cause havoc on your server.</li>
  </ol>

  <ul>
    <li><a href="https://wiki.geysermc.org/floodgate/setup/">Full Floodgate setup page</a></li>
    <li><a href="https://wiki.geysermc.org/floodgate/features/">features</a></li>
    <li><a href="https://wiki.geysermc.org/floodgate/api/">Floodgate API</a></li>
  </ul>

</div>

<script>
  function showSelfHostOptions() {
    document.getElementById('host-provider-options').style.display = 'none';
    document.getElementById('self-host-options').style.display = 'flex';
    clearSearchResults();
    hideAllSetupOptions();
  }

  function showHostProviderOptions() {
    document.getElementById('self-host-options').style.display = 'none';
    document.getElementById('host-provider-options').style.display = 'block';
    clearSearchResults();
    hideAllSetupOptions();
  }

  function showOption(option) {
    hideAllSetupOptions();
    document.getElementById(option + '-option').style.display = 'block';
  }

  function selectProvider() {
    var provider = document.getElementById("provider-select").value;
    showSearchResult(provider);
  }

  function showSearchResult(provider) {
    var searchResultContainer = document.querySelector(".search-result-container");
    searchResultContainer.innerHTML = '<div class="search-result"><p>' + provider + '</p></div>';

    var selfHostOptionsContainer = document.getElementById('self-host-options');
    var clone = selfHostOptionsContainer.cloneNode(true);
    clone.style.display = 'flex';
    searchResultContainer.appendChild(clone);
  }

  function clearSearchResults() {
    var searchResultContainer = document.querySelector(".search-result-container");
    searchResultContainer.innerHTML = '';
  }

  function hideAllSetupOptions() {
    var setupOptions = document.getElementsByClassName('setup-content');
    for (var i = 0; i < setupOptions.length; i++) {
      setupOptions[i].style.display = 'none';
    }
  }

  function showAllSetupOptions() {
    var setupOptions = document.getElementsByClassName('setup-content');
    for (var i = 0; i < setupOptions.length; i++) {
      setupOptions[i].style.display = 'block';
    }
  }
</script>