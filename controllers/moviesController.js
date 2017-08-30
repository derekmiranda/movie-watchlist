const db = require('../models');

const moviesController = {};
const Movie = db.movie;

moviesController.getMovies = (queryObj = {}) => {
  return Movie.findAll({ where: queryObj });
}

moviesController.addMovie = (movie) => {
  return Movie.create(movie);
}

moviesController.updateMovies = (movies) => {}
moviesController.removeMovie = () => {}

module.exports = moviesController;