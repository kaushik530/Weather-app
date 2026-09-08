//weather.js
const apiKey = "RZFH32H9482RHR78JYQTPVWZ9";

export async function getWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}&unitGroup=metric`,
  );

  if (!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`);
  }

  const weather = await response.json();

  return {
    location: weather.resolvedAddress,
    temperature: weather.currentConditions.temp,
    feelsLike: weather.currentConditions.feelslike,
    conditions: weather.currentConditions.conditions,
    icon: weather.currentConditions.icon,
    humidity: weather.currentConditions.humidity,
    windSpeed: weather.currentConditions.windspeed,
  };
}
