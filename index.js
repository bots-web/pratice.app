function setDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}


function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
let apiKey ="822793104fdfad370146398e9100c10c";
let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=KEY&&units=metric `;
axios.get(apiUrl).then(showTemperature);
}

function ButtonSubmit(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
    
  }


function presentLocation(city){
    let temperature = Math.round(response.data.main.temp)
    let temperatureElement = document.querySelector("#temeperature");
    temperatureElement.innerHTML = `${temperature} ℃`;
    axios.get(apiUrl).then(showTemperature);
}

function collectPosition(position) {
  let apiKey ="822793104fdfad370146398e9100c10c";
  let latitudeNow = position.coords.latitude;
  let longitudeNow = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeNow}&lon=${longitudeNow}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}


function CurrentLocation(event) {
event.preventDefault();
navigator.geolocation.getCurrentPosition(collectPosition);
}
let button = document.querySelector("button");
button.addEventListener("click" , getCurrentPosition);
    
function celsius (event){
event.preventDefault();
let link =document.querySelector("#temperature");
temperatureElement.innerHTML=19 ;

}

function fahrenheit (event){
    event.preventDefault();
    let links =document.querySelector("#temperature");
    temperatureElement.innerHTML= 66;
}

let cureentAreaform = document.querySelector("#current-location-button");
form.addEventListener("click",CurrentLocation);


let form = document.querySelector("#search-form");
form.addEventListener("submit",search);

let ShowDate= document.querySelector("#date");
let presentTime = new Date();
ShowDate.innerHTML = formatDate(presentTime);
