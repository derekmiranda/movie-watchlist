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

const makeControllerMiddleware = (controllerPromiseFn, ...controllerFnArgs) => {
  return (req, res) => (
    controllerPromiseFn(...controllerFnArgs)
      .then(result => formattedJSONResponse(res, result))
      .catch(err => errorResponse({ res, err, statusCode: 500 }))
  )
}

moviesRouter.get('/', makeControllerMiddleware(moviesController.getMovies));

moviesRouter.post('/', (req, res, next) => {
  const { movie } = req.body;
  const middleware = makeControllerMiddleware(moviesController.addMovie, movie);
  return middleware(req, res, next);
});

moviesRouter.patch('/', (req, res, next) => {
  const { movies } = req.body;
  const middleware = makeControllerMiddleware(moviesController.updateMovies, movies);
  return middleware(req, res, next);
});

moviesRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  const middleware = makeControllerMiddleware(moviesController.removeMovie, id);
  return middleware(req, res, next);
});

module.exports = moviesRouter;