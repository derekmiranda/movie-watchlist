const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const dbConfigPath = path.join(__dirname, '..', 'config', 'config.json');
const dbConfigMap = require(dbConfigPath);

const env = process.env.NODE_ENV;
const dbConfig = dbConfigMap[env] || dbConfigMap.development;
const sequelize = new Sequelize(dbConfig);
const db = {};

fs.readdirSync(__dirname)
  .filter(file => !file.startsWith('.') && !file.startsWith('_') && file !== 'index.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.syncPromise = () => sequelize.sync();

module.exports = db;