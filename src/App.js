import Card from './Components/Card';
import HourlyForecast from './Components/HourlyForecast';
import DailyForecast from './Components/DailyForecast';
import getFormattedWeatherData from './Services/WeatherService';
import React, { useEffect, useState } from 'react';
import Searchbar from './Components/Searchbar';
import './App.css';

function App() {
  const [query, setQuery] = useState({ q: 'Malout' });

  const [units, setUnits] = useState('metric');

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  return (
    <div>
      <section className=' ankit'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-7 col-xl-6'>
              <Searchbar
                setQuery={setQuery}
                units={units}
                setUnits={setUnits}
              />
              {weather && (
                <div>
                  <Card weather={weather} />
                  <HourlyForecast items={weather.hourly} />
                  <DailyForecast items={weather.daily} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
