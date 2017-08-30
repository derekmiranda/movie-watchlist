import test from 'ava';
import db from '../../models';
import moviesController from '../moviesController';

test('db should authenticate', t => {
  const { sequelize } = db;
  sequelize
    .authenticate()
    .then(t.pass())
    .catch(err => { throw err; })
})

test('should contain given methods', t => {
  const methods = [
    'getMovies',
    'postMovie',
    'updateMovies',
    'removeMovie',
  ]

  methods.forEach((method) => {
    t.true(method in moviesController);
    t.is(typeof moviesController[method], 'function');
  })
})

test.only('can get all movies', async function(t) {
  const Movie = db.movie;
  try {
    const movies = await Movie.findAll();
    console.log('movies:', movies);
    t.pass();
  } catch (err) {
    throw err;
  }
})