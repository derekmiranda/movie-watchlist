import test from 'ava';
import { isImmutable } from 'seamless-immutable';
import movies from '..';
import {
  addMovie, removeMovie
} from '../../../actions/creators';

test('Movies should be initialized as empty array', t => {
  t.deepEqual(movies(), []);
})

test('Can add new movie to empty list', t => {
  const newMovie = {
    title: 'Toy Story',
    director: 'John Lasseter',
    actors: ['Tom Hanks', 'Tim Allen'],
    tags: ['Animated', '3D', 'Comedy'],
    notes: 'G.O.A.T.',
  }

  const actualList = movies(undefined, addMovie(newMovie));
  const expectedList = [newMovie];

  t.deepEqual(actualList, expectedList, 'Movie not added correctly');
})

test(`Adding new movie doesn't remove previous ones`, t => {
  const sampleMovies = require('./sampleMovies');
  const initMovies = sampleMovies.slice();
  const newMovie = initMovies.pop();

  const actualList = movies(initMovies, addMovie(newMovie));

  t.deepEqual(actualList, sampleMovies, 'Movie not added correctly');
})

test('Can remove movie from list', t => {
  const sampleMovies = require('./sampleMovies');
  const targetIdx = 1;
  const expectedList = sampleMovies.filter((_, idx) => idx !== targetIdx);
  const actualList = movies(sampleMovies, removeMovie(targetIdx));

  t.deepEqual(actualList, expectedList, 'Movie not removed correctly');
})