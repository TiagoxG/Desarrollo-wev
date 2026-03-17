'use strict'

let jwt = require('jwt-simple');
let moment = require('moment');

let secret = 'asdfewa123!"#$%..,.,1#!';

function createToken(usuario) {
    let payload = {
        sub: usuario._id,
        email: usuario.email,
        rol: usuario.rol,
        iat: moment().unix(),
        exp: moment().add(10, 'minutes').unix()
    };
    return jwt.encode(payload, secret);
}

function validateToken(req, res, next){
    try{
        let token = req.headers.authorization.replace('Bearer ', '');

        let payload = jwt.decode(token, secret);

        req.user = payload; // Recordar el ID del usuario que se logueo
        next();
    }
    catch(err){
        res.status(401).send({message: 'Token Invalido.'});    

    }
}
module.exports = {createToken, validateToken};