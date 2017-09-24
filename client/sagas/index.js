import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { fetchMovies, saveNewMovie } from '../services/moviesApi';
import { FETCH_STARTED, CREATE_NEW_MOVIE } from '../actions/types';
import { fetchSucceeded, addMovie, clearNewMovie } from '../actions/creators';

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

function* watchsaveNewMovie() {
  yield takeEvery(CREATE_NEW_MOVIE, postMovie);
}

export default function* rootSaga() {
  yield [watchFetchData(), watchsaveNewMovie()];
}