import React from 'react';

function WeatherCard(props) {

  function onClick() {
    props.getCurrentDay(props.index);
  }

  return (
    <section style={{border: props.currentCard ? "0.5px solid #333333" : "none"}} onClick={onClick} className="weather-card">
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
