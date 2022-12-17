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

/*

`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=6f72982fa697b29337f32b3e360ac876`

1. Set up a blank HTML document with the appropriate links 
to your JavaScript and CSS files.

2. Write the functions that hit the API. You’re going to want 
functions that can take a location and return the weather data 
for that location. For now, just console.log() the information.

3. Write the functions that process the JSON data you’re getting 
from the API and return an object with only the data you require for your app.

4. Set up a simple form that will let users input their location 
and will fetch the weather info (still just console.log() it).

5. Display the information on your webpage!

6. Add any styling you like!

7. You should be able to search for a specific location and toggle 
displaying the data in Fahrenheit or Celsius.

8. You should change the look of the page based on the data.

Optional: add a ‘loading’ component that displays from the time 
the form is submitted until the information comes back from the API.
Push that baby to github and share your solution below!
*/
