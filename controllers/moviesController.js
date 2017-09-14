const _ = require('lodash');

const db = require('../models');
const { whitelist } = require('../models/movie');

const moviesController = {};
const Movie = db.Movie;

moviesController.getMovies = (queryObj = {}) => {
  return Movie.findAll({ where: queryObj, order: ['id'] });
}

moviesController.addMovie = (movie) => {
  return Movie.create(movie);
}

moviesController.updateMovies = (movies) => {
  const updatePromises = movies.map(movie => moviesController.updateMovie(movie));
  return Promise.all(updatePromises);
}

moviesController.updateMovie = (movie) => {
  return Movie.update(movie, {
    where: { id: movie.id },
  })
}

moviesController.removeMovie = (id) => {
  return Movie.destroy({
    where: { id },
  })
}

module.exports = moviesController;