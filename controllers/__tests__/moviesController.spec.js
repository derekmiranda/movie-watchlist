import test from 'ava';

import moviesController from '../moviesController';
import db from '../../models';
import { avaDbSetup } from '../../utils/tests';

avaDbSetup(test);

const movies = [
  { id: 1, title: 'Star Wars' },
  { id: 2, title: 'Annie Hall' },
  { id: 3, title: 'Reservoir Dogs' },
]

test('can update multiple movies', async t => {
  await db.Movie.bulkCreate(movies)
  const updates = [
    { id: 1, title: 'Star War' },
    { id: 3, title: 'Reservoir Cats' },
  ]
  const updateResults = await moviesController.updateMovies(updates);
  t.deepEqual(updateResults, [[1], [1]]);
  const foundMovies = await db.Movie.findAll();
  const movieTitles = foundMovies.map(movie => movie.title);
  t.deepEqual(movieTitles, ['Star War', 'Annie Hall', 'Reservoir Cats']);
})

test.todo('can get all movies')
test.todo('can add movie');
test.todo('can remove movie');