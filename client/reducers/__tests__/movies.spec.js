import test from 'ava';
import movies from '../movies';
import { addMovie } from '../../actions/creators';

const defaultMovie = {
  title: '',
  director: '',
  genres: '',
  actors: '',
  notes: '',
}

const sampleMovie = {
  title: 'Toy Story',
  director: 'John Lasseter',
  genres: 'Animated',
  actors: 'Woody, Buzz',
  notes: 'Great.',
}

test('should default to empty array', t => {
  t.deepEqual(movies(), []);
})

test('should add new movie to list', t => {
  const expected = [ { ...sampleMovie} ];
  const actual = movies(undefined, addMovie(sampleMovie));

  t.deepEqual(expected, actual);
})

test.todo('can update value in previously saved movie');
test.todo('can remove a movie');