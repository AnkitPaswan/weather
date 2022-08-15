import { useState } from 'react';
import './Searchbar.css';

const Searchbar = ({ setQuery }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') {
      setQuery({ q: city });
    }
  };

  return (
    <div className='input-group mb-3 '>
      <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type='text'
        className='form-control '
        placeholder='Search for city...'
      />
      <button
        className='btn btn-outline-success ;'
        type='submit'
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
