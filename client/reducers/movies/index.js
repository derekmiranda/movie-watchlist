import movie from './movie';
import Immutable, { isImmutable } from 'seamless-immutable';
import {
  ADD_MOVIE, REMOVE_MOVIE, CHANGE_SINGLE_VALUE, RECEIVE_MOVIES,
} from '../../actions/types';
import { addMovie } from '../../actions/creators';

const movies = (state = Immutable([]), action = {}) => {
  switch (action.type) {
    case ADD_MOVIE:
      const newMovie = movie(undefined, action);
      return state.concat(newMovie);
    case RECEIVE_MOVIES:
      const { movieData } = action;
      const processedMovies = movieData.map(rawMovie => movie(undefined, addMovie(rawMovie)));
      const stateWithNewMovies = state.concat(processedMovies);
      return stateWithNewMovies;
    case REMOVE_MOVIE:
      const { targetIdx } = action;
      return state.filter((_, idx) => idx !== targetIdx);
    case CHANGE_SINGLE_VALUE:
      const { movieIdx, movieField, newValue } = action;
      const changedState = state.map((currMovie, idx) => (idx === movieIdx ?
          movie(currMovie, action) :
          currMovie
      ))
      return changedState;
    default:
      return state;
  }
}

export default movies;