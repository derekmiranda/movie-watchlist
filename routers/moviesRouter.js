const express = require('express');
const moviesController = require('../controllers/moviesController');

const moviesRouter = express.Router();

const errorResponse = ({ res, err, statusCode }) => res.status(statusCode).end(err);

moviesRouter.get('/', (req, res) => moviesController.getMovies()
  .then(movies => res.json(movies))
  .catch(err => errorResponse({ res, err, statusCode: 500 }))
);

moviesRouter.post('/', (req, res) => {
  const { movie } = req.body;
  return moviesController.addMovie(movie)
    .then(result => res.json(result))
    .catch(err => errorResponse({ res, err, statusCode: 500 }))
})

module.exports = moviesRouter;