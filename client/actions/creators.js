import {
  ADD_MOVIE, REMOVE_MOVIE, EDIT_SINGLE_VALUE,
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
  type: EDIT_SINGLE_VALUE,
  movieIdx,
  movieField,
  newValue,
})