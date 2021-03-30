import { combineReducers } from 'redux';
import { cocktailsReducer } from './cocktailsReducer';

export const rootReducer = combineReducers({
  ckList: cocktailsReducer,
});
