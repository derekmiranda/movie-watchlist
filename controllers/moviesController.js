const _ = require('lodash');
const db = require('../models');
const { whitelist } = require('../models/movie');

const moviesController = {};
const Movie = db.movie;

moviesController.getMovies = (queryObj = {}) => {
  return Movie.findAll({ where: queryObj, order: ['id'] });
}

moviesController.addMovie = (movie) => {
  return Movie.create(movie);
}

moviesController.updateMovie = (id, movie) => {
  return Movie.update(movie, {
    where: { id },
  })
}

moviesController.removeMovie = (id) => {
  return Movie.remove({
    where: { id },
  })
}

module.exports = moviesController;