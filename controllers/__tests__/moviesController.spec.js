import test from 'ava';
import moviesController from '../moviesController';

test.beforeEach('Initialize db', async t => {
  const dbPromise = require('../../models')
  const db = await dbPromise;
  t.context.db = db;
})

test('db should authenticate', t => {
  const { sequelize } = t.context.db;
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

test.only('can get all movies', async t => {
  const Movie = t.context.db.movie;
  try {
    const movies = await Movie.findAll();
    t.pass();
  } catch (err) {
    throw err;
  }
})