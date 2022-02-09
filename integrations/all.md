---
layout: default
title: All Integrations
permalink: /en/integrations/all
---


<header class="py-5 poap-purple-light">
  <div class="container text-center my-0 my-md-3 my-lg-5">
    <h1 class="display-6 fw-bold mb-3">All Integrations</h1>
  </div>
</header>

<section class="">
  <div class="container py-4 border-bottom">
  	<div class="row row-cols-auto justify-content-center mt-4">
      {%- assign integrations = site.data.integrations -%}
      {%- for integration in integrations -%}
        {%- if integration.link -%}
          <div class="col mb-4">
            <div class="card rounded-3 h-100" style="width: 9rem;">
              <div class="card-body rounded-2 text-center">
                {%- if integration.img -%}
                  <img src="{{integration.img}}" class="img-fluid mx-auto mb-2 rounded-circle" style="width: 5rem; height: 5rem; background-color: {{integration.bg_color}};">
                {%- else -%}
                  <img src="/assets/img/poap-badge.png" class="img-fluid mx-auto mb-2 rounded-circle" style="width: 5rem; height: 5rem;">
                {%- endif -%}
                <div class="badge rounded-pill mb-2 me-1 bg-light text-dark">{{integration.category}}</div>
                <a href="{{integration.link}}" target="_blank" class="d-block text-decoration-none fs-6 link-dark">{{integration.name}} {{site.data.icons.new_tab}}</a>
              </div>
            </div>
          </div>
        {%- endif -%}
      {%- endfor -%}
    </div>
  </div>
</section>