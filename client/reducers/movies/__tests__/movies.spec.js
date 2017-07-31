import test from 'ava';
import movies from '..';
import {
  addMovie, removeMovie
} from '../../../actions/creators';

test.beforeEach(t => {
  t.context.sampleMovies = require('./helpers/sampleMovies');
})

test('Movies should be initialized as empty array', t => {
  t.deepEqual(movies(), []);
})

test('Can add new movie to empty list', t => {
  const newMovie = t.context.sampleMovies[0];

  const actualList = movies(undefined, addMovie(newMovie));
  const expectedList = [newMovie];

  t.deepEqual(actualList, expectedList, 'Movie not added correctly');
})

test(`Adding new movie doesn't remove previous ones`, t => {
  const { sampleMovies } = t.context;
  const initMovies = sampleMovies.slice();
  const newMovie = initMovies.pop();

  const actualList = movies(initMovies, addMovie(newMovie));

  t.deepEqual(actualList, sampleMovies, 'Movie not added correctly');
})

test('Can remove movie from list', t => {
  const { sampleMovies } = t.context;
  const targetIdx = 1;
  const expectedList = sampleMovies.filter((_, idx) => idx !== targetIdx);
  const actualList = movies(sampleMovies, removeMovie(targetIdx));

  t.deepEqual(actualList, expectedList, 'Movie not removed correctly');
})