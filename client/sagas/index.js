import { call, put } from 'redux-saga/effects';
import { fetchMovies } from '../services/moviesService';
import { fetchSucceeded } from '../actions/creators';

export function* fetchData(action) {
  const movies = yield call(fetchMovies);
  yield put(fetchSucceeded(movies));
}