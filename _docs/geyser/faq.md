---
title: FAQ
---

# Frequently Asked Questions
Here you can find answers to frequently asked questions about Geyser - if you have a question that isn't answered here, feel free to ask in our [Discord](https://discord.gg/GeyserMC)!

<div class="accordion mb-2" id="accordionFaq">
  {% for question in site.data.faq %}
    {% assign id = question.title | slugify %}
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#{{ id }}" aria-expanded="true" aria-controls="{{ id }}">
          {{ question.title }}
        </button>
      </h2>
      <div id="{{ id }}" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
        <div class="accordion-body">
          {{ question.content | markdownify }}
        </div>
      </div>
    </div>
  {% endfor %}
</div>

# Questions not related to gameplay

<div class="accordion mb-5" id="accordionFaqOther">
  {% for question in site.data.faq-other %}
    {% assign id = question.title | slugify %}
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#{{ id }}" aria-expanded="true" aria-controls="{{ id }}">
          {{ question.title }}
        </button>
      </h2>
      <div id="{{ id }}" class="accordion-collapse collapse" data-bs-parent="#accordionFaqOther">
        <div class="accordion-body">
          {{ question.content | markdownify }}
        </div>
      </div>
    </div>
  {% endfor %}
</div>
