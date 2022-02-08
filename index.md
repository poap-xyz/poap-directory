---
layout: default
---


<!-- Header -->
<header class="pb-md-3 pb-lg-5">
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-1 fw-bold mt-5 poap-purple">POAP Directory</h1>
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <p class="h3 fw-normal mb-4">
          Explore the ecosystem and find the resources you need.
        </p>
        <a href="/en/resources/official" class="btn btn-primary btn-lg px-4 m-1">View Official Resources</a>
        <a href="/en/resources/community" class="btn btn-outline-secondary btn-lg px-4 m-1">View Community Resources</a>
        <p class="mt-3">
          <a href="/en/resources/dev">Start building on POAP {{site.data.icons.arrow_right}}</a>
        </p>
      </div>
    </div>
  </div>
</header>


<!-- Fun Divider -->
<section class="bg-light">
  <div class="container my-5">
    <div class="row text-center">
      <div class="col text-center">
        <p class="display-6 fw-bold" style="color: #8076fa;">.DELIVERY</p>
      </div>
      <div class="col text-center">
        <p class="display-6 fw-bold" style="color: #0dcaf0;">.FUN</p>
      </div>
      <div class="col text-center">
        <p class="display-6 fw-bold" style="color: #20c997;">.VOTE</p>
      </div>
      <div class="col text-center">
        <p class="display-6 fw-bold" style="color: #f87588;">.ART</p>
      </div>
      <div class="col text-center">
        <p class="display-6 fw-bold" style="color: #ffc107;">.GALLERY</p>
      </div>
    </div>
  </div>
</section>


<!-- Official Resources -->
<section id="official" class="">
  {%- assign official_resources = site.data.resources | where: "official", "true" -%}
  {%- assign official_limit = 8 -%}
  {%- assign official_mobile_limit = 4 -%}
  <div class="container py-5 my-5">
    <h2 class="h1 fw-bold mb-3 text-center">Official Resources</h2>
    {%- comment -%}
      <div class="text-center">
        <a href="/" class="btn btn-outline-secondary btn px-4 m-1">Submit Resource</a>
      </div>
    {%- endcomment -%}
    <div class="row row-cols-auto justify-content-center mt-4">
      {%- for resource in official_resources limit:official_limit -%}
        {%- if resource.link -%}
          {%- assign hide_on_small = "" -%}
          {%- if forloop.index > official_mobile_limit -%}
            {%- assign hide_on_small = "d-none d-sm-none d-md-block" -%}
          {%- endif -%}
          <div class="col mb-4 {{hide_on_small}}">
            <div class="card rounded-3 h-100" style="width: 18rem;">
              <div class="card-body d-flex align-items-start flex-column">
                <div class="mb-3">
                  {%- assign resource_categories = resource.categories | split: ", " -%}
                  {%- for category in resource_categories -%}
                    <a class="me-1" href="/en/resources/{{category}}"><span class="badge rounded-pill bg-light text-dark {{category}}">{{category}}</span></a>
                  {%- endfor -%}
                </div>
                <h5 class="card-title mb-1">
                  <a href="{{resource.link}}" target="_blank" class="text-decoration-none link-dark">{{resource.title}} {{site.data.icons.new_tab}}</a>
                </h5>
                <p class="mb-2 text-muted"><small>POAP Inc.</small></p>
                <p class="card-text flex-grow-1">{{resource.desc_short}}</p>
                <a href="" class="btn btn-outline-primary btn-sm">Details</a>
              </div>
            </div>
          </div>
        {%- endif -%}
      {%- endfor -%}
    </div>
    <div class="text-center">
      <a href="/en/resources/official" class="btn btn-primary btn px-4 m-1">View All</a>
    </div>
  </div>
</section>


