import { ADD_MOVIE } from '../actions/types';

const movies = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MOVIE:
      const { movie } = action;
      return state.concat(movie);
    default:
      return state;
  }
}

export default movies;