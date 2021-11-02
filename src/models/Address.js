const mongoose = require('mongoose'); 
const Schema = mongoose.Schema

const AddressSchema = new Schema({
    number:{ type:Number, require:true },

    flat:{ type:Number   },

    zipCode:{ type:Number,  require:true  },

    contactNumber:{type:Number,require:true },
})


module.exports = mongoose.model('Addresses' , AddressSchema )