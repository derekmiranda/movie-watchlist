import test from 'ava';
import { movie } from '../movies';
import { updateValue } from '../../actions/creators';

const defaultMovie = {
  title: '',
  director: '',
  genres: '',
  actors: '',
  notes: '',
}

test('should default to fields w/ empty strings', t => {
  t.deepEqual(defaultMovie, movie());
})

test('can update value in currently movie', t => {
  const title = 'Star Wars';
  const expected = {
    ...defaultMovie,
    title,
  }
  const actual = movie(defaultMovie, updateValue({
    field: 'title',
    value: title,
  }))

  t.deepEqual(expected, actual);
});