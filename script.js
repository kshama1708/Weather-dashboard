async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "cce04d8b574893a7e55fe5747a55a8b6";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);

let data = await response.json();

document.getElementById("cityName").innerHTML = data.name;

document.getElementById("temp").innerHTML =
"🌡 Temperature: " + data.main.temp + "°C";

document.getElementById("condition").innerHTML =
"☁ Condition: " + data.weather[0].main;

document.getElementById("humidity").innerHTML =
"💧 Humidity: " + data.main.humidity + "%";

document.getElementById("wind").innerHTML =
"🌬 Wind Speed: " + data.wind.speed + " km/h";

}