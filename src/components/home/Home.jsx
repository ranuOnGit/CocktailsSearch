import React, { useState } from 'react';
import './Home.css';
import hero from '../../utils/hero.jpeg';
import Cocktails from '../cocktails/Cocktails';
import Loading from '../loading/Loading';
import { useDispatch } from 'react-redux';
import { fetchCocktails } from '../../actions/cocktails';

const Home = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCocktails(query));
    setQuery('');
  };

  return (
    <div className='home-div'>
      <img src={hero} alt='hero' className='hero' />
      <form className='form-div' onSubmit={handleSubmit}>
        <input
          type='text'
          value={query}
          onChange={handleChange}
          placeholder='search cocktails'
        />
      </form>
      <Cocktails />
    </div>
  );
};

export default Home;
