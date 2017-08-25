import * as types from './types';

export const addMovie = (movie) => ({
  type: types.ADD_MOVIE,
  movie: { ...movie },
})

export const deleteMovie = (movie_idx) => ({
  type: types.DELETE_MOVIE,
  movie_idx,
})
