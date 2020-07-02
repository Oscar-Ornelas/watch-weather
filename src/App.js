import React, {useEffect, useState} from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import WeatherTab from './components/WeatherTab';

function App() {
  const WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
  const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;
  const [location, setLocation] = useState({});
  const [weatherInfo, setWeatherInfo]  = useState([]);
  const [currentDay, setCurrentDay] = useState(null);

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
      setCurrentDay(data.daily[0]);
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

  function getCurrentDay(index) {
    setCurrentDay(weatherInfo[index]);
  }

  function getDayOfWeek(currentDay) {
    const date = new Date(currentDay.dt * 1000).getDay();

    if(date === 0) {
      return "Sunday";
    } else if(date === 1) {
      return "Monday";
    } else if(date === 2) {
      return "Tuesday";
    } else if(date === 3) {
      return "Wednesday";
    } else if(date === 4) {
      return "Thursday";
    } else if(date === 5) {
      return "Friday";
    } else if(date === 6) {
      return "Saturday";
    }

  }

  const weatherCards = weatherInfo && (
    weatherInfo.map((day, i) => {
      const date = new Date(day.dt * 1000).toGMTString();
      const dayOfWeek = date.substring(0, 3);

      return (
        <WeatherCard
          getCurrentDay={getCurrentDay}
          key={i}
          index={i}
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
      {currentDay !== null && (
        <WeatherTab
          city={`${location.city}, ${location.stateCode}`}
          day={getDayOfWeek(currentDay)}
          weatherType={currentDay.weather[0].main}
          weatherImage={`http://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`}
          temperature={currentDay.temp.day.toString().substring(0, 2)}
          precipitation={currentDay.clouds}
          humidity={currentDay.humidity}
          wind={currentDay.wind_speed}
        />
      )}

      <section className="weather-card-container">
        {weatherCards}
      </section>
    </div>
  );
}

export default App;
