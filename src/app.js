function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature-now");
  let roundedTemperature = Math.round(response.data.temperature.current);
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#percentage");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  let iconsElement = document.querySelector("#icons");

  console.log(response.data.condition.description);
  temperatureElement.innerHTML = roundedTemperature;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);
  conditionElement.innerHTML = response.data.condition.description;
  iconsElement.innerHTML = `<img
     src="${response.data.condition.icon_url}"
     class="temperature-icon"
   />`;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
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
