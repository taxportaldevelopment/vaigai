const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
      date:{
         type:String,
         required:true
      },
      days:{
        type:String,
        required:true
     },
     partyname:{
        type:String,
        required:true
     },
     drivername:{
        type:String,
        required:true
     },
     type:{
        type:String,
        required:true
     },
     designation:{
        type:String,
        required:true
     },
     reason:{
        type:String,
        required:true
     },
     totalkm:{
        type:String,
        required:true
     },
     perkm:{
        type:String,
        required:true
     },
     totalamount:{
        type:String,
     },
     diesel:{
        type:String,
        required:true
     },
     driver:{
        type:String,
        required:true
     },
     tollamount:{
        type:String,
     },
     profitamt:{
        type:String,
        required:true
     },
},{timestamps:true})

const User = mongoose.model("users",userSchema);

module.exports = User;