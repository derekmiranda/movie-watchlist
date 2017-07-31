import Immutable from 'seamless-immutable';
import singleValue from './singleValue';
import valueList from './valueList';
import { ADD_MOVIE, CHANGE_SINGLE_VALUE } from '../../actions/types';

const initMovieState = Immutable({
  title: singleValue(),
  director: singleValue(),
  actors: valueList(),
  tags: valueList(),
  notes: singleValue(),
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