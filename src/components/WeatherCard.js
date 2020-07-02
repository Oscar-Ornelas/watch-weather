import React from 'react';

function WeatherCard(props) {
  return (
    <section onClick={() => props.getCurrentDay(props.index)} className="weather-card">
      <p className="weather-card-day">{props.day}</p>
      <div className="weather-card-temperatures">
        <p className="weather-card-max-temperature">{props.maxTemperature}&#176;</p>
        <p className="weather-card-min-temperature">{props.minTemperature}&#176;</p>
      </div>
      <img src={props.imageUrl} className="weather-card-image"/>
    </section>
  )
}

export default WeatherCard;
