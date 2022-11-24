const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');

async function login(req, res){

    const user = await User.findOne({
        email: req.body.email
    });

    if(user == null){
        res.status(403).send({message: 'Invalid Credentials'});
        return;
    }else{
        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if(!validPassword){
            res.status(403).send({message: 'Invalid Password'});
            return;
        }else{
            jwt.sign({user: user}, 'secretKey', {expiresIn: '24h'}, (err, token) => {
                if(err){
                    res.json({message: 'Error'})
                }else{
                    res. status(200).send({message: 'Authentication success', token: token})
                }
            })
        }
    }
}


function profile(req, res){
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if(err){
            res.json({message: err, isValid: false, user: authData})
        }else{
            res.json({isValid: true, user: authData})
        }
    })
}


function verifyToken(req, res, next){
    const bearerHeader = req.headers["authorization"];

    if(typeof bearerHeader !== undefined){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }else{
        res.status(403).send({message: 'logueate primero' });
    }
}

module.exports = {login, profile, verifyToken};