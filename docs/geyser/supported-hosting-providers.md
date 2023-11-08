---
title: Supported Hosting Providers
---

:::danger

This list is incomplete. Please open a <a href="https://github.com/GeyserMC/GeyserWiki/pulls">PR</a> or contact us on <a href="https://discord.gg/geysermc">Discord</a> if the information is incorrect or you want to add a new hosting provider!

:::

:::caution

It should also be noted that these providers may not be verified by the Geyser team, and the server providers below are reported as working by members of the community.

:::

:::caution

Using a <i>"Free Host"</i> may not give you the best experience <i>at all</i>. If you want better support, more freedom to control your server, and learn how to run one, PLEASE pay for a server.

:::

:::info

The below information is for the plugin versions of Geyser unless otherwise specified

:::

[//]: # ()
[//]: # (## Built-in Geyser)

[//]: # ({% for provider in site.data.providers.built_in %})

[//]: # (* [{{ provider.name}}]&#40;{{ provider.url }}&#41;{% if provider.description != nil or provider.description_template != nil %} - {{ site.data.providers.description_templates[provider.description_template] }} {{ provider.description }}{% endif %})

[//]: # ({% endfor %})

[//]: # ()
[//]: # (## Support for Geyser)

[//]: # ({% for provider in site.data.providers.support %})

[//]: # (* [{{ provider.name}}]&#40;{{ provider.url }}&#41;{% if provider.description != nil or provider.description_template != nil %} - {{ site.data.providers.description_templates[provider.description_template] }} {{ provider.description }}{% endif %})

[//]: # ({% endfor %})

[//]: # ()
[//]: # (## Does not support Geyser)

[//]: # ({% for provider in site.data.providers.no_support %})

[//]: # (* [{{ provider.name}}]&#40;{{ provider.url }}&#41;{% if provider.description != nil or provider.description_template != nil %} - {{ site.data.providers.description_templates[provider.description_template] }} {{ provider.description }}{% endif %})

[//]: # ({% endfor %})
