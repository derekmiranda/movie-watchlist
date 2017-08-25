import test from 'ava';
import movie from '../movie';
import singleValue from '../singleValue';
import valueList from '../valueList';
import { addMovie, changeSingleValue } from '../../../actions/creators';

test.beforeEach(t => {
  t.context.emptyMovieState = {
    title: singleValue(),
    director: singleValue(),
    actors: valueList(),
    tags: valueList(),
    notes: singleValue(),
  }
  t.context.sampleMovie = {
    title: 'Toy Story',
    director: 'John Lasseter',
    actors: ['Tom Hanks', 'Tim Allen'],
    tags: ['Animated', '3D', 'Comedy'],
    notes: 'G.O.A.T.',
  }
  t.context.sampleMovieState = {
    title: singleValue('Toy Story'),
    director: singleValue('John Lasseter'),
    actors: valueList(['Tom Hanks', 'Tim Allen']),
    tags: valueList(['Animated', '3D', 'Comedy']),
    notes: singleValue('G.O.A.T.'),
  }
})

test('Movie should be initialized w/ correct empty values', t => {
  const { emptyMovieState } = t.context;
  t.deepEqual(movie(), emptyMovieState);
})

test('Initializes w/ passed in movie data', t => {
  const { sampleMovie, sampleMovieState } = t.context;
  t.deepEqual(movie(sampleMovie), sampleMovieState);
})