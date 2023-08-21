---
title: FAQ
---

{% for section in site.data.faq %}
  <h1 id="{{ section.title | slugify }}">{{ section.title }}</h1>
  {% if section.desc != nil %}<p>{{ section.desc | markdownify }}</p>{% endif %}
  <div class="accordion mb-4" id="accordionFaq">
    {% for question in section.items %}
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
{% endfor %}
