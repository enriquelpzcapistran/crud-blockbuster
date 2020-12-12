const express = require('express');
const route = express.Router();
const genreController = require('../controllers/genreController');

routes.get('/genero',genreController.listadoGeneros);
routes.get('/genero/:id',genreController.obtenerUnGenero);
routes.post('/genero',genreController.crearGenero);
routes.delete('/genero/:id',genreController.eliminarGenero);

module.exports = routes;