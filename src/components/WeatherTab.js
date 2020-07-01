import React from 'react';

function WeatherTab(props) {
  return (
    <section className="weather-tab">
      <div className="weather-tab-general">
        <h3 className="weather-tab-city">{props.city}</h3>
        <p className="weather-tab-day">{props.day}</p>
        <p className="weather-tab-type">{props.weatherType}</p>
      </div>
      <div className="weather-tab-main">
        <div>
          <img className="weather-tab-image" src={props.weatherImage}/>
          <h2 className="weather-tab-temp">{props.temperature}</h2>
        </div>
        <div>
          <p className="weather-tab-info">Precipitation: {props.precipitation}%</p>
          <p className="weather-tab-info">Humidity: {props.humidity}%</p>
          <p className="weather-tab-info">Wind: {props.wind} mph</p>
        </div>
      </div>
    </section>
  )
}

export default WeatherTab;
