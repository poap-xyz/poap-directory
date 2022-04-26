---
---


{%- comment -%}
  /*Combines JS files from _includes/js into a single file. For page-specific JS, create 
  the JS file under assets/js named after the page (e.g. custom.js for custom.md) and 
  then add the conditional switch to the layout template to include it.*/
{%- endcomment -%}

{% include js/marked.min.js %}
{% include js/base.js %}

{%- if site.notification_enabled == true -%}
  {% include js/notification.js %}
{%- endif -%}