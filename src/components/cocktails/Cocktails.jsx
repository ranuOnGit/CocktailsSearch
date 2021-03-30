import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import { CgDetailsMore } from 'react-icons/cg';
import './Cocktails.css';

const Cocktails = () => {
  const cocktails = useSelector((state) => state.ckList.cocktails);
  const error = useSelector((state) => state.ckList.error);
  const loading = useSelector((state) => state.ckList.loading);

  if (loading) {
    return <Loading />;
  }
  if (error || !cocktails) {
    return <Error />;
  }
  return (
    <div className='ckList'>
      {cocktails.map((cocktail) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic } = cocktail;
        return (
          <div className='ck-div'>
            <img src={strDrinkThumb} alt={strDrink} />
            <h2>{strDrink}</h2>
            <p>{strAlcoholic}</p>
            <Link to={`/cocktail/${idDrink}`} className='ck-link'>
              <CgDetailsMore size='2rem' color='maroon' />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cocktails;

//idDrink, strDrinkThumb, strAlcoholic, strCategory, strGlass, strInstructions,
// strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5
//strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5
