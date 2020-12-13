const express = require('express');
const route = express.Router();
const genreController = require('../controllers/genreController');

route.get('/generos',genreController.showGenres);
route.get('/generos/:id',genreController.getGenre);
route.post('/generos',genreController.addGenre);
route.delete('/generos/:id',genreController.deleteGenre);

module.exports = route;