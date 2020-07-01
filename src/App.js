import React, {useEffect, useState} from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import rainy_cloudy from './imgs/rainy_cloudy.png';
import partly_cloudy from './imgs/partly_cloudy.png';
import sunny from './imgs/sunny.png';

function App() {
  const WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
  const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;
  const [location, setLocation] = useState({});
  const [weatherInfo, setWeatherInfo]  = useState([]);

  useEffect(() => {
    if(window.navigator.geolocation) {
      window.navigator.geolocation
      .getCurrentPosition(position => {
        getLocation(position.coords.latitude, position.coords.longitude);
        getWeatherInfo(position.coords.latitude, position.coords.longitude);
      }, console.log);
    }
  }, []);

  function getWeatherInfo(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={current,minutely,hourly}&units=imperial&appid=${WEATHER_MAP_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.daily);
      setWeatherInfo(data.daily);
    })
  }

  function getLocation(latitude, longitude) {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const location = data.results[0].components;
      setLocation({city: location.city, stateCode: location.state_code, countryCode: location.country_code})
    })
  }

  const weatherCards = weatherInfo && (
    weatherInfo.map(day => {
      const date = new Date(day.dt * 1000).toGMTString();
      const dayOfWeek = date.substring(0, 3);

      return (
        <WeatherCard
          key={day.dt}
          day={dayOfWeek}
          maxTemperature={day.temp.max}
          minTemperature={day.temp.min}
          imageUrl={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        />
      )
    })
  )

  return (
    <div className="app">
      {weatherCards}
    </div>
  );
}

export default App;
