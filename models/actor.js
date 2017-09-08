'use strict';
module.exports = function(sequelize, DataTypes) {
  var Actor = sequelize.define('Actor', {
    person_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Actor;
};