const express = require('express');
const moviesController = require('../controllers/moviesController');

const moviesRouter = express.Router();

const errorResponse = ({ res, err, statusCode }) => res.status(statusCode).json(err);
const JSONFormat = data => JSON.stringify(data, null, 4);
const formattedJSONResponse = (res, data) => (
  res
    .header('Content-Type', 'application/json')
    .end(JSONFormat(data))
);

moviesRouter.get('/', (req, res) => moviesController.getMovies()
  .then(movies => formattedJSONResponse(res, movies))
  .catch(err => errorResponse({ res, err, statusCode: 500 }))
);

moviesRouter.post('/', (req, res) => {
  const { movie } = req.body;
  return moviesController.addMovie(movie)
    .then(created => formattedJSONResponse(res, created))
    .catch(err => errorResponse({ res, err, statusCode: 500 }))
})

moviesRouter.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { movie } = req.body;
  return moviesController.updateMovie(id, movie)
    .then(result => formattedJSONResponse(result))
    .catch(err => errorResponse({ res, err, statusCode: 500 }))
})

module.exports = moviesRouter;