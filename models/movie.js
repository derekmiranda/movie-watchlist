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
      unique: true,
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

module.exports.whitelist = [
  'title',
  'director',
  'genres',
  'actors',
  'notes',
]