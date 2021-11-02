const mongoose = require('mongoose')
const colors = require('colors')
const url  = "mongodb://localhost:27017/Cuentas";

 try{
  mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true 
   } )

const conectSuccess = mongoose.connection
conectSuccess.once('open', _ => {
console.log('Database connected:'.yellow.bold , url)
})

 }catch(e){
   console.log('this is a error',e)
 }
   

     