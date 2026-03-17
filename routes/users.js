'use strict';

let express = require('express');
let router = express.Router();
let usuarioController = require('../controllers/usuarios');

router.post('/api/registro', usuarioController.registrar);
router.post('/api/login', usuarioController.login);

module.exports = router;