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
    case UPDATE_VALUE: {
      const { field, value } = action;
      return {
        ...state,
        [field]: value,
      }
    }
    default:
      return state;
  }
}

const movies = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MOVIE: {
      const { movie } = action;
      return state.concat(movie);
    }
    case DELETE_MOVIE: {
      const { movieIdx } = action;
      return state.filter((_, idx) => idx !== movieIdx);
    }
    case UPDATE_VALUE: {
      const { movieIdx, field, value } = action;
      const updateTargetMovie = (origMovie, idx) => {
        return idx === movieIdx ? movie(origMovie, action) : origMovie;
      }
      return state.map(updateTargetMovie);
    }
    default:
      return state;
  }
}

export default movies;