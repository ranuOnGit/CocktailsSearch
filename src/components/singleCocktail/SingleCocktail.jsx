// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Axios from 'axios';
import Loading from '../loading/Loading';
import './SingleCocktail.css';

const SingleCocktail = () => {
  const { idDrink } = useParams();
  const [cocktail, setCocktail] = useState('');

  const loading = useSelector((state) => state.ckList.loading);

  const getCocktail = async () => {
    const response = await Axios(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`,
    );
    setCocktail(response.data.drinks[0]);
  };

  useEffect(() => {
    getCocktail();
  }, [idDrink]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='sck-div'>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <div>
        <p>
          <span>
            <b>name :</b>
          </span>{' '}
          {cocktail.strDrink}
        </p>
        <p>
          <span>
            <b>category :</b>
          </span>{' '}
          {cocktail.strCategory}
        </p>
        <p>
          <span>
            <b>info :</b>
          </span>{' '}
          {cocktail.strAlcoholic}
        </p>
        <p>
          <span>
            <b>glass :</b>
          </span>{' '}
          {cocktail.strGlass}
        </p>
        <p>
          <span>
            <b>instructions :</b>
          </span>{' '}
          {cocktail.strInstructions}
        </p>
        {cocktail.strIngredient1 ? (
          <p>
            <span>
              <b>ingredients :</b>
            </span>{' '} <br/>
            {cocktail.strIngredient1} ({cocktail.strMeasure1})
          </p>
        ) : null}
        {cocktail.strIngredient2 ? (
          <p>
            {cocktail.strIngredient2} ({cocktail.strMeasure2})
          </p>
        ) : null}
        {cocktail.strIngredient3 ? (
          <p>
            {cocktail.strIngredient3} ({cocktail.strMeasure3})
          </p>
        ) : null}
        {cocktail.strIngredient4 ? (
          <p>
            {cocktail.strIngredient4} ({cocktail.strMeasure4})
          </p>
        ) : null}
        {cocktail.strIngredient5 ? (
          <p>
            {cocktail.strIngredient5} ({cocktail.strMeasure5})
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SingleCocktail;

// idDrink,
//   strDrink,
//   strDrinkThumb,
//   strAlcoholic,
//   strCategory,
//   strGlass,
//   strInstructions,
//   strIngredient1,
//   strIngredient2,
//   strIngredient3,
//   strIngredient4,
//   strIngredient5,
//   strMeasure1,
//   strMeasure2,
//   strMeasure3,
//   strMeasure4,
//   strMeasure5,
