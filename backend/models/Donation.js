const mongoose = require('mongoose');

const donationsSchema = new mongoose.Schema({
    //donation_type: String,
    donation_type_id: String,
    // u_name:String,
    user_id: String,
    donation_date: String,
    amount: Number,
    monthly_recurrence: Boolean,

    // type_name:String,
    // u_name:String,
    // donation_date:String,
    // amount:Number,
    // monthly_recurrence:Boolean

});
module.exports=mongoose.model('DonationDetail', donationsSchema);