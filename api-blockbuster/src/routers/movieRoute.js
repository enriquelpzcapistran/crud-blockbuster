const express = require('express');
const route = express.Router();

const moviesController = require('../controllers/movieController');
route.get('/Movies', moviesController.showMovies);
route.get('/Movies/:id', moviesController.searchMovie);
route.post('/Movies',moviesController.addMovie);
route.put('/Movies/:id',moviesController.modifyMovie);
route.delete('/Movies/:id',moviesController.deleteMovie);
module.exports = route;

//showMovies,
  //  modifyMovie,
   // deleteMovie,
   // searchMovie,
  //  addMovie,