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

    {% include setup/instructions/geyser/tabs.html type="provider" %}
  </div>

  <div id="self-host-options" class="tab-pane fade" role="tabpanel">
    {% include setup/instructions/geyser/tabs.html type="selfhost" show_standalone=true %}
  </div>
</div>

<div class="alert alert-warning" role="alert">
  <b>Experiencing issues?</b> <br>
  Start with the <a href="/geyser/common-issues/">Common Issues</a> page.
  If your issue is not included there, join our <a href="https://discord.gg/geysermc">Discord server</a> for support.
</div>

<h4 class="mt-4">Further information:</h4>
<ul>
  <li><a href="/geyser/understanding-the-config/">Full config documentation</a></li>
  <li><a href="/geyser/current-limitations/">Current Limitations</a></li>
  <li><a href="/geyser/faq/">Frequently asked questions</a></li>
</ul>
