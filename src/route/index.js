const express = require('express');
const route = express.Router();

const userRoute = require('./userRoutes');

route.use('/user' , userRoute);

module.exports = route;
