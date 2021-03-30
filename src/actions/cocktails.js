import Axios from 'axios';
import {
  FETCH_COCKTAILS_REQUEST,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_FAILURE,
} from './types';

export const fetchCocktails = (query) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_COCKTAILS_REQUEST,
  });
  try {
    const response = await Axios(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
    );
    dispatch({
      type: FETCH_COCKTAILS_SUCCESS,
      payload: response.data.drinks,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COCKTAILS_FAILURE,
    });
  }
};
