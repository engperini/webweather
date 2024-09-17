const fetchWeatherButton = document.getElementById('fetchWeather');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const isDayElement = document.getElementById('isDay');
const precipitationElement = document.getElementById('precipitation');
const rainElement = document.getElementById('rain');
const cloudCoverElement = document.getElementById('cloudCover');
const pressureElement = document.getElementById('pressure');
const windSpeedElement = document.getElementById('windSpeed');
const windDirectionElement = document.getElementById('windDirection');
const locationTimeDiv = document.getElementById('locationTime');

fetchWeatherButton.addEventListener('click', fetchWeather);

//automatic fetchWeather every minute
setInterval(fetchWeather, 60000);

//fetchWeather 1st time
fetchWeather();


function fetchWeather() {
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-23.1864&longitude=-46.8842&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m&timezone=America%2FSao_Paulo';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const currentWeather = data.current;

      // Update card content
      temperatureElement.textContent = currentWeather.temperature_2m;
      humidityElement.textContent = currentWeather.relative_humidity_2m;
      isDayElement.textContent = currentWeather.is_day ? 'Yes' : 'No';
      precipitationElement.textContent = currentWeather.precipitation;
      rainElement.textContent = currentWeather.rain;
      cloudCoverElement.textContent = currentWeather.cloud_cover;
      pressureElement.textContent = currentWeather.pressure_msl;
      windSpeedElement.textContent = currentWeather.wind_speed_10m;
      windDirectionElement.textContent = currentWeather.wind_direction_10m;

      const location = `Latitude: ${data.latitude}, Longitude: ${data.longitude}`;
      const time = new Date(currentWeather.time).toLocaleString();
      locationTimeDiv.innerHTML = `${location} - ${time}`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      temperatureElement.textContent = 'Error';
      humidityElement.textContent = 'Error';
      isDayElement.textContent = 'Error';
      precipitationElement.textContent = 'Error';
      rainElement.textContent = 'Error';
      cloudCoverElement.textContent = 'Error';
      pressureElement.textContent = 'Error';
      windSpeedElement.textContent = 'Error';
      windDirectionElement.textContent = 'Error';
      locationTimeDiv.innerHTML = '';
    });
}
