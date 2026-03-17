'use strict';

let express = require('express');
let router = express.Router();

let ventaController = require('../controllers/venta');
let auth = require('../helpers/auth');

router.post('/api/venta', auth.validateToken, ventaController.registrarVenta);

module.exports = router;