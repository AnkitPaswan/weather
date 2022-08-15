import React from 'react';
import { iconUrlFromCode } from '../Services/WeatherService';

const DailyForecast = ({ items }) => {
  return (
    <div className='card text-light '>
      <div className='card-body p-4'>
        <h4 className='fst-italic'>Daily Forecast</h4>
        <hr />
        <div className='carousel-inner'>
          <div className=' carousel-item active'>
            <div className='scroll d-flex justify-content-around text-center mb-4 pb-3 pt-5'>
              {items.map((item) => (
                <div className='flex-column'>
                  <p className='small'>
                    <strong>{item.temp.toFixed()}°C</strong>
                  </p>
                  <img src={iconUrlFromCode(item.icon)} width='100%' alt='' />
                  <p className='mt-3 mb-0'>
                    <strong>{item.title}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
