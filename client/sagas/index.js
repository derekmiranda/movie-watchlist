import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { fetchMovies, addMovie } from '../services/moviesApi';
import { FETCH_STARTED, ADD_MOVIE } from '../actions/types';
import { fetchSucceeded } from '../actions/creators';

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
    const res = yield call(addMovie, movie);
  } catch (err) {
    console.error(err);
  }
}

function* watchAddMovie() {
  yield takeEvery(ADD_MOVIE, postMovie);
}

export default function* rootSaga() {
  yield [watchFetchData(), watchAddMovie()];
}