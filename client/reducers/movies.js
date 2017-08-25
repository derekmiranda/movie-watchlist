import { ADD_MOVIE, DELETE_MOVIE } from '../actions/types';

const movies = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MOVIE:
      const { movie } = action;
      return state.concat(movie);
    case DELETE_MOVIE:
      const { movie_idx } = action;
      return state.filter((_, idx) => idx !== movie_idx);
    default:
      return state;
  }
}

export default movies;