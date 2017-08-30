const path = require('path');
const express = require('express');
const moviesRouter = require('./routers/moviesRouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/movies', moviesRouter);

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));