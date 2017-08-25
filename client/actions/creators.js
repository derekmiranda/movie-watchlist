import * as types from './types';

export const addMovie = (movie) => ({
  type: types.ADD_MOVIE,
  movie: { ...movie },
})