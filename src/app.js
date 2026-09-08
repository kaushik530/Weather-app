import { getWeather } from "./weather.js";
import { getLocationInput, displayWeather, getForm } from "./weatherView.js";

getForm().addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const location = getLocationInput();
    const weather = await getWeather(location);

    displayWeather(weather);
  } catch (error) {
    console.error(error);
  }
});
