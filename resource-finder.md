---
layout: default
title: Resource Finder
permalink: /en/resource-finder
---


<header class="py-5 poap-purple-light">
  <div class="container text-center my-0 my-md-3 my-lg-5">
    <h1 class="display-6 fw-bold mb-0">Resource Finder</h1>
  </div>
</header>

<section class="">
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-12 col-md-8 col-lg-6">
        {%- assign prompts = site.data.resource-finder-test -%}
        {%- for prompt in prompts -%}
          {%- if prompt.id -%}
            {%- assign visibility = "d-none" -%}
            {%- if prompt.id == 1 -%}
              {%- assign visibility = "" -%}
            {%- endif -%}
            <div id="prompt{{prompt.id}}" class="card w-100 rounded-3 {{visibility}}">
              <div class="card-body m-3">
                <h5 class="card-title">{{prompt.title}}</h5>
                <p class="card-text mb-4">{{prompt.subtitle}}</p>
                {%- if prompt.type == "question" -%}
                  {%- for each_option in prompt.options -%}
                    {%- if each_option.option and each_option.go_to_id -%}
                      <a data-go-to-prompt="each_option.go_to_id" 
                          class="btn btn-outline-primary text-start d-block mt-3"
                          onclick="goToPrompt('{{prompt.id}}','{{each_option.go_to_id}}')">
                        <span class="btn-radio me-2">{{site.data.icons.circle}}</span>{{each_option.option}}
                      </a>
                    {%- endif -%}
                  {%- endfor -%}
                {%- endif -%}
              </div>
            </div>
          {%- endif -%}
        {%- endfor -%}
        <a id="promptBack" class="btn btn-primary mt-3 d-none" onclick="goToLastPrompt()">
          <span class="me-2">{{site.data.icons.back_arrow}}</span>Back
        </a>
      </div>
    </div>
  </div>
</section>

