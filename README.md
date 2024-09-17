# Current Weather App

This is a simple web application that displays the current weather information for a specific location. It uses the Open-Meteo API to fetch weather data and displays it on the page.

## Features

- Displays current temperature, relative humidity, apparent temperature, day/night status, precipitation, rain, showers, weather code, cloud cover, pressure, wind speed, and wind direction.
- Shows the location (latitude and longitude) and the current time.
- Responsive design for different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- Open-Meteo API

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.

Alternatively, you can deploy the app to a web server or hosting service of your choice.

## Usage

1. Open the app in your web browser.
2. Click the "Get Weather" button to fetch the current weather data.
3. The weather information will be displayed on the page, including the location and current time.

## API

This app uses the Open-Meteo API to fetch weather data. The API URL used in the app is:

https://api.open-meteo.com/v1/forecast?latitude=-23.1864&longitude=-46.8842&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m&timezone=America%2FSao_Paulo


You can modify the latitude and longitude parameters in the URL to get weather data for a different location.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


