function launchSubmit(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city-input");
  cityElement.innerHTML = searchElement.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", launchSubmit);
