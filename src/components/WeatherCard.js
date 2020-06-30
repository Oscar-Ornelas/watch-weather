import React from 'react';

function WeatherCard(props) {
  return (
    <div className="weather-card">
      <p className="weather-card-day">{props.day}</p>
      <div className="weather-card-temperatures">
        <p className="weather-card-high-temperature">{props.highTemperature}</p>
        <p className="weather-card-low-temperature">{props.lowTemperature}</p>
      </div>
      <img src={props.imageUrl} className="weather-card-image"/>
    </div>
  )
}

export default WeatherCard;
