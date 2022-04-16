---
layout: default
title: All Integrators
permalink: /en/integrators/all
---


<header class="page-header">
  <div class="header-bg-fade-in"></div>
  <div class="header-bg-fade-out"></div>
  <div class="container py-5 mt-5 mb-4 pt-lg-0 my-lg-0 poap-purple-dark">
    <div class="text-center my-0 my-md-3 my-lg-5">
      <h1 class="display-6 fw-bold mb-2">All Integrators</h1>
    </div>
  </div>
</header>


<section class="">
  <div class="container py-4 border-bottom">
  	<div class="row row-cols-auto justify-content-center mt-4">
      {%- assign integrators = site.data.integrators -%}
      {%- for integrator in integrators -%}
        {%- if integrator.link -%}
          <div class="col mb-4">
            <div class="card rounded-3 h-100" style="width: 9rem;">
              <div class="card-body rounded-2 text-center">
                {%- if integrator.img -%}
                  <img src="{{integrator.img}}" class="img-fluid mx-auto mb-2 rounded-circle" style="width: 5rem; height: 5rem; background-color: {{integrator.bg_color}};">
                {%- else -%}
                  <img src="/assets/img/poap-badge.png" class="img-fluid mx-auto mb-2 rounded-circle" style="width: 5rem; height: 5rem;">
                {%- endif -%}
                <div class="badge rounded-pill mb-2 me-1 bg-light text-dark">{{integrator.category}}</div>
                <a href="{{integrator.link}}" target="_blank" class="d-block text-decoration-none fs-6 link-dark">{{integrator.name}} {{site.data.icons.new_tab}}</a>
              </div>
            </div>
          </div>
        {%- endif -%}
      {%- endfor -%}
    </div>
  </div>
</section>

