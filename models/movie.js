'use strict';
module.exports = function(sequelize, DataTypes) {
  const makeStringDefn = () => ({
    type: DataTypes.STRING,
    defaultValue: ''
  })

  const Movie = sequelize.define('Movie', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    director: makeStringDefn(),
    genres: makeStringDefn(),
    actors: makeStringDefn(),
    notes: makeStringDefn(),
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