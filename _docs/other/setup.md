---
title: Setup
---
<div class="row gap-4 mx-4" role="tablist">
    <a class="col btn btn-outline-primary active" href="#" data-bs-toggle="tab" data-bs-target="#self-host-options" type="button" role="tab" aria-controls="self-host-options" aria-selected="true">Self Host</a>
    <a class="col btn btn-outline-primary" href="#" data-bs-toggle="tab" data-bs-target="#host-provider-options" type="button" role="tab" aria-controls="host-provider-options" aria-selected="false">Host Provider</a>
</div>

<div class="tab-content mt-4">
  <div id="self-host-options" class="tab-pane fade" role="tabpanel">
    <!-- Empty since they are always visible -->
  </div>

  <div id="host-provider-options" class="tab-pane fade" role="tabpanel">
    {% include setup/host-provider.html %}
  </div>
</div>

{% include setup/setup-options.html %}
