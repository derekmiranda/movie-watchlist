'use strict';
module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define('Person', {
    id: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Person;
};