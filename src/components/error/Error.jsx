import React from 'react';
import './Error.css';
import { FaCocktail } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <section className='error-section'>
        <h1>
          oops!
          <br />
          no match found
          <br />
          try again
          <br />
          <Link to='/' className='error-link'>
            <FaCocktail size='15rem' />
          </Link>
        </h1>
      </section>
    </div>
  );
};

export default Error;
