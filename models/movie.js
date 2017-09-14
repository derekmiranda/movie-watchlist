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
        Movie.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Movie;
};