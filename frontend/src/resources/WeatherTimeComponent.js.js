import React, { useEffect, useState } from 'react';

const WeatherTimeComponent = () => {
  const [weatherData, setWeatherData] = useState({});
  const [timeData, setTimeData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch weather data from OpenWeatherMap API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=YOUR_OPENWEATHERMAP_API_KEY`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.error('Error fetching weather data:', error));

    // Fetch time data from WorldTimeAPI
    fetch('http://worldtimeapi.org/api/ip')
      .then((response) => response.json())
      .then((data) => {
        setTimeData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching time data:', error));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>

          <h2>Time Information</h2>
          <p>Timezone: {timeData.timezone}</p>
          <p>Current Time: {timeData.datetime}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherTimeComponent;