const express = require('express');
const routes = express.Router();

const moviesController = require('../controllers/moviesController');
routes.get('/movie', moviesController.showMovies);
routes.get('/movie/:id', moviesController.getMovie);
routes.post('/movie',moviesController.createMovie);
routes.put('/movie/:id',moviesController.modifyMovie);
routes.delete('/movie/:id',moviesController.deleteMovie);
module.exports = routes;