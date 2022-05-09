---
layout: default
title: All Integrations
permalink: /en/integrations/all
---


<header class="page-header">
  <div class="header-bg-fade-in"></div>
  <div class="header-bg-fade-out"></div>
  <div class="container py-5 mt-5 mb-4 pt-lg-0 my-lg-0 poap-purple-dark">
    <div class="text-center my-0 my-md-3 my-lg-5">
      <h1 class="display-6 fw-bold mb-2">All Integrations</h1>
    </div>
  </div>
</header>


<section class="">
  <div class="container py-4 border-bottom w-sm-75">
  	<div class="row row-cols-auto justify-content-center mt-4">
      {% assign test = site.data.resources | map: "integrations" %}
      <script>
      // console.log({{test | uniq | jsonify}})
    </script>
      {%- assign integrations = site.data.integrations -%}
      {%- for integration in integrations -%}
        {%- if integration.id -%}
          <div class="col mb-4">
            <div class="card rounded-3 h-100" style="width: 9.8rem;">
              <div class="card-body rounded-2 text-center">
                <h5 class="d-block fw-normal fs-6 mb-3 poap-purple-dark">{{integration.title}}</h5>
                  {%- if integration.img -%}
                    <img src="{{integration.img}}" class="img-fluid mx-auto mb-2" style="width: 4rem; height: 4rem;">
                  {%- else -%}
                    <img src="/assets/img/integrations/link.svg" class="img-fluid mx-auto mb-2" style="width: 4rem; height: 4rem;">
                  {%- endif -%}
                <a href="/en/integrations/{{integration.id}}" class="btn btn-outline-primary btn-sm mt-2">
                  View Resources
                </a>
              </div>
            </div>
          </div>
        {%- endif -%}
      {%- endfor -%}
    </div>
  </div>
</section>

