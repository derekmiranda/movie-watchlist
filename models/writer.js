'use strict';
module.exports = function(sequelize, DataTypes) {
  var Writer = sequelize.define('Writer', {
    person_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Writer;
};