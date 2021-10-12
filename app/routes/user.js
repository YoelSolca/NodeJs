const express = require('express');

//exportamos todos los metodos del controlador
const contoller = require('./user');

//vamos a poder definir nuestras rutas
const router = express.Router();

const path = 'user';

/* Ruta => /user*/

/* router.get {
    `${path}/`,
    (req, res) => {
        res.send({ a: 1 })
    }
} */

router.get(
    `/${path}`,
    contoller.getData
)

module.exports = router