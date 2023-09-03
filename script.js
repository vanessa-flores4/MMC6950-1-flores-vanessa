const apiKey = 'f75423644d329812f146960de698918d';
document.querySelector('.searchButton').addEventListener('click', getWeather);

async function getWeather() {
    const location = document.querySelector('.location').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector('.weather').innerHTML = 'Error fetching weather data';
    }
}

function displayWeather(data) {
    const weatherContainer = document.querySelector('.weather');
    const { name, main, weather } = data;
    const temperatureCelsius = main.temp;
    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
    const description = weather[0].description;

    const weatherHTML = `
    <div class="weather-results">
        <h2>${name}</h2>
        <p class="temperature">Temperature: ${temperatureFahrenheit.toFixed(2)}°F</p>
        <p class="weather-description">Description: ${description}</p>
    </div>
    `;

    weatherContainer.innerHTML = weatherHTML;
}
