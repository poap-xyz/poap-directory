# poap-directory

This is the repo for <https://poap.directory>, a directory to browse and discover POAP projects, tools, and resources.



## Local Development

1. Clone the repo (or fork the repo to your account)
1. Install dependencies: `bundle install`
1. Create a feature branch off of the `dev` branch
1. Start the local server: `bundle exec jekyll serve`
1. Go to <http://localhost:4400/> to view changes

To build the site use `bundle exec jekyll build`.

Resources:

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Liquid Syntax](https://shopify.github.io/liquid/basics/introduction/)


### Conventions

- Use `POAP inc.`, not `POAP Inc.`
- Indents are 2 spaces (not tabs)
- 2 lines between frontmatter and content



## Adding a new integration

1. Go to `_data/integrations.yml` and add an entry using the following template:
    ```
    - id: 
      title: 
      img: /assets/img/integrations/
    ```

    key       | description 
    ----------|------------
    id        | The product id; use the product title, lowercased, dashes instead of spaces
    title     | Product name
    img       | Logo of the product; place in `/assets/img/integrations/` (use an SVG if possible)

1. Create a new integration page under the `/integrations/` folder. For example, if adding Google Drive as an integration, create a `/resources/google-drive.md` file.
1. Within the file, add the following contents:
    ```
    ---
    layout: default
    title: [integration] Resources
    permalink: /en/resources/[integration]
    ---


    {%- include partials/integration-page.html -%}

    ```
1. Replace `[integration]` with the integration name. For a Google Drive integration, the result would be:
    ```
    ---
    layout: default
    title: Google Drive Resources
    permalink: /en/resources/google-drive
    ---


    {%- include partials/resource-category-page.html -%}

    ```


### Adding an integration to a resource

In the `_data/resource.yml` file add the integrations to the `integrations:` parameter for the relevant resource entry. The integrations are comma-delimited and referenced using the integration `id` from the integration's entry in the `_data/integrations.yml` file.

Using the Google Drive example above, a resource's integration entry would look like the following:
```
integrations: google-drive
```




## Adding a resource

Go to `_data/resource.yml` and add an entry using the following template:

```
 - link: 
   title: 
   official: 
   hide_on_all: 
   desc_short: 
   desc_long: 
   creator: 
   # contact: 
   categories: 
   github: 
   docs: 
   discord: 
   twitter: 
   telegram: 
   medium: 
   youtube: 
   linkedin: 
   forum: 
   docs: 
 ```

key         | description 
------------|------------
link        | The resource link
title       | The resource title
official    | (true/false) true = Official POAP resource, false = Community/third party
hide_on_all | (true/false) true = Don't show under all resources, false = Show under all resources
desc_short  | Short description; <120 characters
desc_long   | (optional) Longer description; Will be shown instead of the short description in certain areas
creator     | Who is the person/organization developing this resource? (POAP inc. if it's an official resource)
contact     | Point of contact for the resource (won't be displayed on the website); leave it commented out
categories  | (Select up to 3 that apply) access, admin, app, art, collector, design, dev, distribution, explore, guide, info, metrics, play, social, voting 
github      | (optional) Github repo
docs        | (optional) Resource's guide or documentation
discord     | (optional) Project's Discord invite link (make sure it doesn't expire and isn't limited)
twitter     | (optional) Project's Twitter profile
telegram    | (optional) Project's Telegram invite
medium      | (optional) Project's Medium blog
youtube     | (optional) Project's Youtube channel
linkedin    | (optional) Project's Linkedin page
forum       | (optional) Project's forum link

**Note:** Entries show in the order listed in this file. If it's a less important resource then add it further down the list. If it's more important then insert it higher up.

### Adding a resource category

1. To create a new category, update the list of options here (in the above table) and at the top of the `_data/resources.yml` file, inserted in alphabetical order. Keep the category naming as descriptive yet broadly applicable as possible.
1. Create a new category page under the `/resources/` folder. For example, if creating a category "sports", create a `/resources/sports.md` file.
1. Within the file, add the following contents:
    ```
    ---
    layout: default
    title: [category] Resources
    permalink: /en/resources/[category]
    ---


    {%- include partials/resource-category-page.html -%}

    ```
1. Replace `[category]` with the category name. For a "sports" category, the result would be:
    ```
    ---
    layout: default
    title: Sports Resources
    permalink: /en/resources/sports
    ---


    {%- include partials/resource-category-page.html -%}

    ```

