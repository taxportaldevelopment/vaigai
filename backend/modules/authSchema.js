const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const AuthSchema = new mongoose.Schema({
      name:{type:String},
      username:{type:String},
      email:{type:String},
      password:{type:String}
},{timestamps:true});

AuthSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next();
    }
     this.password = await bcrypt.hash(this.password, 10)
})

AuthSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this.id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })
}

// AuthSchema.methods.isValidPassword = async function(enteredPassword){
//    return  bcrypt.compare(enteredPassword, this.password)
// }
const Auth = mongoose.model("auth",AuthSchema);
module.exports = Auth;