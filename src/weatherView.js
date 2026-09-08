import { getWeather } from "./weather.js";

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

  const icon = document.createElement("p");
  icon.textContent = weather.icon;

  weatherContainer.append(
    location,
    conditions,
    temperature,
    feelsLike,
    humidity,
    windSpeed,
    icon,
  );
}

export function getForm() {
  return document.querySelector("form");
}

export function getUnitButton() {
  return weatherUnitButton;
}
