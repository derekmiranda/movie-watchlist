import test from 'ava';
import sinon from 'sinon';
import moviesController from '../moviesController';
import db from '../../models';

const movies = [
  { title: 'Star Wars' },
  { title: 'Annie Hall' },
  { title: 'Reservoir Dogs' },
]

test.beforeEach('Set up stubs', t => {
  const findAllStub = sinon.stub(db.movie, 'findAll');
  t.context.findAllStub = findAllStub;
})

test.afterEach('Restore stubs', t => {
  t.context.findAllStub.restore()
})

test('can get all movies', async t => {
  t.context.findAllStub.withArgs({}).resolves(movies);
  const foundMovies = await moviesController.getMovies({});
  
  movies.forEach((movie, i) => {
    const foundMovie = foundMovies[i];
    t.is(movie.title, foundMovie.title);
  })
})