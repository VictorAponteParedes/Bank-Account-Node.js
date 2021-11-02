//! Importaciones de modulos 
const morgan = require('morgan')
const express = require('express');
const colors = require('colors')
const app = express();
//! Importaciones de Archivos Externos
const routeIndex = require('./route/index')
require('./database/mongodb')


//!Midelwares
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.set('port' , process.env.PORT || 1500)
app.use(morgan('dev'))
//!Routes
app.use('/' , routeIndex)


app.listen(app.get('port') , ()=>{
    console.log('Server on port :'.red.bold , app.get('port'))
})
