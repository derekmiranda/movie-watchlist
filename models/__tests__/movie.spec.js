import test from 'ava';
import _ from 'lodash';

import db from '../index';
import { avaDbSetup } from '../../utils/tests';

avaDbSetup(test);

test.serial('db should authenticate', t => {
  const { sequelize } = db;
  sequelize.authenticate()
    .then(t.pass())
    .catch(err => { throw err; })
})

test.serial('can get all movies', async t => {
  const movies = [
    { title: 'Toy Story' },
    { title: 'Toy Story 2' },
  ];
  const Movie = db.Movie;
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
  const Movie = db.Movie;
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

test.serial('should have unique titles', async t => {
  const Movie = db.Movie;
  await t.throws(Movie.bulkCreate([
    { title: 'It' },
    { title: 'It' },
  ]))
})

const movieThrowsMacro = async (t, obj) => {
  const Movie = db.Movie;
  await t.throws(Movie.create(obj));
}

test.serial('should require a non-empty title', movieThrowsMacro, { title: '' });
test.serial('should require a non-null title', movieThrowsMacro, {});