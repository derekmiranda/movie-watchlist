import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { fetchMovies, saveNewMovie, removeMovie } from '../services/moviesApi';
import { FETCH_STARTED, CREATE_NEW_MOVIE, REQUEST_DELETE_MOVIE } from '../actions/types';
import {
  fetchSucceeded, 
  addMovie, 
  requestDeleteMovie, 
  deleteMovie,
  clearNewMovie,
} from '../actions/creators';

export function* fetchData(action) {
  try {
    const movies = yield call(fetchMovies);
    yield put(fetchSucceeded(movies));
  } catch (err) {
    console.error(err);
  }
}

function* watchFetchData() {
  yield takeLatest(FETCH_STARTED, fetchData);
}

export function* postMovie({ movie }) {
  try {
    const newMovie = yield call(saveNewMovie, movie);
    yield put(addMovie(newMovie));
    yield put(clearNewMovie())
  } catch (err) {
    console.error(err);
  }
}

function* watchSaveNewMovie() {
  yield takeEvery(CREATE_NEW_MOVIE, postMovie);
}

export function* clearMovie({ movie, movieIdx }) {
  try {
    console.log('movie', movie);
    yield call(removeMovie, movie);
    yield put(deleteMovie(movieIdx));
  } catch (err) {
    console.error(err);
  }
}

function* watchRequestDeleteMovie() {
  yield takeEvery(REQUEST_DELETE_MOVIE, clearMovie);
}

export default function* rootSaga() {
  yield [watchFetchData(), watchSaveNewMovie(), watchRequestDeleteMovie()];
}