import * as types from './types';

export const addMovie = (movie) => ({
  type: types.ADD_MOVIE,
  movie: { ...movie },
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