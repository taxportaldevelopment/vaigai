const User = require("../modules/userSchema");

// user details create
exports.userDetailsCreate = async (req,res)=>{
    try{
       
        const {date,days,partyname,drivername,type,designation,reason,totalkm,perkm,totalamount,diesel,driver,tollamount,profitamt} = req.body;
         const dateReplace1 = date.replace("/","-");
         //  23-2-2025
         const dateReplace2 = dateReplace1.replace("/","-");
        //  
         const dateconvert = dateReplace2.split("-")
        const dateResult = `${dateconvert[2]}-${dateconvert[1]}-${dateconvert[0]}`
       const userCreate = await User.create({
            date:dateResult,
            days:days,
            partyname:partyname,
            drivername:drivername,
            type:type,
            designation:designation,
            reason:reason,
            totalkm:totalkm,
            perkm:perkm,
            totalamount:totalamount,
            diesel:diesel,
            driver:driver,
            tollamount:tollamount,
            profitamt:profitamt
       });
       if(userCreate){
           return  res.status(201).json({
               success:true,
               message:"Successfully Applied"
           })
       }
    }catch(err){
          return res.status(500).json({
             success:false,
             error:"Internal server error"
          })
    }
}

// get all users
exports.getAllUser = async (req,res)=>{
     try{
          
          const user = (await User.find()).reverse();

          return res.status(200).json({
              success:true,
              user
          })
     }catch(err){
        return res.status(500).json({
            success:false,
           error:"Internal server error"
        })
     }
}

// get single user
exports.getSingleDate = async (req,res)=>{
     try{
         
            const {date} = req.body;
          
           const user = await User.find({date:date});

           if(!user){
            return res.status(404).json({
                success:false,
                message:"data not found"
            })
           }

           return res.status(200).json({
            success:true,
            user
        })
         
     }catch(err){
        console.log(`user get single user error : ${err}`);
        return res.status(500).json({
            success:false,
           error:"Internal server error"
        })
     }
}
// get download file
exports.getDownloadPdf = async(req,res)=>{
     try{

         const {id} = req.params;

         const user = await User.findById({_id:id});
         if(!user){
            return res.status(404).json({
                success:false,
                message:"data not found"
            })
           }

           return res.status(200).json({
            success:true,
            user
        })
          
     }catch(err){

        return res.status(500).json({
            success:false,
           error:"Internal server error"
        })
     }
}

// from and to filter date

exports.getFromAndToDate = async (req,res)=>{
     try{
        const {from,to} = req.body;
        
       const user = await User.find({date: {$gte:from.toString(), $lte:to.toString()}});

       return res.status(200).json({
        success:true,
        user,
    })
         
     }catch(err){
        return res.status(500).json({
            success:false,
           error:"Internal server error"
        })
     }
}