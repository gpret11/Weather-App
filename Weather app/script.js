document.getElementById("getWeatherButton").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "14d1d73894524538ad272604242910"; // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`City not found`);
        }
        const data = await response.json();

        // Update HTML with the fetched data
        document.getElementById("cityName").innerText = `Weather in ${data.location.name}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c} °C`;
        document.getElementById("description").innerText = `Condition: ${data.current.condition.text}`;
        document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
        document.getElementById("wind").innerText = `Wind Speed: ${data.current.wind_kph} kph`;

        // Clear error messages if any
        document.getElementById("weatherDisplay").style.display = "block";
    } catch (error) {
        // Display error message if there's an issue
        document.getElementById("weatherDisplay").innerText = error.message;
    }
}
