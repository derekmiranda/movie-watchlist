import movie from './movie';
import Immutable from 'seamless-immutable';
import { ADD_MOVIE, REMOVE_MOVIE } from '../../actions/types';

const movies = (state = Immutable([]), action = {}) => {
  switch (action.type) {
    case ADD_MOVIE:
      const newMovie = movie(undefined, action);
      return state.concat(newMovie);
    case REMOVE_MOVIE:
      const { targetIdx } = action;
      return state.filter((_, idx) => idx !== targetIdx);
    default:
      return state;      
  }
}

export default movies;