document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        getWeather(location);
    }
});

 async function getWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${'f2340baf398e530b83b10f715b255f34'}&units=metric`;
    
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
                
            } else {
                alert('Location not found');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}

function displayWeather(data) {
    // location
    const location = document.getElementById('location');
    location.innerHTML = `${data.name},${data.sys.country}`
    // Temperature
    const Temperature = document.getElementById('Temperature');
    Temperature.innerHTML = `${data.main.temp}°C`
    // Weather
    const Weather = document.getElementById('Weather');
    Weather.innerHTML = `${data.weather[0].description}`
    // Humidity
    const Humidity = document.getElementById('Humidity');
    Humidity.innerHTML = `${data.main.humidity}%`
    // Wind Speed
    const WindSpeed  = document.getElementById('WindSpeed');
    WindSpeed.innerHTML = `${data.wind.speed} m/s`
    // clouds
    const clouds = document.getElementById('clouds');
    clouds.innerHTML = `${data.clouds.all}`
 
}
