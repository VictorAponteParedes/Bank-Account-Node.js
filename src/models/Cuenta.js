const mongoose = require('mongoose'); 
const Schema = mongoose.Schema

 const CuentaSchema = new  Schema({
         email:{ type:String, require:true  },

         password:{ type:String, require:true  },

         createDate:{ type:Date,require:true  },   
 })

   

 module.exports = mongoose.model('Cuentas' , CuentaSchema )