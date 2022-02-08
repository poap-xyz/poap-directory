---
layout: default
title: Community Resources
permalink: /en/resources/community-old
---


<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Community Resources</h1>
    <a href="/en/resources/all" class="btn btn-primary btn px-4 m-1">View All Resources</a>
  </div>
</header>

<section class="container py-4 border-bottom">
	<div class="row row-cols-auto justify-content-center mt-4">
    {%- assign community_resources = site.data.resources | where: "official", "false" -%}
    {%- for resource in community_resources -%}
      {%- if resource.link -%}
        <div class="col mb-4">
          <div class="card rounded-3 h-100" style="width: 18rem;">
            <div class="card-body d-flex align-items-start flex-column">
              <div class="mb-3">
                {%- assign resource_categories = resource.categories | split: ", " -%}
                {%- for category in resource_categories -%}
                  <a class="me-1" href="/en/resources/{{category}}"><span class="badge rounded-pill bg-light text-dark {{category}}">{{category}}</span></a>
                {%- endfor -%}
              </div>
              <h5 class="card-title mb-1">
                <a href="{{resource.link}}" class="text-decoration-none link-dark">{{resource.title}} {{site.data.icons.new_tab}}</a>
              </h5>
              <p class="mb-2 text-muted"><small>{{resource.creator}} </small></p>
              <p class="card-text flex-grow-1">{{resource.desc_short}}</p>
              <a href="" class="btn btn-outline-primary btn-sm">Details</a>
            </div>
          </div>
        </div>
      {%- endif -%}
    {%- endfor -%}
  </div>
</section>


