'use strict';
let express = require('express');
let bodyParser = require('body-parser');
let routerVenta = require('./routes/venta');
let routerUsers = require('./routes/users');

let application = express();

application.use(bodyParser.json());
application.use(routerVenta);
application.use(routerUsers);

module.exports = application;