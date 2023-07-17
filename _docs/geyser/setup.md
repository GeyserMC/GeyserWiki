---
title: Setup
page_sidebar: false
---
<div class="row gap-4 mx-0" role="tablist">
  <a class="col btn btn-outline-primary active" href="#" data-bs-toggle="tab" data-bs-target="#host-provider-options" type="button" role="tab" aria-controls="host-provider-options" aria-selected="true">Host Provider</a>
  <a class="col btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#self-host-options" type="button" role="tab" aria-controls="self-host-options" aria-selected="false">Self Host</a>
</div>

<div class="tab-content mt-4">
  <div id="host-provider-options" class="tab-pane fade show active" role="tabpanel">
    {% include setup/host-provider.html %}
    <div class="btn-group d-flex" role="tablist" aria-label="Setup Options">
      <a class="btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#spigot-option" type="button" role="tab" aria-controls="spigot-option" aria-selected="false">Spigot/Paper</a>
      <a class="btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#fabric-option" type="button" role="tab" aria-controls="fabric-option" aria-selected="false">Fabric</a>
      <a class="btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#proxy-option" type="button" role="tab" aria-controls="proxy-option" aria-selected="false">Proxy Servers</a>
      <a class="btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#standalone-option" type="button" role="tab" aria-controls="standalone-option" aria-selected="false">Standalone</a>
    </div>

    <div class="tab-content mt-4">
      <div id="spigot-option" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/geyser/spigot-host.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
      <div id="fabric-option" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/geyser/fabric-host.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
      <div id="proxy-option" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/geyser/proxy-host.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
      <div id="standalone-option" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/geyser/standalone.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
    </div>
  </div>

  <div id="self-host-options" class="tab-pane fade" role="tabpanel">
    <div class="btn-group d-flex" role="tablist" aria-label="Setup Options">
      <a class="btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#spigot-option-self" type="button" role="tab" aria-controls="spigot-option" aria-selected="false">Spigot/Paper</a>
      <a class="btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#fabric-option-self" type="button" role="tab" aria-controls="fabric-option" aria-selected="false">Fabric</a>
      <a class="btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#proxy-option-self" type="button" role="tab" aria-controls="proxy-option" aria-selected="false">Proxy Servers</a>
      <a class="btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#standalone-option-self" type="button" role="tab" aria-controls="standalone-option" aria-selected="false">Standalone</a>
    </div>

    <div class="tab-content mt-4">
      <div id="spigot-option-self" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/geyser/spigot.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
      <div id="fabric-option-self" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/geyser/fabric.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
      <div id="proxy-option-self" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/geyser/proxy.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
      <div id="standalone-option-self" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/geyser/standalone.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
    </div>
  </div>
</div>

<ul> 
  <li><a href="https://wiki.geysermc.org/geyser/understanding-the-config/">Full Geyser configuration page</a></li>
  <li><a href="https://wiki.geysermc.org/geyser/current-limitations/">Current Limitations</a></li>
  <li><a href="https://wiki.geysermc.org/geyser/common-issues/">Common Issues</a></li>
</ul>