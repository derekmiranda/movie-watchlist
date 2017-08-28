import { EDIT_NEW_MOVIE_VALUE } from '../actions/types';

const defaultMovie = {
  title: '',
  director: '',
  genres: '',
  actors: '',
  notes: '',
}

const newMovie = (state = defaultMovie, action = {}) => {
  switch (action.type) {
    case EDIT_NEW_MOVIE_VALUE: {
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

export const validNewMovie = ({ newMovie }) => !!newMovie.title;

export default newMovie;