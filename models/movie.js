'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Movie;
};