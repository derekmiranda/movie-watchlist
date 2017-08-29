const Sequelize = require('sequelize');
const dbConfigMap = require('../../config/db.json');
const dbConfig = dbConfigMap[process.env.NODE_ENV] || dbConfigMap.development;

const {
  host,
  dialect,
  username,
  password,
  database,
} = dbConfig;

const sequelize = new Sequelize({
  host,
  dialect,
  username,
  password,
  database,
})