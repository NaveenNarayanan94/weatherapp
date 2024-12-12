import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/card.jsx';


const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  const getData = async () => {
    const { data } = await axios.get('https://api.weatherapi.com/v1/current.json?q=13.10823487741827,%2080.09387105494231&key=9e496239986444e3819114029240507')
    setCurrentWeather(data);
  }

  useEffect(() => {
    getData();
  }, [])

  console.log(currentWeather);

  return (
    <><h1 className='title'>Weather
    </h1>
    <div className='box'>
      <Card name="Temperature" num={currentWeather?.current?.temp_c + "°C"}  />
      <Card name="Precipitation" num={currentWeather?.current?.precip_mm + "mm"} />
      <Card name={currentWeather?.current?.wind_dir}num={currentWeather?.current?.wind_kph+"km/h"} />
    </div>
    </>
  )
}

export default App;
