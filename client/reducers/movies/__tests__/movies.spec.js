import test from 'ava';
import movies from '..';
import movie from '../movie';
import Immutable from 'seamless-immutable';
import {
  addMovie, removeMovie, editSingleValue
} from '../../../actions/creators';

test.beforeEach(t => {
  t.context.sampleMovies = Immutable(require('./helpers/sampleMovies'));
})

test('Movies should be initialized as empty array', t => {
  t.deepEqual(movies(), []);
})

test('Can add new movie to empty list', t => {
  const newMovie = t.context.sampleMovies[0];

  const actualList = movies(undefined, addMovie(newMovie));
  const expectedList = [movie(newMovie)];

  t.deepEqual(actualList, expectedList, 'Movie not added correctly');
})

test(`Adding new movie doesn't remove previous ones`, t => {
  const { sampleMovies } = t.context;
  const initMovies = sampleMovies.slice(0, -1);
  const newMovie = sampleMovies[sampleMovies.length - 1];

  const actualList = movies(initMovies, addMovie(newMovie));
  const expectedList = sampleMovies.map(rawMovie => movie(rawMovie));

  t.deepEqual(actualList, expectedList, 'Movie not added correctly');
})

test('Can remove movie from list', t => {
  const { sampleMovies } = t.context;
  const targetIdx = 1;
  const expectedList = sampleMovies
    .filter((_, idx) => idx !== targetIdx)
    .map(rawMovie => movie(rawMovie))
  const actualList = movies(sampleMovies, removeMovie(targetIdx));

  t.deepEqual(actualList, expectedList, 'Movie not removed correctly');
})

test('Can change single value for one movie', t => {
  const { sampleMovies } = t.context;

  const movieIdx = 1;
  const movieField = 'director';
  const newValue = 'Martin Scorsese';

  const editAction = editSingleValue({ movieIdx, movieField, newValue });
  const actualMovies = movies(sampleMovies, editAction);
  const actualEditedMovie = actualMovies && actualMovies[movieIdx];
  const expectedEditedMovie = sampleMovies[movieIdx].set(movieField, newValue);

  t.deepEqual(actualEditedMovie, expectedEditedMovie, 'Movie not edited correctly');
})