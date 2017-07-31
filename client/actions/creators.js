import {
  ADD_MOVIE, REMOVE_MOVIE
} from './types';

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  movie,
})

export const removeMovie = (targetIdx) => ({
  type: REMOVE_MOVIE,
  targetIdx,
})