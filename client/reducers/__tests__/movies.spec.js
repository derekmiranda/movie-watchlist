import test from 'ava';
import movies, { movie } from '../movies';
import { addMovie, deleteMovie, updateValue } from '../../actions/creators';

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
  const initState = [ { ...sampleMovie }, otherMovie ];
  
  const expected = [ { ...otherMovie } ];
  const actual = movies(initState, deleteMovie(0));
  
  t.deepEqual(expected, actual);
})

test('can update value in previously saved movie', t => {
  const initState = [ {...sampleMovie} ];
  
  const director = 'Uwe Boll';
  const expected = [ {...sampleMovie, director } ];
  const actual = movies(initState, updateValue({
    movieIdx: 0,
    field: 'director',
    value: director,
  }))

  t.deepEqual(expected, actual);
});