const mongoose = require('mongoose'); 
const Schema = mongoose.Schema


const UserSchema = new Schema({

    nationality:{ type:String,require:true  },

    name:{type:String, require:true  },

    lastName:{ type:String, require:true }, 

    dateOfBirth:{ type:Date,  require:true  },

    nameRoute:{ type:String, require:true  },



})

module.exports = mongoose.model('Users' , UserSchema )