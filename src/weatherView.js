import clearDay from "./assets/clear-day.svg";
import clearNight from "./assets/clear-night.svg";
import cloudy from "./assets/cloudy.svg";
import fog from "./assets/fog.svg";
import partlyCloudyDay from "./assets/partly-cloudy-day.svg";
import partlyCloudyNight from "./assets/partly-cloudy-night.svg";
import rain from "./assets/rain.svg";
import snow from "./assets/snow.svg";
import wind from "./assets/wind.svg";

const weatherIcons = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  cloudy: cloudy,
  fog: fog,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  rain: rain,
  snow: snow,
  wind: wind,
};

const locationInput = document.querySelector("#location");
const weatherUnitButton = document.querySelector(".weatherUnit");

const weatherContainer = document.createElement("div");
weatherContainer.classList.add("weather");

document.body.append(weatherContainer);

export function getLocationInput() {
  return locationInput.value;
}

export function displayWeather(weather) {
  weatherContainer.replaceChildren();

  const location = document.createElement("h2");
  location.textContent = weather.location;

  const conditions = document.createElement("p");
  conditions.textContent = weather.conditions;

  const temperature = document.createElement("p");
  temperature.textContent = `${weather.temperature}°C`;

  const feelsLike = document.createElement("p");
  feelsLike.textContent = `Feels like: ${weather.feelsLike}°C`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${weather.humidity}%`;

  const windSpeed = document.createElement("p");
  windSpeed.textContent = `Wind: ${weather.windSpeed} km/h`;

  const iconContent = document.createElement("div");

  const iconLogo = document.createElement("img");

  const iconText = document.createElement("p");

  iconLogo.src = weatherIcons[weather.icon];
  iconLogo.alt = weather.conditions;
  iconContent.classList.add("iconContent");
  iconText.textContent = weather.icon;

  iconContent.append(iconLogo, iconText);

  weatherContainer.append(
    location,
    conditions,
    temperature,
    feelsLike,
    humidity,
    windSpeed,
    iconContent,
  );
}

export function getForm() {
  return document.querySelector("form");
}

export function getUnitButton() {
  return weatherUnitButton;
}
