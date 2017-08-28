import { EDIT_NEW_MOVIE_VALUE, CLEAR_NEW_MOVIE } from '../actions/types';

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
    case CLEAR_NEW_MOVIE: {
      return {...defaultMovie};
    }
    default:
      return state;
  }
}

export const validNewMovie = ({ newMovie }) => !!newMovie.title;

export default newMovie;