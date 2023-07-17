---
title: Floodgate Setup
page_sidebar: false
---

# Floodgate Setup

<div class="alert alert-warning" role="alert">
	Floodgate does <b>NOT</b> replace Geyser! It allows Geyser players to join servers without needing to log into a paid Java Edition account. <br>
</div>

<div class="nav nav-tabs setup-tabs" role="tablist" aria-label="Setup Options">
    <li class="nav-item" role="presentation">
        <a class="nav-link active" href="#" data-bs-toggle="tab" data-bs-target="#spigot-option" type="button" role="tab" aria-controls="spigot-option" aria-selected="false"><img src="{{ '/img/icons/paper.png' | relative_url }}" alt="paper icon"> Paper / Spigot</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#fabric-option" type="button" role="tab" aria-controls="fabric-option" aria-selected="false"><img src="{{ '/img/icons/fabric.png' | relative_url }}" alt="fabric icon"> Fabric</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#proxy-option" type="button" role="tab" aria-controls="proxy-option" aria-selected="false"><img src="{{ '/img/icons/velocity.svg' | relative_url }}" alt="velocity icon"> Proxy Servers</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#standalone-option" type="button" role="tab" aria-controls="standalone-option" aria-selected="false"><img src="{{ '/img/icons/geyser.png' | relative_url }}" alt="geyser icon"> Standalone</a>
    </li>
  </div>

  <div class="tab-content mt-4">
    <div id="spigot-option" class="tab-pane fade show active" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/floodgate/spigot.md %}{% endcapture %}
        {{ my_include | markdownify }}
    </div>
    <div id="fabric-option" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/floodgate/fabric.md %}{% endcapture %}
        {{ my_include | markdownify }}
    </div>
    <div id="proxy-option" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/floodgate/proxy.md %}{% endcapture %}
        {{ my_include | markdownify }}
    </div>
    <div id="standalone-option" class="tab-pane fade" role="tabpanel">
        {% capture my_include %}{% include setup/instructions/floodgate/standalone.md %}{% endcapture %}
        {{ my_include | markdownify }}
    </div>
</div>

<h4 class="mt-4">Further information:</h4>
<ul>
  <li><a href="/floodgate/features/">Floodgate Features</a></li>
  <li><a href="/floodgate/api/">Floodgate API</a></li>
</ul>