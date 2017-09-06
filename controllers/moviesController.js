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

moviesController.updateMovies = (id, movies) => {
  const updatePromises = movies.map(movie => moviesController.updateMovie(movie));
  return Promise.all(updatePromises);
}

moviesController.updateMovie = (id, movie) => {
  return Movie.update(movie, {
    where: { id },
  })
}

moviesController.removeMovie = (id) => {
  return Movie.destroy({
    where: { id },
  })
}

module.exports = moviesController;