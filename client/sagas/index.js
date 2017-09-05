import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchMovies } from '../services/moviesService';
import { FETCH_STARTED } from '../actions/types';
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

export default function* rootSaga() {
  yield watchFetchData();
}