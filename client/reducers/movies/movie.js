import Immutable from 'seamless-immutable';
import singleValue from './singleValue';
import valueList from './valueList';
import {
  ADD_MOVIE, CHANGE_SINGLE_VALUE, RECEIVE_MOVIES
} from '../../actions/types';

const initMovieState = Immutable({
  title: singleValue(),
  director: singleValue(),
  actors: valueList(),
  tags: valueList(),
  notes: singleValue(),
})

const processRawMovie = (rawMovie, action) => {
  const processedMovie = Object.keys(rawMovie).reduce((newObj, key) => {
    const rawProp = rawMovie[key];

    if (Array.isArray(rawProp)) {
      newObj[key] = valueList(rawProp, action);
    } else {
      newObj[key] = singleValue(rawProp, action);
    }

    return newObj;
  }, {});

  return processedMovie;
}

const movie = (state = initMovieState, action = {}) => {
  switch (action.type) {
    case ADD_MOVIE:
      const { movie } = action;
      const newMovie = processRawMovie(movie, action);
      return Immutable(newMovie);
    case CHANGE_SINGLE_VALUE:
      const { movieField, newValue } = action;
      return state.set(movieField, singleValue(newValue, action));
    default:
      return state;    
  }
}

export default movie;