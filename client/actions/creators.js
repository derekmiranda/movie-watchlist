import * as types from './types';

export const addMovie = (movie) => ({
  type: types.ADD_MOVIE,
  movie: { ...movie },
})

export const createNewMovie = (newMovie) => ({
  type: types.CREATE_NEW_MOVIE,
  newMovie: { ...newMovie },
})

export const deleteMovie = (movieIdx) => ({
  type: types.DELETE_MOVIE,
  movieIdx,
})

export const editNewMovieValue = (field, value) => ({
  type: types.EDIT_NEW_MOVIE_VALUE,
  field,
  value,
})

export const updateValue = ({ movieIdx, field, value }) => ({
  type: types.UPDATE_VALUE,
  movieIdx,
  field,
  value,
})

export const clearNewMovie = () => ({
  type: types.CLEAR_NEW_MOVIE,
})


export const submitNewMovie = (movie) => [
  addMovie(movie),
  clearNewMovie(),
]

export const fetchStarted = () => ({
  type: types.FETCH_STARTED,
})

export const fetchSucceeded = (data) => ({
  type: types.FETCH_SUCCEEDED,
  data,
})