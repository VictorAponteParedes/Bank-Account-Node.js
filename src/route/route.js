//!Importaciones de Modulos
const express = require('express')
const route = express.Router()

//!Importaciones de Archivos Externos
const Cuenta = require('../models/Cuenta')
const Cuenta = require('../models/User')
const Cuenta = require('../models/Address')

//! Main Route
route.get('/' , (req , res )=>{
    res.send('Welcome to the Banks home page ! ')
})
//!to get all users
route.get('/get' , async (req , res , next)=>{
  try{
  await Cuenta.find()
 .then(data => res.json(data))
} catch(e){
   return next(e)        
 } 
})
//!to get by id users
route.get('/:id' , async (req , res , next)=>{
  try{
  const {id} = req.params;
  await Cuenta.findById(id)
 .then(data => res.json(data))
 res.send('User obtained !')
}catch(e){
   return next(e)        
 } 
})

//! User Loger 
route.post('/login' ,async (req , res , next )=>{
    try{
    const cuenta = Cuenta(req.body)
    await cuenta.save()
    res.send('Account Created')
  } catch(e){
    return next(e)
  }
});
//!user update !
route.put('/:id' ,async(req , res)=>{
  try{   
  const {id} = req.params;
  const {nationality,   name,  lastName,  dateOfBirth,
         nameRoute, number, flat, zipCode, contactNumber,
         email, password, createDate   } = req.body;

  await Cuenta.updateOne(
    {_id:id},{$set:{
    nationality,  name,   lastName,  dateOfBirth,
    nameRoute,  number,  flat, zipCode,
    contactNumber, email, password, createDate 

  }})
 .then(data => res.json(data))
 
}catch(e){
   return next(e)
 }
});

//! delete by id users!
route.delete('/:id' , async(req , res , next )=>{
  try{
      const {id} = req.params;
      await Cuenta.findByIdAndRemove(id);
  }   catch(e){
      return next(e)
  }
   res.send('user deleted!')

})




 









module.exports  = route ;



