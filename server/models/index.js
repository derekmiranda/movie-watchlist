const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const dbConfigPath = path.join(__dirname, '..', '..', 'config', 'db.json');
const dbConfigMap = require(dbConfigPath);

const dbConfig = dbConfigMap[process.env.NODE_ENV] || dbConfigMap.development;
const sequelize = new Sequelize(dbConfig);
