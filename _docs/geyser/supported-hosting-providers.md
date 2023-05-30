---
title: Supported Hosting Providers
---

This list is incomplete. Please open a [PR](https://github.com/GeyserMC/GeyserWiki/pulls) or contact us on [Discord](https://discord.gg/geysermc) if the information is incorrect or you want to add a new hosting provider!

It should also be noted that these providers may not be verified by the Geyser team, and the server providers below are reported as working by members of the community.

**Warning: The below information is for the plugin versions of Geyser unless otherwise specified**

**Warning: Using a *”Free Host”* may not give you the best experience *at all*. If you want better support, more freedom to control your server, and learn how to run one, PLEASE pay for a server.**

## Built-in Geyser
{% for provider in site.data.providers.built_in %}
* [{{ provider.name}}]({{ provider.url }}){% if provider.description != nil or provider.description_template != nil %} - {{ site.data.providers.description_templates[provider.description_template] }} {{ provider.description }}{% endif %}
{% endfor %}

## Support for Geyser
{% for provider in site.data.providers.support %}
* [{{ provider.name}}]({{ provider.url }}){% if provider.description != nil or provider.description_template != nil %} - {{ site.data.providers.description_templates[provider.description_template] }} {{ provider.description }}{% endif %}
{% endfor %}

## Does not support Geyser
{% for provider in site.data.providers.no_support %}
* [{{ provider.name}}]({{ provider.url }}){% if provider.description != nil or provider.description_template != nil %} - {{ site.data.providers.description_templates[provider.description_template] }} {{ provider.description }}{% endif %}
{% endfor %}
