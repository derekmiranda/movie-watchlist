import Immutable from 'seamless-immutable';

const initMovieState = Immutable({
  title: null,
  director: null,
  actors: [],
  tags: [],
  notes: null,
})

const movie = (state = initMovieState, action = {}) => {
  switch (action.type) {
    default:
      return state;      
  }
}

export default movie;