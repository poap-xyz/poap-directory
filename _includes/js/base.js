var resourceDetailModal = document.getElementById('resourceDetailModal');
resourceDetailModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var link = button.getAttribute('data-bs-link');
  var title = button.getAttribute('data-bs-title');
  var creator = button.getAttribute('data-bs-creator');
  var description = button.getAttribute('data-bs-desc');
  var categories = button.getAttribute('data-bs-categories');
  var socials = button.getAttribute('data-bs-socials');
  var docs = button.getAttribute('data-bs-docs');

  updateValue("rdmLink", link, "link");
  updateValue("rdmTitle", title, "text");
  updateValue("rdmCreator", creator, "text");
  updateValue("rdmDescription", description, "text");
  updateValue("rdmCategories", categories, "text");
  updateValue("rdmSocials", socials, "text");
  updateValue("rdmDocs", docs, "link");
})

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
  } else {
    el.classList.add("d-none");
  }
}




