const express = require('express');
const moviesController = require('../controllers/moviesController');

const moviesRouter = express.Router();

moviesRouter.get('/', (req, res) => res.end('hi'));

module.exports = moviesRouter;