<!-- Community Resources -->
<section id="community" class="bg-light">
  {%- assign community_resources = site.data.resources | where: "official", "false" -%}
  {%- assign community_limit = 8 -%}
  {%- assign community_mobile_limit = 4 -%}
  <div class="container py-5 my-5">
    <h2 class="h1 fw-bold mb-3 text-center">Community Resources</h2>
    {%- comment -%}
      <div class="text-center">
        <a href="/" class="btn btn-outline-secondary btn px-4 m-1">Submit Resource</a>
      </div>
    {%- endcomment -%}
    <div class="row row-cols-auto justify-content-center mt-4">
      {%- for resource in community_resources limit:community_limit -%}
        {%- if resource.link -%}
          {%- assign hide_on_small = "" -%}
          {%- if forloop.index > community_mobile_limit -%}
            {%- assign hide_on_small = "d-none d-sm-none d-md-block" -%}
          {%- endif -%}
          <div class="col mb-4 {{hide_on_small}}">
            <div class="card rounded-3 h-100" style="width: 18rem;">
              <div class="card-body d-flex align-items-start flex-column">
                <div class="mb-3">
                  {%- assign resource_categories = resource.categories | split: ", " -%}
                  {%- for category in resource_categories -%}
                    <a class="me-1" href="/en/resources/{{category}}"><span class="badge rounded-pill bg-light text-dark {{category}}">{{category}}</span></a>
                  {%- endfor -%}
                </div>
                <h5 class="card-title mb-1">
                  <a href="{{resource.link}}" target="_blank" class="text-decoration-none link-dark">{{resource.title}} {{site.data.icons.new_tab}}</a>
                </h5>
                {%- if resource.creator -%}
                  <p class="mb-2 text-muted text-capitalize"><small>{{resource.creator}}</small></p>
                {%- else -%}
                  <p class="mb-2 text-muted text-capitalize"><small>Unknown</small></p>
                {%- endif -%}
                <p class="card-text flex-grow-1">{{resource.desc_short}}</p>
                <a href="" class="btn btn-outline-primary btn-sm">Details</a>
              </div>
            </div>
          </div>
        {%- endif -%} 
      {%- endfor -%}
    </div>
    {%- if community_resources.size > community_limit -%}
      <div class="text-center">
        <a href="/en/resources/community" class="btn btn-primary btn px-4 m-1">View All</a>
      </div>
    {%- endif -%}
  </div>
</section>


<!-- Integrations -->
<section id="integrations" class="">
  {%- assign integrations = site.data.integrations -%}
  {%- assign integration_limit = 6 -%}
  {%- assign integration_mobile_limit = 6 -%}
  <div class="container py-5 my-5">
    <h2 class="h1 fw-bold mb-3 text-center">Integrations</h2>
    {%- comment -%}
      <div class="text-center">
        {%- if integrations.size > integration_limit -%}
          <a href="/en/integrations/all" class="btn btn-primary btn px-4 m-1">View All</a>
        {%- endif -%}
        {%- if integrations.size > integration_limit -%}
          <a href="/" class="btn btn-outline-secondary btn px-4 m-1">Submit Integration</a>
        {%- else -%}
          <a href="/" class="btn btn-primary btn px-4 m-1">Submit Integration</a>
        {%- endif -%}
      </div>
    {%- endcomment -%}
    <div class="row row-cols-auto justify-content-center mt-4">
      {%- for integration in integrations limit:integration_limit -%}
        {%- if integration.link -%}
          {%- assign hide_on_small = "" -%}
          {%- if forloop.index > integration_mobile_limit -%}
            {%- assign hide_on_small = "d-none d-sm-none d-md-block" -%}
          {%- endif -%}
          <div class="col mb-4 {{hide_on_small}}">
            <div href="{{integration.link}}" class="card rounded-3 h-100" style="width: 9rem;">
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
    {%- if integrations.size > integration_limit -%}
      <div class="text-center">
        <a href="/en/integrations/all" class="btn btn-primary btn px-4 m-1">View All</a>
      </div>
    {%- endif -%}
  </div>
</section>


<!-- Build CTA -->
<section id="build" class="bg-light">
  <div class="container py-5 my-5">
    <h2 class="h1 fw-bold mb-3 text-center">Build on POAP!</h2>
    <div class="row justify-content-center mt-2">
      <div class="col col-lg-6 col-md-8 text-center">
        <p>POAP has an amazing ecosystem thanks to builders like you. Help furthur our mission of preserving memories and connecting communities by building on POAP. We love seeing what the community develops!</p>
        <a href="/" class="btn btn-primary btn px-4 m-1">Start Building</a>
      </div>
    </div>
  </div>
</section>







