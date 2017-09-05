import { combineReducers } from 'redux';

import movies from './movies';
import newMovie from './newMovie';
import fetching from './fetching';

const rootReducer = combineReducers({
  movies,
  newMovie,
  fetching,
});

export default rootReducer;