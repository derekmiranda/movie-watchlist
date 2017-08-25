import test from 'ava';
import movies from '../movies';
import { addMovie, deleteMovie } from '../../actions/creators';

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

test('can remove a movie', t => {
  const otherMovie = { ...sampleMovie, title: 'Toy Story 2' };
  const initState = [ { ...sampleMovie}, otherMovie ];
  
  const expected = [ { ...otherMovie } ];
  const actual = movies(initState, deleteMovie(0));
  
  t.deepEqual(expected, actual);
})

test.todo('can update value in previously saved movie');