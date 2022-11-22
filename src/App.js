const express = require('express');
const router = require('./router/router');
const { urlencoded } = require('express');

let app = express();

app.use(express.json());
app.use(urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, XRequested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Allow', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(router);

module.exports = app;
