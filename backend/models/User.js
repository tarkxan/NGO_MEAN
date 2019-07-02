const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    role:String,
    cma:Number,
    phone:Number,
    address1:String,
    address2:String,
    city:String,
    state:String,
    zip:String,
    country:String
});

module.exports=mongoose.model('User',userSchema);
