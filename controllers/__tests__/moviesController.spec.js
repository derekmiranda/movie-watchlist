import test from 'ava';
import _ from 'lodash';
import moviesController from '../moviesController';

test.beforeEach('Initialize db', async t => {
  const dbPromise = require('../../models')
  const db = await dbPromise;
  t.context.db = db;
})

test.serial('db should authenticate', t => {
  const { sequelize } = t.context.db;
  sequelize.authenticate()
    .then(t.pass())
    .catch(err => { throw err; })
})

test.serial('should contain given methods', t => {
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

test.serial('can get all movies', async t => {
  const movies = [
    { title: 'Toy Story' },
    { title: 'Toy Story 2' },
  ];
  const Movie = t.context.db.movie;
  try {
    const res = await Movie.bulkCreate(movies);
    const foundMovies = await Movie.findAll();

    const byId = (a, b) => a.id > b.id;
    foundMovies
      .sort(byId)
      .forEach((foundMovie, i) => {
        const movie = movies[i];
        Object.keys(movie).forEach((key) => {
          t.is(movie[key], foundMovie[key]);
        })
      })
  } catch (err) {
    throw err;
  }
})

test.serial('should default non-title values to empty string', async t => {
  const movie = {
    title: 'Toy Story'
  };
  const Movie = t.context.db.movie;
  try {
    const res = await Movie.create(movie);
    const firstMovie = await Movie.find();
    const firstMovieData = _.pick(firstMovie, [
      'id', 'title', 'director', 'genres', 'actors', 'notes'
    ])
    t.deepEqual(firstMovieData, {
      id: 1,
      title: 'Toy Story',
      director: '',
      genres: '',
      actors: '',
      notes: '',
    });
  } catch (err) {
    throw err;
  }
})

test.afterEach(async t => {
  // clear database for next test
  await t.context.db.sequelize.sync({ force: true });
})