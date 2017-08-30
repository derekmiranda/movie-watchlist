module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    title: {
      type: DataTypes.string,
      validate: { notEmpty: true },
    },
    director: DataTypes.string,
    genres: DataTypes.string,
    actors: DataTypes.string,
    notes: DataTypes.string,
  })

  return User;
}