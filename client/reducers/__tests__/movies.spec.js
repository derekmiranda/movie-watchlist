import test from 'ava';
import { isImmutable } from 'seamless-immutable';
import movies from '../movies';

test('Movies should be initialized as empty array', t => {
  t.deepEqual(movies(), []);
})

test(`State shouldn't change w/ non-existent action`, t => {
  t.deepEqual(movies([], {
    type: 'NONEXISTENT'
  }), []);
})