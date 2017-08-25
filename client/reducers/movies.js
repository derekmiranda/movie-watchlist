import { ADD_MOVIE, DELETE_MOVIE, UPDATE_VALUE } from '../actions/types';

const defaultMovie = {
  title: '',
  director: '',
  genres: '',
  actors: '',
  notes: '',
}

export const movie = (state = defaultMovie, action = {}) => {
  switch (action.type) {
    case UPDATE_VALUE:
      const { field, value } = action;
      return {
        ...state,
        [field]: value,
      }
    default:
      return state;
  }
}

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