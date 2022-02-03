---
layout: default
title: All Resources
permalink: /en/resources/all
---


<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">All Resources</h1>
    <a href="/en/resources/official" class="btn btn-primary btn px-4 m-1">Official Resources</a>
    <a href="/en/resources/community" class="btn btn-outline-secondary btn px-4 m-1">Community Resources</a>
  </div>
</header>

<section class="container py-4 border-bottom">
	<div class="row row-cols-auto justify-content-center mt-4">
    {%- for resource in site.data.projects-test -%}
      <div class="col mb-4">
        <div class="card rounded-3 h-100" style="width: 18rem;">
          <div class="card-body d-flex align-items-start flex-column">
            <h5 class="card-title text-capitalize">
              <a href="{{resource.link}}" class="text-decoration-none link-dark">{{resource.name}} {{site.data.icons.new_tab}}</a>
            </h5>
            <p class="mb-1 text-muted"><small>{{resource.creator}} </small></p>
            <p class="card-text flex-grow-1">{{resource.description_short}}</p>
            <a href="" class="btn btn-outline-primary btn-sm">Details</a>
          </div>
        </div>
      </div>
    {%- endfor -%}
  </div>
</section>


