const apiKey = '2f5e944c889d622f2b40dfbeb9828851'; // Replace with your real API key from https://home.openweathermap.org/api_keys

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const weatherDiv = document.getElementById('weatherInfo');

  if (!city) {
    weatherDiv.innerHTML = '<p>Please enter a city name.</p>';
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found or API error');
    }

    const data = await response.json();
    const { name, main, weather } = data;

    weatherDiv.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
      <p><strong>Condition:</strong> ${weather[0].description}</p>
    `;
  } catch (error) {
    weatherDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
