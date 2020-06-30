import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import rainy_cloudy from './imgs/rainy_cloudy.png';
import partly_cloudy from './imgs/partly_cloudy.png';
import sunny from './imgs/sunny.png';

function App() {
  return (
    <div className="app">
      <WeatherCard day="Mon" maxTemperature="87" minTemperature="63" imageUrl={rainy_cloudy}/>
      <WeatherCard day="Tue" maxTemperature="87" minTemperature="63" imageUrl={partly_cloudy}/>
      <WeatherCard day="Wed" maxTemperature="87" minTemperature="63" imageUrl={rainy_cloudy}/>
      <WeatherCard day="Thu" maxTemperature="87" minTemperature="63" imageUrl={partly_cloudy}/>
      <WeatherCard day="Fri" maxTemperature="87" minTemperature="63" imageUrl={sunny}/>
      <WeatherCard day="Sat" maxTemperature="87" minTemperature="63" imageUrl={partly_cloudy}/>
      <WeatherCard day="Sun" maxTemperature="87" minTemperature="63" imageUrl={sunny}/>
    </div>
  );
}

export default App;
