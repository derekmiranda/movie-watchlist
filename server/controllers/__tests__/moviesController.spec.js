import test from 'ava';
import db from '../../models';

test('Test if db works', t => {
  const { sequelize } = db;
  sequelize
    .authenticate()
    .then(t.pass())
    .catch(err => { throw err; })
})