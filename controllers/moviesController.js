const db = require('../models');

const moviesController = {};

moviesController.getMovies = (queryObj) => {
  const Movie = db.movie;
  return Movie.findAll(queryObj);
}

moviesController.addMovie = () => {}
moviesController.updateMovies = () => {}
moviesController.removeMovie = () => {}

module.exports = moviesController;