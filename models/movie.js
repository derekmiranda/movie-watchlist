module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define('movie', {
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: true },
    },
    director: DataTypes.STRING,
    genres: DataTypes.STRING,
    actors: DataTypes.STRING,
    notes: DataTypes.STRING,
  })

  return Movie;
}