import {
  ADD_MOVIE, REMOVE_MOVIE, RECEIVE_MOVIES,
  CHANGE_SINGLE_VALUE, RECEIVE_SINGLE_VALUE, TOGGLE_SINGLE_VALUE_EDITING,
} from './types';

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  movie,
})

export const removeMovie = (targetIdx) => ({
  type: REMOVE_MOVIE,
  targetIdx,
})

export const receiveMovies = (movieData) => ({
  type: RECEIVE_MOVIES,
  movieData,
})

export const changeSingleValue = ({ movieIdx, movieField, newValue }) => ({
  type: CHANGE_SINGLE_VALUE,
  movieIdx,
  movieField,
  newValue,
})

export const receiveSingleValue = (value) => ({
  type: RECEIVE_SINGLE_VALUE,
  value,
})

export const toggleSingleValueEditing = () => ({
  type: TOGGLE_SINGLE_VALUE_EDITING,
})