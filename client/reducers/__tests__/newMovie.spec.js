import test from 'ava';
import newMovie from '../newMovie';
import { editNewMovieValue, clearNewMovie } from '../../actions/creators';

const defaultMovie = {
  title: '',
  director: '',
  genres: '',
  actors: '',
  notes: '',
}

test('should default to fields w/ empty strings', t => {
  t.deepEqual(defaultMovie, newMovie());
})

test('can update value in new movie', t => {
  const title = 'Star Wars';
  const expected = {
    ...defaultMovie,
    title,
  }
  const actual = newMovie(defaultMovie, editNewMovieValue('title', title))

  t.deepEqual(expected, actual);
});

test('should clear itself after adding to movies list', t => {
  const movie = {
    ...defaultMovie,
    title: 'Up',
    director: 'Pete Docter?',
  }
  
  t.deepEqual(newMovie(movie, clearNewMovie()), defaultMovie);
})