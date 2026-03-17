'use strict';

let mongoose = require('mongoose');
let application = require('./application');
let users = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/parcialuno'). then(
    ()=>{
        console.log('Coneccion exitosa');
        application.listen(1703);

    },
    err =>{
        console.error(err);
    }
)