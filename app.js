
const apiKey = 'cb7d74e3c3935e08204df1cbc1641712'; 

document.getElementById('getWeather').addEventListener('click', function() {
  const city = document.getElementById('cityInput').value;
  if (city === '') {
    alert('Please enter city name');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert('City not found');
        return;
      }
      document.getElementById('cityName').textContent = data.name + ', ' + data.sys.country;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('weatherDescription').textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      document.getElementById('weatherResult').style.display = 'block';
    })
    .catch(error => {
      alert('Error fetching weather data');
      console.error(error);
    });
});
