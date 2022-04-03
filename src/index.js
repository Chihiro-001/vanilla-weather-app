//general search engine
function searchEngine(city) {
  let apiKey = "7b2471b32a9aba35093d93a82db55ee8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
  let unit = "metric";
  axios.get(`${apiUrl}&appid=${apiKey}&units=${unit}`).then(showTemperature);
}
function revealCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchEngine(city);
}
let showCityName = document.querySelector("#input-form");
showCityName.addEventListener("submit", revealCity);
let searchCityButton = document.querySelector("#searching-button");
searchCityButton.addEventListener("click", revealCity);
//show temperature
function showTemperature(response) {
  console.log(response.data);
  let temperature = document.querySelector("#current-temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let location = document.querySelector("#location");
  location.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
  let wind = document.querySelector("#windspeed");
  wind.innerHTML = response.data.wind.speed;
  document.querySelector("#cloudiness").innerHTML = response.data.clouds.all;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
}

//get your current location
function clickLocationButton(event) {
  event.preventDefault();
  function findCurrentLocation(position) {
    let apiKey = "7b2471b32a9aba35093d93a82db55ee8";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
    let unit = "metric";
    axios.get(`${apiUrl}&appid=${apiKey}&units=${unit}`).then(showTemperature);
  }
  navigator.geolocation.getCurrentPosition(findCurrentLocation);
}
let locationButton = document.querySelector("#current-location-button");
locationButton.addEventListener("click", clickLocationButton);

searchEngine("Tokyo");

//week4 feature1
let now = new Date();

function setCurrentDay() {
  //current day
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let currentDay = document.querySelector("#current-day");
  currentDay.innerHTML = day;

  //current time
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentHour = document.querySelector("#current-hour");
  let currentMinute = document.querySelector("#current-minute");
  currentHour.innerHTML = hours;
  currentMinute.innerHTML = minutes;
}
setCurrentDay();
