function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature-now");
  let roundedTemperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = roundedTemperature;
  console.log(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = "1521eab90o8d6c3ad79f5t2266f5a4a4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function launchSubmit(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city-input");
  cityElement.innerHTML = searchElement.value;
  searchCity(searchElement.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", launchSubmit);

searchCity("Durban");
