const mongoose = require('mongoose'); 
const Schema = mongoose.Schema


const UserSchema = new Schema({
     
    user:{nationality:{ type:String,require:true  },

    name:{type:String, require:true  },

    lastName:{ type:String, require:true }, 

    dateOfBirth:{ type:Date,  require:true  },

    nameRoute:{ type:String, require:true  },

    Address:{
        number:{ type:Number, require:true },

        flat:{ type:Number   },
    
        zipCode:{ type:Number,  require:true  },
    
        contactNumber:{type:Number,require:true },
        },
         },
    
    
    email:{ type:String, require:true  },

    password:{ type:String, require:true  },

    createDate:{ type:Date,require:true  },  



})

module.exports = mongoose.model('Users' , UserSchema )
