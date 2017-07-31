import test from 'ava';
import Immutable from 'seamless-immutable';
import movie from '../movie';
import singleValue from '../singleValue';
import valueList from '../valueList';
import { editSingleValue } from '../../../actions/creators';

test.beforeEach(t => {
  t.context.emptyMovieState = Immutable({
    title: singleValue(),
    director: singleValue(),
    actors: valueList(),
    tags: valueList(),
    notes: singleValue(),
  })
  t.context.sampleMovieState = Immutable({
    title: singleValue('Toy Story'),
    director: singleValue('John Lasseter'),
    actors: valueList(['Tom Hanks', 'Tim Allen']),
    tags: valueList(['Animated', '3D', 'Comedy']),
    notes: singleValue('G.O.A.T.'),
  })
})

test('Movie should be initialized w/ correct empty values', t => {
  const { emptyMovieState } = t.context;
  t.deepEqual(movie(), emptyMovieState);
})

test('Initializes w/ passed in movie data', t => {
  const { sampleMovieState } = t.context;
  t.deepEqual(movie(sampleMovieState), sampleMovieState);

})

test('Can edit a single value', t => {
  const { sampleMovieState } = t.context;
  
  const movieField = 'director';
  const newValue = 'Martin Scorsese';
  const editAction = editSingleValue({ movieField, newValue });

  const actualMovieState = movie(sampleMovieState, editAction);
  const expectedMovieState = sampleMovieState.set(movieField, newValue);

  t.deepEqual(actualMovieState, expectedMovieState, 'Movie value not changed correctly');
})