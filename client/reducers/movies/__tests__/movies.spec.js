import test from 'ava';
import { isImmutable } from 'seamless-immutable';
import movies from '..';
import {
  ADD_MOVIE
} from '../../../actions/types';
import {
  addMovie
} from '../../../actions/creators';

test('Movies should be initialized as empty array', t => {
  t.deepEqual(movies(), []);
})

test(`Can add movies w/ ${ADD_MOVIE}`, t => {
  const newMovie = {
    title: 'Toy Story',
    director: 'John Lasseter',
    actors: ['Tom Hanks', 'Tim Allen'],
    tags: ['Animated', '3D', 'Comedy'],
    notes: 'G.O.A.T.',
  }

  const actualState = movies(undefined, addMovie(newMovie));
  const expectedState = [newMovie];

  t.deepEqual(actualState, expectedState, 'Movie not added correctly');
})