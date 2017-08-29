const Sequelize = require('sequelize');
const {
  host,
  dialect,
  username,
  password,
  database,
} = require('../../config/db.json');

const sequelize = new Sequelize({
  host,
  dialect,
  username,
  password,
  database,
})