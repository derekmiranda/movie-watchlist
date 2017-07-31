import Immutable from 'seamless-immutable';
import { ADD_MOVIE, CHANGE_SINGLE_VALUE } from '../../actions/types';

const initMovieState = Immutable({
  title: null,
  director: null,
  actors: [],
  tags: [],
  notes: null,
})

const movie = (state = initMovieState, action = {}) => {
  switch (action.type) {
    case ADD_MOVIE:
      return Immutable(action.movie);
    case CHANGE_SINGLE_VALUE:
      const { movieField, newValue } = action;
      return state.set(movieField, newValue);
    default:
      return state;    
  }
}

export default movie;