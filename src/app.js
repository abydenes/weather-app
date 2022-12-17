export let weatherData = {};

export async function getWeatherData(location = "London", units = "metric") {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=6f72982fa697b29337f32b3e360ac876`
    );

    if (!response.ok) {
      throw new Error(`Unable to fetch weather data for ${location}`);
    }

    const data = await response.json();
    weatherData = {
      location: data.name,
      temp: data.main.temp,
      conditions: data.weather[0].description,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
    };
  } catch (error) {
    console.error(error);
  }
}
