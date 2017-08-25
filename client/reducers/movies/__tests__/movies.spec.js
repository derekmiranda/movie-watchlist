import test from 'ava';
import { isImmutable } from 'seamless-immutable';
import movies from '..';
import movie from '../movie';
import {
  addMovie, removeMovie, changeSingleValue, receiveMovies,
} from '../../../actions/creators';

test.beforeEach(t => {
  t.context.rawMovieData = require('./helpers/rawMovieData');
})

test('Movies should be initialized as empty array', t => {
  t.deepEqual(movies(), []);
})

test('Can add new movie to empty list', t => {
  const newMovie = t.context.rawMovieData[0];

  const actualList = movies(undefined, addMovie(newMovie));
  const expectedList = [movie(newMovie)];

  t.deepEqual(actualList, expectedList, 'Movie not added correctly');
})

test(`Adding new movie doesn't remove previous ones`, t => {
  const { rawMovieData } = t.context;
  const initRawMovies = rawMovieData.slice(0, -1);
  const newMovie = rawMovieData[rawMovieData.length - 1];

  const initMovies = movies(undefined, receiveMovies(initRawMovies));
  const actualList = movies(initMovies, addMovie(newMovie));
  const expectedList = rawMovieData.map(rawMovie => movie(rawMovie));

  t.deepEqual(actualList, expectedList, 'Movie not added correctly');
})

test('Can remove movie from list', t => {
  const { rawMovieData } = t.context;
  const targetIdx = 1;
  const expectedList = rawMovieData
    .filter((_, idx) => idx !== targetIdx)
    .map(rawMovie => movie(rawMovie))
  const actualList = movies(rawMovieData, removeMovie(targetIdx));

  t.deepEqual(actualList, expectedList, 'Movie not removed correctly');
})

test('Can change single value for one movie', t => {
  const { rawMovieData } = t.context;

  const movieIdx = 1;
  const movieField = 'director';
  const newValue = 'Martin Scorsese';
  const initMovies = movies(undefined, receiveMovies(rawMovieData));
  const editAction = changeSingleValue({ movieIdx, movieField, newValue });

  const actualMovies = movies(initMovies, editAction);
  const actualEditedMovie = actualMovies && actualMovies[movieIdx];
  const expectedEditedMovie = {
    ...rawMovieData[movieIdx],
    [movieField]: newValue
  };

  t.deepEqual(actualEditedMovie, expectedEditedMovie, 'Movie not edited correctly');
})