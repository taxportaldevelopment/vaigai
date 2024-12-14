const Auth = require("../modules/authSchema");
const sendToken = require("../utils/JWT");

// register
exports.registerAuth = async (req,res)=>{
    try{

          const {name,username,email,password} = req.body;

        const userEmail = await Auth.findOne({email:email});
        if(userEmail){
             return res.status(400).json({
                 success:false,
                 message:"email already exists"
             })
        }
       const user = await Auth.create({name,username,email,password});
       const userSelect = {
              name:user.name,
              username:user.username,
              email:user.email
       }
       sendToken(user,201,res)  
    // return res.status(201).json({
    //      success:true,
    //      userSelect
    // })

    }catch(err){
          return res.status(400).json({
              success:false,
              message:"Internal Server Error",
              err
          })
    }
}
// login
exports.login = async (req,res)=>{
       try{
          
           
       }catch(err){
        return res.status(400).json({
            success:false,
            message:"Internal Server Error"
        })
       }
}