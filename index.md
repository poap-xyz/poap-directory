---
layout: default
---


<!-- Header -->
<header class="pb-md-3 pb-lg-5">
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-1 fw-bold mt-5 poap-purple">POAP Directory</h1>
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <p class="h3 fw-normal mb-4 poap-pink">
          Explore the ecosystem and find the tools right for you.
        </p>
        <a href="#" class="btn btn-primary btn-lg px-4 m-1">Official Resources</a>
        <a href="#" class="btn btn-outline-primary btn-lg px-4 m-1">Community Resources</a>
        <p class="mt-3">
          <a href="">Start building on POAP {{site.data.icons.arrow_right}}</a>
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
  {%- assign official_resources = site.data.projects-test | where: "official", "true" -%}
  {%- assign official_limit = 8 -%}
  {%- assign official_mobile_limit = 4 -%}
  <div class="container py-5 my-5">
    <h2 class="h1 fw-bold mb-3 text-center">Official Resources</h2>
    <div class="text-center">
      {%- if official_resources.size > official_limit -%}
        <a href="/" class="btn btn-primary btn px-4 m-1">View All</a>
      {%- endif -%}
      {%- if official_resources.size > official_limit -%}
        <a href="/" class="btn btn-outline-primary btn px-4 m-1">Submit Resource</a>
      {%- else -%}
        <a href="/" class="btn btn-primary btn px-4 m-1">Submit Resource</a>
      {%- endif -%}
    </div>
    <div class="row row-cols-auto justify-content-center mt-4">
      {%- for resource in official_resources limit:official_limit -%}
        {%- assign hide_on_small = "" -%}
        {%- if forloop.index > official_mobile_limit -%}
          {%- assign hide_on_small = "d-none d-sm-none d-md-block" -%}
        {%- endif -%}
        <div class="col {{hide_on_small}}">
          <div class="card rounded-3 mb-4" style="width: 18rem;">
            <div class="card-body">
              <p class="mb-1 text-muted"><small>POAP</small></p>
              <h5 class="card-title text-capitalize" style="height: 3rem;">
                <a href="{{resource.link}}" class="text-decoration-none link-dark">{{resource.name}} {{site.data.icons.new_tab}}</a>
              </h5>
              <p class="card-text overflow-auto" style="height: 9.25rem;">{{resource.description_short}}</p>
              <a href="" class="btn btn-outline-primary btn-sm">Details</a>
              <!-- <a href="{{resource.link}}" class="card-link">Website {{site.data.icons.new_tab}}</a> -->
            </div>
          </div>
        </div>
      {%- endfor -%}
    </div>
    <div class="text-center">
      <a href="/" class="btn btn-primary btn px-4 m-1">View All</a>
    </div>
  </div>
</section>

