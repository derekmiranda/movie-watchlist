import test from 'ava';
import { isImmutable } from 'seamless-immutable';
import movie from '../movie';

const initMovieState = {
  title: null,
  director: null,
  actors: [],
  tags: [],
  notes: null,
}

test('Movie should be initialized w/ correct empty values', t => {
  t.deepEqual(movie(), initMovieState);
})