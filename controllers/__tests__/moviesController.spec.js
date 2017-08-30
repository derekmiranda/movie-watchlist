import test from 'ava';
import _ from 'lodash';
import moviesController from '../moviesController';
import db from '../../models';

test.beforeEach('Sync db', async t => {
  await db.syncPromise();
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

test.afterEach(async t => {
  // clear database for next test
  await db.sequelize.sync({ force: true });
})