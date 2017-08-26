import { combineReducers } from 'redux';
import movies from './movies';
import newMovie from './newMovie';

const rootReducer = combineReducers({
  movies,
  newMovie,
});

export default rootReducer;