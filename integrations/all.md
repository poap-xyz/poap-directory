---
layout: default
title: All Integrations
permalink: /en/integrations/all
---


<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">All Integrations</h1>
  </div>
</header>

<section class="container py-4 border-bottom">
	<div class="row row-cols-auto justify-content-center mt-4">
    {%- assign integrations = site.data.projects-test -%}
    {%- for integration in integrations -%}
      <div class="col" title="{{integration.name}}">
        <div class="card rounded-3 border-2 mb-4 pt-3" style="width: 8rem; min-height: 8rem;">
          <img src="/assets/img/poap-badge.png" class="img-fluid mx-auto" style="width: 5rem;">
          <div class="card-body rounded-2 text-center">
            <a href="{{integration.link}}" class="btn btn-outline-primary btn-sm">Details</a>
          </div>
        </div>
      </div>
    {%- endfor -%}
  </div>
</section>

