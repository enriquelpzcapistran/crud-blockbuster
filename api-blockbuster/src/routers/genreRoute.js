const express = require('express');
const route = express.Router();
const genreController = require('../controllers/genreController');

route.get('/Genres',genreController.showGenres);
route.get('/Genres/:id',genreController.getGenre);
route.post('/Genres',genreController.addGenre);
route.delete('/Genres/:id',genreController.deleteGenre);

module.exports = route;