const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // _id: Number,
    type_name: String,
    is_active: Boolean,
    monthly_recurrence: Boolean

    // type_name: String,
    // is_active: {type: Boolean, default: "true"},
    // monthly_recurrence: {type: Boolean, default: "false"}
});

module.exports=mongoose.model('DonationType', userSchema);
