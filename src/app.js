function launchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchInput.innerHTML("search-input");
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", launchSubmit);
