import movie from './movie';
import Immutable, { isImmutable } from 'seamless-immutable';
import { ADD_MOVIE, REMOVE_MOVIE, CHANGE_SINGLE_VALUE } from '../../actions/types';

const movies = (state = Immutable([]), action = {}) => {
  switch (action.type) {
    case ADD_MOVIE:
      const newMovie = movie(undefined, action);
      return state.concat(newMovie);
    case REMOVE_MOVIE:
      const { targetIdx } = action;
      return state.filter((_, idx) => idx !== targetIdx);
    case CHANGE_SINGLE_VALUE:
      const { movieIdx, movieField, newValue } = action;
      return state.map((currMovie, idx) => idx === movieIdx ?
          movie(currMovie, action) :
          currMovie
      )
    default:
      return state;
  }
}

export default movies;