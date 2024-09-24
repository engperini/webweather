const fetchWeatherButton = document.getElementById('fetchWeather');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');

const cloudCoverElement = document.getElementById('cloudCover');
const pressureElement = document.getElementById('pressure');
const windSpeedElement = document.getElementById('windSpeed');
const windDirectionElement = document.getElementById('windDirection');
const locationTimeDiv = document.getElementById('locationTime');
const digitalClock = document.getElementById('digitalClock'); // Adicione um elemento com id "digitalClock" no seu HTML


fetchWeatherButton.addEventListener('click', fetchWeather);

//automatic fetchWeather every minute
setInterval(fetchWeather, 60000);

//fetchWeather 1st time after 2 seconds after page loads
setTimeout(fetchWeather, 2000);

// Função para atualizar o relógio digital
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  digitalClock.textContent = timeString;
}

// Chama a função updateClock a cada segundo
setInterval(updateClock, 1000);


function fetchWeather() {
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-23.1864&longitude=-46.8842&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m&timezone=America%2FSao_Paulo';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const currentWeather = data.current;

      // Update card content
      temperatureElement.textContent = currentWeather.temperature_2m;
      humidityElement.textContent = currentWeather.relative_humidity_2m;
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
      cloudCoverElement.textContent = 'Error';
      pressureElement.textContent = 'Error';
      windSpeedElement.textContent = 'Error';
      windDirectionElement.textContent = 'Error';
      locationTimeDiv.innerHTML = '';
    });
}
