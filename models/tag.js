'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Tag;
};