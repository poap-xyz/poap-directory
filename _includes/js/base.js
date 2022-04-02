var resourcesJson = {{site.data.resources | jsonify}};

var resourceDetailModal = document.getElementById('resourceDetailModal');
resourceDetailModal.addEventListener('show.bs.modal', function (event) {
  // Extract the resource id from the data attribute and grab that resource info
  let id = event.relatedTarget.getAttribute('data-bs-id');
  let activeCategory = event.relatedTarget.getAttribute('data-bs-category');
  let resource = resourcesJson.find(obj => {
    return obj.id == id;
  })

  let link = resource.link;
  let title = resource.title;
  let official = resource.official;
  let creator = resource.creator;
  let description = resource.desc_long ? resource.desc_long : resource.desc_short;
  let categories = resource.categories.split(", ");
  let docs = resource.docs;

  // Add the applicable poap/third-party category
  if (official) {
    categories.unshift("poap-inc");
  } else {
    categories.unshift("third-party");
  }

  // Generate the category tag html
  let categoryTags = "";
  for (let category in categories) {
    let cat = categories[category];
    let highlight = (cat == activeCategory) ? "active-category" : "";
    let tag = `
      <a class="me-1 text-decoration-none" href="/en/resources/${cat}">
        <span class="badge rounded-pill bg-light text-dark ${highlight}">${cat}</span>
      </a>`;
    categoryTags += tag;
  }

  // Generate the social tag html
  let socialTags = "";
  // Add hard-coded social links for official resources
  if (resource.official) {
    socialTags = `
      <a href="https://twitter.com/poapxyz/" class="text-decoration-none me-1" target="_blank">
        {{site.data.icons.twitter}}
      </a>
      <a href="https://github.com/poap-xyz" class="text-decoration-none me-1" target="_blank">
        {{site.data.icons.github}}
      </a>
      <a href="https://discord.gg/fcxW4yR" class="text-decoration-none me-1" target="_blank">
        {{site.data.icons.discord}}
      </a>
      <a href="https://reddit.com/r/poap" class="text-decoration-none me-1" target="_blank">
        {{site.data.icons.reddit}}
      </a>
      <a href="https://t.me/poapxyz" class="text-decoration-none me-1" target="_blank">
        {{site.data.icons.telegram}}
      </a>
      <a href="https://www.youtube.com/channel/UCvXWjomx55gbEjJ3PCPPezQ/videos" class="text-decoration-none me-1" target="_blank">
        {{site.data.icons.youtube}}
      </a>
      <a href="https://medium.com/poap" class="text-decoration-none me-1" target="_blank">
        {{site.data.icons.medium}}
      </a>
      <a href="https://www.linkedin.com/company/poapxyz/" class="text-decoration-none me-1" target="_blank">
        {{site.data.icons.linkedin}}
      </a>`;
    }
  // Add social links for third-party resources if present
  else {
    if (resource.twitter) {
      socialTags += `
        <a href="${resource.twitter}" class="text-decoration-none me-1" target="_blank">
          {{site.data.icons.twitter}}
        </a>`;
    }
    if (resource.github) {
      socialTags += `
        <a href="${resource.github}" class="text-decoration-none me-1" target="_blank">
          {{site.data.icons.github}}
        </a>`;
    }
    if (resource.discord) {
      socialTags += `
        <a href="${resource.discord}" class="text-decoration-none me-1" target="_blank">
          {{site.data.icons.discord}}
        </a>`;
    }
    if (resource.reddit) {
      socialTags += `
        <a href="${resource.reddit}" class="text-decoration-none me-1" target="_blank">
          {{site.data.icons.reddit}}
        </a>`;
    }
    if (resource.telegram) {
      socialTags += `
        <a href="${resource.telegram}" class="text-decoration-none me-1" target="_blank">
          {{site.data.icons.telegram}}
        </a>`;
    }
    if (resource.youtube) {
      socialTags += `
        <a href="${resource.youtube}" class="text-decoration-none me-1" target="_blank">
          {{site.data.icons.youtube}}
        </a>`;
    }
    if (resource.medium) {
      socialTags += `
        <a href="${resource.medium}" class="text-decoration-none me-1" target="_blank">
          {{site.data.icons.medium}}
        </a>`;
    }
    if (resource.linkedin) {
      socialTags += `
        <a href="${resource.linkedin}" class="text-decoration-none me-1" target="_blank">
          {{site.data.icons.linkedin}}
        </a>`;
    }
  }

  // Populate the modal
  updateValue("rdmLink", link, "link");
  updateValue("rdmTitle", title, "text");
  updateValue("rdmCreator", creator, "text");
  updateValue("rdmDescription", marked.parse(description), "text");
  updateValue("rdmDocs", docs, "link");
  updateValue("rdmCategories", categoryTags, "text");
  updateValue("rdmSocials", socialTags, "text");
})

// Check to make sure there's a value set
function isValid(val) {
  if (val !== "" && val !== " " && val !== undefined && val !== null) {
    return true;
  } else {
    return false;
  }
}

function updateValue(id, val, type) {
  let el = document.getElementById(id);
  if (isValid(val)) {
    if (type == "link") {
      el.href = val;
    }
    if (type == "text") {
      el.innerHTML = val;
    }
    el.classList.remove("d-none");
  // If there's no value set then hide that element
  } else {
    el.classList.add("d-none");
  }
}

