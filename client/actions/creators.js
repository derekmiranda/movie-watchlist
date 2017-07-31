import {
  ADD_MOVIE
} from './types';

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  movie,
})