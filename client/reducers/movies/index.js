import movie from './movie';
import Immutable from 'seamless-immutable';

const movies = (state = Immutable([]), action = {}) => {
  switch (action.type) {
    default:
      return state;      
  }
}

export default movies;