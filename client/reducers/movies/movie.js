import Immutable from 'seamless-immutable';
import { ADD_MOVIE } from '../../actions/types';

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
    default:
      return state;    
  }
}

export default movie;