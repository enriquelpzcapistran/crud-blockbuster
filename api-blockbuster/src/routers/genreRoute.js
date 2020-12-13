const express = require('express');
const route = express.Router();
const genreController = require('../controllers/genreController');

route.get('/Generos',genreController.showGenres);
route.get('/Generos/:id',genreController.getGenre);
route.post('/Generos',genreController.addGenre);
route.delete('/Generos/:id',genreController.deleteGenre);

module.exports = route;