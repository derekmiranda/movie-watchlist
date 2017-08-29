const Sequelize = require('sequelize');
const dbConfigMap = require('../../config/db.json');

const dbConfig = dbConfigMap[process.env.NODE_ENV] || dbConfigMap.development;
const sequelize = new Sequelize(dbConfig);

sequelize
  .authenticate()
  .then(() => console.log(`Connected to ${dialect} database`))
  .catch(err => { throw err; });