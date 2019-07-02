const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    role: String
});

module.exports=mongoose.model('UserBasic',userSchema);
