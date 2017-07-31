import {
  ADD_MOVIE, REMOVE_MOVIE, CHANGE_SINGLE_VALUE,
} from './types';

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  movie,
})

export const removeMovie = (targetIdx) => ({
  type: REMOVE_MOVIE,
  targetIdx,
})

export const editSingleValue = ({ movieIdx, movieField, newValue }) => ({
  type: CHANGE_SINGLE_VALUE,
  movieIdx,
  movieField,
  newValue,
})