<!-- Community Resources -->
<section id="community" class="bg-light">
  {%- assign community_resources = site.data.projects-test | where: "official", "false" -%}
  {%- assign community_limit = 8 -%}
  {%- assign community_mobile_limit = 4 -%}
  <div class="container py-5 my-5">
    <h2 class="h1 fw-bold mb-3 text-center">Community Resources</h2>
    <div class="text-center">
      {%- if community_resources.size > community_limit -%}
        <a href="/" class="btn btn-primary btn px-4 m-1">View All</a>
      {%- endif -%}
      {%- if community_resources.size > community_limit -%}
        <a href="/" class="btn btn-outline-primary btn px-4 m-1">Submit Resource</a>
      {%- else -%}
        <a href="/" class="btn btn-primary btn px-4 m-1">Submit Resource</a>
      {%- endif -%}
    </div>
    <div class="row row-cols-auto justify-content-center mt-4">
      {%- for resource in community_resources limit:community_limit -%}
        {%- assign hide_on_small = "" -%}
        {%- if forloop.index > community_mobile_limit -%}
          {%- assign hide_on_small = "d-none d-sm-none d-md-block" -%}
        {%- endif -%}
        <div class="col {{hide_on_small}}">
          <div class="card rounded-3 mb-4" style="width: 18rem;">
            <div class="card-body">
              {%- if resource.creator -%}
                <p class="mb-1 text-muted text-capitalize"><small>{{resource.creator}}</small></p>
              {%- else -%}
                <p class="mb-1 text-muted text-capitalize"><small>Unknown</small></p>
              {%- endif -%}
              <h5 class="card-title text-capitalize" style="height: 3rem;">
                <a href="{{resource.link}}" class="text-decoration-none link-dark">{{resource.name}} {{site.data.icons.new_tab}}</a>
              </h5>
              <p class="card-text overflow-auto" style="height: 9.25rem;">{{resource.description_short}}</p>
              <a href="" class="btn btn-outline-primary btn-sm">Details</a>
              <!-- <a href="{{resource.link}}" class="card-link">Website {{site.data.icons.new_tab}}</a> -->
            </div>
          </div>
        </div>
      {%- endfor -%}
    </div>
    {%- if community_resources.size > community_limit -%}
      <div class="text-center">
        <a href="/" class="btn btn-primary btn px-4 m-1">View All</a>
      </div>
    {%- endif -%}
  </div>
</section>


<!-- Integrations -->
<section id="integrations" class="">
  {%- assign integrations = site.data.projects-test -%}
  {%- assign integration_limit = 8 -%}
  {%- assign integration_mobile_limit = 6 -%}
  <div class="container py-5 my-5">
    <h2 class="h1 fw-bold mb-3 text-center">Integrations</h2>
    <div class="text-center">
      {%- if integrations.size > integration_limit -%}
        <a href="/" class="btn btn-primary btn px-4 m-1">View All</a>
      {%- endif -%}
      {%- if integrations.size > integration_limit -%}
        <a href="/" class="btn btn-outline-primary btn px-4 m-1">Submit Integration</a>
      {%- else -%}
        <a href="/" class="btn btn-primary btn px-4 m-1">Submit Integration</a>
      {%- endif -%}
    </div>
    <div class="row row-cols-auto justify-content-center mt-4">
      {%- for integration in integrations limit:integration_limit -%}
        {%- assign hide_on_small = "" -%}
        {%- if forloop.index > integration_mobile_limit -%}
          {%- assign hide_on_small = "d-none d-sm-none d-md-block" -%}
        {%- endif -%}
        {% capture color %}
          {% cycle "#8076fa", "#0dcaf0", "#20c997", "#f87588", "#ffc107" %}
        {% endcapture %}
        <!-- style="background-color: {{color}};" -->
        <div class="col {{hide_on_small}}" title="{{integration.name}}" data-bs-toggle="tooltip" data-bs-placement="top">
          <a href="{{integration.link}}" class="card rounded-3 border-3 mb-4" style="width: 8rem; height: 8rem; border-color: {{color}};">
            <div class="card-body rounded-2">
              <img src="/assets/img/poap-badge.png" class="img-fluid">
            </div>
          </a>
        </div>
      {%- endfor -%}
    </div>
    {%- if integrations.size > integration_limit -%}
      <!-- <div class="text-center">
        <a href="/" class="btn btn-primary btn px-4 m-1">View All</a>
      </div> -->
    {%- endif -%}
  </div>
</section>


<!-- Build CTA -->
<section id="build" class="bg-light">
  <div class="container py-5 my-5">
    <h2 class="h1 fw-bold mb-3 text-center">Build on POAP!</h2>
    <div class="row justify-content-center mt-2">
      <div class="col col-lg-6 col-md-8 text-center">
        <p class="lead">POAP has an amazing ecosystem thanks to builders like you. Help furthur our mission of preserving memories and connecting communities by building on POAP. We love seeing what the community develops!</p>
        <a href="/" class="btn btn-primary btn px-4 m-1">Start Building</a>
      </div>
    </div>
  </div>
</section>







