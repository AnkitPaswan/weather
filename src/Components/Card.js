import { formtToLocalTime } from '../Services/WeatherService';
import { iconUrlFromCode } from '../Services/WeatherService';
import './Card.css';

const Card = ({
  weather: {
    temp,
    dt,
    timezone,
    name,
    country,
    details,
    feels_like,
    speed,
    humidity,
    sunrise,
    sunset,
    temp_max,
    icon,
  },
}) => {
  return (
    <div className='card mb-4 gradient-custom text-light'>
      <div className='card-body mb-4 p-4'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <h3 className='fst-italic '>Today's Highlight</h3>
            <hr />
            <p className='time'> {formtToLocalTime(dt, timezone)}</p>
            <hr />
            <div className='d-flex justify-content-between mb-2 pb-2'>
              <div>
                <h3 className='display-2 mt-4'>
                  <strong>{`${temp.toFixed()}`}°C</strong>
                </h3>
                <div className='d-flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='24'
                    fill='currentColor'
                    className='bi bi-geo-alt-fill pt-1'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                  </svg>
                  <h3 className='fw-24 mb-0  text-light'>{`${name},${country}`}</h3>
                </div>
                <h5 className=' mb-0 pt-3 text-light'>{details}</h5>
                {/* <p className='time'> {formtToLocalTime(dt, timezone)}</p> */}
              </div>

              <img src={iconUrlFromCode(icon)} alt='' width='250' />
            </div>
          </div>
        </div>
        <hr />

        <div className='d-flex justify-content-around text-center mb-0 pb-0 pt-0'>
          <div className='flex-column'>
            <strong>Feels like</strong>
            <h5 className='pt-2'>{feels_like.toFixed()}°</h5>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='bi bi-thermometer-high'
              viewBox='0 0 16 16'
            >
              <path d='M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z' />
              <path d='M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z' />
            </svg>
          </div>
          <div className='flex-column'>
            <strong>Humidity</strong>
            <h5 className='pt-2'>{humidity}%</h5>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='bi bi-droplet'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z'
              />
              <path
                fillRule='evenodd'
                d='M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z'
              />
            </svg>
          </div>
          <div className='flex-column'>
            <strong>Wind Speed</strong>
            <h5 className='pt-2'>{speed.toFixed()} km/h</h5>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='bi bi-wind'
              viewBox='0 0 16 16'
            >
              <path d='M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z' />
            </svg>
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-around text-center mb-0 pb-0 pt-0'>
          <div className='flex-column'>
            <strong>Sunrise</strong>
            <p className='pt-2'>
              {formtToLocalTime(sunrise, timezone, 'hh:mm a')}
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='bi bi-sunrise-fill'
              viewBox='0 0 16 16'
            >
              <path d='M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z' />
            </svg>
          </div>
          <div className='flex-column'>
            <strong>Sunset</strong>
            <p className='pt-2'>
              {formtToLocalTime(sunset, timezone, 'hh:mm a')}
            </p>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='bi bi-sunset-fill'
              viewBox='0 0 16 16'
            >
              <path d='M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z' />
            </svg>
          </div>
          <div className='flex-column'>
            <strong>Max Temp</strong>
            <p className='pt-2'>{temp_max.toFixed()}°</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='bi bi-thermometer-sun'
              viewBox='0 0 16 16'
            >
              <path d='M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z' />
              <path d='M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
