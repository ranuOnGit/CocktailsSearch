import {
  FETCH_COCKTAILS_REQUEST,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_FAILURE,
} from '../actions/types';

const initialState = {
  loading: false,
  cocktails: [],
  error: false,
};

export const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_COCKTAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktails: action.payload,
      };
    case FETCH_COCKTAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
