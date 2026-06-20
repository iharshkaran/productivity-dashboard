function weather() {

    let currentLocation = document.querySelector(".currentLocation");
    let currentTemp = document.querySelector(".currentTemp");
    let currentWeatherType = document.querySelector(".weatherType");
    let currentHumidity = document.querySelector(".humidity");
    let currentPrecipitation = document.querySelector(".precipitation");
    let currentWind = document.querySelector(".wind");
    let hero = document.querySelector(".hero");


    navigator.geolocation.getCurrentPosition(

        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Weather
            const urlForWeather =
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,precipitation,wind_speed_10m,wind_direction_10m`;
            const res1 = await fetch(urlForWeather);
            const weatherData = await res1.json();
            

            // data
            let temp = weatherData.current.temperature_2m;
            let weatherCode = weatherData.current.weather_code;
            let humidity = weatherData.current.relative_humidity_2m;
            let precipitation = weatherData.current.precipitation;
            let wind = weatherData.current.wind_speed_10m;

            let weatherType;

            if (weatherCode === 0) {
                weatherType = "Clear Sky";
                hero.style.backgroundImage = `url(./assets/sunny.jpg)` 
            }
            else if (weatherCode >= 1 && weatherCode <= 48) {
                weatherType = "Cloudy";
                hero.style.backgroundImage = `url(./assets/cloudy.jpg)`
            }

            else if (
                (weatherCode >= 51 && weatherCode <= 67) ||
                (weatherCode >= 80 && weatherCode <= 82)
            ) {
                weatherType = "Rainy";
                hero.style.backgroundImage = `url(./assets/rainy.jpg)`
            }

            else if ((
                weatherCode >= 71 && weatherCode <= 77) ||
                weatherCode === 85 ||
                weatherCode === 86
            ) {
                weatherType = "Snowy";
                hero.style.backgroundImage = `url(.assets/snowy.jpg)`
            }

            else if (weatherCode >= 95) {
                weatherType = "Thunderstorm";
                hero.style.backgroundImage = `url(.assets/thunderstorm.jpg)`
            }

            currentTemp.innerHTML = `${temp}°C`;
            currentWeatherType.innerHTML = `${weatherType}`;
            currentHumidity.innerHTML = `Humidity: ${humidity}%`;
            currentPrecipitation.innerHTML = `Precipitation: ${precipitation} mm`;
            currentWind.innerHTML = `Wind: ${wind} km/h`;

            // location
            const urlForLocation = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
            const res2 = await fetch(urlForLocation);
            const locationData = await res2.json();

            const city = locationData.address.city
                || locationData.address.town
                || locationData.address.village
                || locationData.address.county
                || 'Your location';

            currentLocation.innerHTML = `${city}`;

        }
    );

}
export default weather;