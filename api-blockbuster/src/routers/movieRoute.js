const express = require('express');
const route = express.Router();

const moviesController = require('../controllers/movieController');
route.get('/Peliculas', moviesController.showMovies);
route.get('/Peliculas/:id', moviesController.searchMovie);
route.post('/Peliculas',moviesController.addMovie);
route.put('/Peliculas/:id',moviesController.modifyMovie);
route.delete('/Peliculas/:id',moviesController.deleteMovie);
module.exports = route;

//showMovies,
  //  modifyMovie,
   // deleteMovie,
   // searchMovie,
  //  addMovie,