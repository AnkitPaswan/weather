import React from 'react';
import { useState } from 'react';
import './Header.css';

const Header = ({ setQuery }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') {
      setQuery({ q: city });
    }
  };
  return (
    <div>
      <nav className='navbar navbar-expand-sm fixed-top  navbar-light bg-light'>
        <div className='container-fluid'>
          <div className='d-flex pt-0'>
            <img src='logo.png' height='30' width='30' alt='' />
            <h3>Weather</h3>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span
              className='glyphicon 
                glyphicon-search'
            >
              <img src='search.png' height='30' width='30' alt='' />
            </span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
            <div className='d-flex'>
              <input
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                type='text'
                className='form-control me-2'
                placeholder='Search for city...'
              />
              <button
                className='btn btn-outline-success '
                type='submit'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={handleSearchClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
