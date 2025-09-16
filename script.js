const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('cityName').textContent = data.name;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById('weatherInfo').classList.remove('hidden');
    })
    .catch(error => {
      alert(error.message);
    });
}
