const _ = require('lodash');
const db = require('../models');
const { whitelist } = require('../models/movie');

const moviesController = {};
const Movie = db.movie;

moviesController.getMovies = (queryObj = {}) => {
  return Movie.findAll({ where: queryObj });
}

moviesController.addMovie = (movie) => {
  return Movie.create(movie);
}

moviesController.updateMovie = (movie) => {
  const { id } = movie;

  return Movie.update({
    where: { id },
    fields: _.pick(movie, whitelist),
  })
}

moviesController.removeMovie = (movie) => {
  const { id } = movie;

  return Movie.remove({
    where: { id },
  })
}

module.exports = moviesController;