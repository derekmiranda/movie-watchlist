module.exports = function(sequelize, DataTypes) {
  const makeStringDefn = () => ({
    type: DataTypes.STRING,
    defaultValue: ''
  })

  const Movie = sequelize.define('movie', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    director: makeStringDefn(),
    genres: makeStringDefn(),
    actors: makeStringDefn(),
    notes: makeStringDefn(),
  })

  return Movie;
}