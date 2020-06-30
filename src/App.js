import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import rainy_cloudy from './imgs/rainy_cloudy.png';

function App() {
  return (
    <div className="App">
      <WeatherCard day="Mon" highTemperature="87" lowTemperature="63" imageUrl={rainy_cloudy}/>
    </div>
  );
}

export default App;
