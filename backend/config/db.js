const mongoose=require("mongoose");

const connection=async()=>{
   try{
    await  mongoose.connect("mongodb://localhost:27017/database");
    console.log("DB Connected Successfully");
   } catch(error){
    console.log("failed to connect DB⭐");
   }
};


module.exports=connection;